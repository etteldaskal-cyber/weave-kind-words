import { useEffect, useMemo, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

type Props = {
  url: string;
  title?: string;
};

/**
 * Cover (page 1): portrait, no rotation.
 * Pages 2+: each rotated 90° clockwise; two consecutive rotated pages shown
 * side-by-side as a spread. Nav advances one spread (two pages) at a time,
 * except the cover which is shown alone.
 */
export function PdfFlipbook({ url, title }: Props) {
  const [numPages, setNumPages] = useState(0);
  // view 0 = cover; view 1 = pages 2&3; view 2 = pages 4&5; ...
  const [view, setView] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(800);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    setView(0);
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

  const totalViews = useMemo(() => {
    if (numPages <= 1) return 1;
    return numPages; // cover + one page per subsequent view
  }, [numPages]);


  const goNext = () => setView((v) => Math.min(v + 1, totalViews - 1));
  const goPrev = () => setView((v) => Math.max(v - 1, 0));

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
  }, [totalViews]);

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

  const coverWidth = useMemo(
    () => Math.min(Math.floor(containerWidth * 0.6), 560),
    [containerWidth],
  );
  // Pre-rotation page width chosen so that, after rotating 90°, the rendered
  // landscape page fits the container width. PDF pages are 612x792 portrait,
  // so rotated width = preWidth * (792/612). Solve for preWidth = container * 612/792.
  const rotatedPreWidth = useMemo(
    () => Math.max(160, Math.floor(containerWidth * (612 / 792))),
    [containerWidth],
  );
  const rotatedBoxHeight = rotatedPreWidth; // after rotation, visible height = pre-rotation width
  const rotatedBoxWidth = Math.floor(rotatedPreWidth * (792 / 612));

  const currentPage = view === 0 ? 1 : view + 1; // view 1 → page 2, view 2 → page 3, ...

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
            {view === 0 ? (
              <div className="mx-auto flex justify-center">
                <button
                  type="button"
                  onClick={goNext}
                  className="block bg-white shadow-md transition-shadow hover:shadow-lg"
                  aria-label="Next page"
                  style={{ width: coverWidth }}
                >
                  <Page
                    pageNumber={1}
                    width={coverWidth}
                    renderAnnotationLayer={false}
                    renderTextLayer={false}
                  />
                </button>
              </div>
            ) : (
              <div className="mx-auto flex justify-center bg-ink/10 p-1 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)]">
                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Next page"
                  className="relative block bg-white shadow-md transition-shadow hover:shadow-lg overflow-hidden"
                  style={{ width: rotatedBoxWidth, height: rotatedBoxHeight }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%) rotate(90deg)",
                      transformOrigin: "center center",
                    }}
                  >
                    <Page
                      pageNumber={currentPage}
                      width={rotatedPreWidth}
                      renderAnnotationLayer={false}
                      renderTextLayer={false}
                    />
                  </div>
                </button>
              </div>
            )}
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
          disabled={view === 0}
          className="inline-flex items-center gap-1 rounded-sm border border-border px-3 py-2 transition hover:text-foreground disabled:opacity-40"
        >
          <ChevronLeft className="h-3.5 w-3.5" /> Prev
        </button>
        <span className="font-medium">
          {numPages === 0
            ? "—"
            : view === 0
              ? `Cover · ${numPages} pages`
              : `Page ${currentPage} of ${numPages}`}
        </span>

        <button
          type="button"
          onClick={goNext}
          disabled={view >= totalViews - 1}
          className="inline-flex items-center gap-1 rounded-sm border border-border px-3 py-2 transition hover:text-foreground disabled:opacity-40"
        >
          Next <ChevronRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
