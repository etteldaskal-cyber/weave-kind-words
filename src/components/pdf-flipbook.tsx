import { useEffect, useMemo, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Use the bundled worker (Vite resolves the URL at build time).
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

type Props = {
  url: string;
  title?: string;
};

/**
 * Renders a PDF as a book:
 *   - page 1 alone (cover)
 *   - then spreads (2,3), (4,5), ...
 *   - click the right half / a page → next spread
 *   - click the left half → previous spread
 */
export function PdfFlipbook({ url, title }: Props) {
  const [numPages, setNumPages] = useState(0);
  // "spread" 0 = cover, 1 = pages (2,3), 2 = (4,5), etc.
  const [spread, setSpread] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [pageWidth, setPageWidth] = useState(420);

  // Reset on URL change.
  useEffect(() => {
    setSpread(0);
    setNumPages(0);
  }, [url]);

  // Responsive width: each page is ~half the container (minus gap), with a max.
  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    const update = () => {
      const w = el.clientWidth;
      // On narrow screens, render one page at near-full width.
      if (w < 640) setPageWidth(Math.min(w - 24, 520));
      else setPageWidth(Math.min(Math.floor((w - 32) / 2), 520));
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const totalSpreads = useMemo(() => {
    if (numPages <= 1) return 1;
    // cover (1) + ceil((numPages-1)/2)
    return 1 + Math.ceil((numPages - 1) / 2);
  }, [numPages]);

  const goNext = () => setSpread((s) => Math.min(s + 1, totalSpreads - 1));
  const goPrev = () => setSpread((s) => Math.max(s - 1, 0));

  // Touch swipe support
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return;
    if (dx < 0) goNext();
    else goPrev();
  };

  // Compute which pages to show for current spread.
  const { leftPage, rightPage } = useMemo(() => {
    if (spread === 0) return { leftPage: null, rightPage: 1 };
    const left = 2 * spread; // spread 1 → 2, spread 2 → 4
    const right = left + 1;
    return {
      leftPage: left <= numPages ? left : null,
      rightPage: right <= numPages ? right : null,
    };
  }, [spread, numPages]);

  return (
    <div className="flex flex-col items-center">
      <div
        ref={containerRef}
        className="relative w-full select-none touch-pan-y"
        aria-label={title ? `${title} flipbook` : "PDF flipbook"}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <Document
          file={url}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          loading={
            <div className="flex h-[520px] items-center justify-center text-sm text-muted-foreground">
              Loading book…
            </div>
          }
          error={
            <div className="flex h-[280px] items-center justify-center text-sm text-destructive">
              Couldn't load this PDF.
            </div>
          }
        >
          <div
            className={
              "mx-auto flex items-stretch justify-center gap-1 " +
              (spread === 0 ? "" : "bg-ink/10 p-1 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)]")
            }
          >
            {/* Left page (or blank for cover) */}
            {leftPage ? (
              <button
                type="button"
                onClick={goPrev}
                className="group relative block bg-white shadow-md transition-shadow hover:shadow-lg"
                aria-label="Previous page"
              >
                <Page
                  pageNumber={leftPage}
                  width={pageWidth}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                />
                <span className="pointer-events-none absolute inset-y-0 left-0 w-2 bg-gradient-to-r from-black/10 to-transparent" />
              </button>
            ) : null}

            {/* Right page */}
            {rightPage ? (
              <button
                type="button"
                onClick={goNext}
                className="group relative block bg-white shadow-md transition-shadow hover:shadow-lg"
                aria-label="Next page"
              >
                <Page
                  pageNumber={rightPage}
                  width={pageWidth}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                />
                <span className="pointer-events-none absolute inset-y-0 right-0 w-2 bg-gradient-to-l from-black/10 to-transparent" />
              </button>
            ) : null}
          </div>
        </Document>
      </div>

      {/* Controls */}
      <div className="mt-6 flex items-center gap-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">
        <button
          type="button"
          onClick={goPrev}
          disabled={spread === 0}
          className="inline-flex items-center gap-1 rounded-sm border border-border px-3 py-2 transition hover:text-foreground disabled:opacity-40"
        >
          <ChevronLeft className="h-3.5 w-3.5" /> Prev
        </button>
        <span className="font-medium">
          {numPages === 0
            ? "—"
            : spread === 0
              ? `Cover · ${numPages} pages`
              : `Pages ${leftPage}${rightPage ? `–${rightPage}` : ""} of ${numPages}`}
        </span>
        <button
          type="button"
          onClick={goNext}
          disabled={spread >= totalSpreads - 1}
          className="inline-flex items-center gap-1 rounded-sm border border-border px-3 py-2 transition hover:text-foreground disabled:opacity-40"
        >
          Next <ChevronRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
