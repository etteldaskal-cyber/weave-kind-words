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
 * One PDF page per view.
 *   - page 1 → rendered as a single portrait page
 *   - pages 2+ → each rendered as a single full-width image (each page already
 *     contains a full two-page spread in the source PDF when applicable)
 *   - navigation moves one page at a time
 */
export function PdfFlipbook({ url, title }: Props) {
  const [numPages, setNumPages] = useState(0);
  const [pageIndex, setPageIndex] = useState(1); // 1-based
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(800);

  // Client-only mount gate (react-pdf can't render during SSR).
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    setPageIndex(1);
    setNumPages(0);
  }, [url]);

  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    const update = () => setContainerWidth(el.clientWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const goNext = () => setPageIndex((p) => Math.min(p + 1, numPages || p));
  const goPrev = () => setPageIndex((p) => Math.max(p - 1, 1));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return;
      if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [numPages]);

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

  // Page 1 = portrait (narrower); subsequent pages = full width spreads.
  const renderWidth = useMemo(() => {
    if (pageIndex === 1) {
      // portrait — cap at ~60% of container, max 560
      return Math.min(Math.floor(containerWidth * 0.6), 560);
    }
    return containerWidth;
  }, [pageIndex, containerWidth]);

  return (
    <div className="flex flex-col items-center">
      <div
        ref={containerRef}
        className="relative w-full select-none touch-pan-y"
        aria-label={title ? `${title} flipbook` : "PDF flipbook"}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {mounted ? (
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
            <div className="mx-auto flex justify-center bg-ink/10 p-1 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)]">
              <button
                type="button"
                onClick={goNext}
                className="block bg-white shadow-md transition-shadow hover:shadow-lg"
                aria-label="Next page"
              >
                <Page
                  pageNumber={pageIndex}
                  width={renderWidth}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                />
              </button>
            </div>
          </Document>
        ) : (
          <div className="flex h-[520px] items-center justify-center text-sm text-muted-foreground">
            Loading book…
          </div>
        )}
      </div>

      <div className="mt-6 flex items-center gap-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">
        <button
          type="button"
          onClick={goPrev}
          disabled={pageIndex <= 1}
          className="inline-flex items-center gap-1 rounded-sm border border-border px-3 py-2 transition hover:text-foreground disabled:opacity-40"
        >
          <ChevronLeft className="h-3.5 w-3.5" /> Prev
        </button>
        <span className="font-medium">
          {numPages === 0 ? "—" : `Page ${pageIndex} of ${numPages}`}
        </span>
        <button
          type="button"
          onClick={goNext}
          disabled={pageIndex >= numPages}
          className="inline-flex items-center gap-1 rounded-sm border border-border px-3 py-2 transition hover:text-foreground disabled:opacity-40"
        >
          Next <ChevronRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
