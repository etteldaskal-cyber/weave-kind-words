import { useEffect, useMemo, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import type { PDFDocumentProxy } from "pdfjs-dist";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

type Props = {
  url: string;
  title?: string;
  /** "spread" (default): cover then 2-up spreads. "single": cover then one page at a time. */
  mode?: "spread" | "single";
};

/**
 * Cover (page 1): shown alone in its natural orientation.
 * In "spread" mode, pages 2+ are shown two at a time (portrait pages rotated
 * -90°). In "single" mode, pages 2+ are shown one at a time, rotated to
 * landscape if the source is portrait.
 */
export function PdfFlipbook({ url, title, mode = "spread" }: Props) {
  const [numPages, setNumPages] = useState(0);
  const [orientation, setOrientation] = useState<"portrait" | "landscape" | null>(null);
  const [aspectRatio, setAspectRatio] = useState<number | null>(null);
  // view 0 = cover; view 1 = pages 2&3; view 2 = pages 4&5; ...
  const [view, setView] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(800);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    setView(0);
    setNumPages(0);
    setOrientation(null);
    setAspectRatio(null);
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
    if (mode === "single") return numPages;
    // view 0 = cover (page 1); remaining pages grouped in pairs
    return 1 + Math.ceil((numPages - 1) / 2);
  }, [numPages, mode]);

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
    () => Math.min(Math.floor(containerWidth * 0.75), 720),
    [containerWidth],
  );

  const halfContainer = Math.max(200, Math.floor((containerWidth - 16) / 2));

  // For a portrait page rotated -90°:
  //   preWidth = halfContainer * (origWidth / origHeight) so visible width = halfContainer
  //   visible height = preWidth = halfContainer * aspectRatio
  // For a landscape page (no rotation):
  //   preWidth = halfContainer
  //   visible width = halfContainer
  //   visible height = halfContainer * aspectRatio
  const pagePreWidth = useMemo(() => {
    if (!orientation || !aspectRatio) return halfContainer;
    if (orientation === "landscape") return halfContainer;
    return Math.max(140, Math.floor(halfContainer * aspectRatio));
  }, [orientation, aspectRatio, halfContainer]);

  const pageBoxWidth = useMemo(() => {
    if (!orientation || !aspectRatio) return halfContainer;
    if (orientation === "landscape") return halfContainer;
    return Math.floor(halfContainer / aspectRatio);
  }, [orientation, aspectRatio, halfContainer]);

  const pageBoxHeight = useMemo(() => {
    if (!orientation || !aspectRatio) return halfContainer;
    return Math.floor(halfContainer * aspectRatio);
  }, [orientation, aspectRatio, halfContainer]);

  // Spread mode: view 1 → pages 2 & 3; view 2 → pages 4 & 5; ...
  // Single mode: view N → page N+1.
  const leftPage =
    mode === "single" ? view + 1 : view === 0 ? 1 : view * 2;
  const rightPage =
    mode === "single" ? null : view === 0 ? null : view * 2 + 1;

  // Sizing for "single" mode: fill container width, rotate portrait to landscape.
  const singlePreWidth = useMemo(() => {
    if (!orientation || !aspectRatio) return containerWidth;
    if (orientation === "landscape") return containerWidth;
    // rotated portrait: visible width = pre*aspect, so pre = W/aspect
    return Math.max(140, Math.floor(containerWidth / aspectRatio));
  }, [orientation, aspectRatio, containerWidth]);

  const singleBoxWidth = containerWidth;
  const singleBoxHeight = useMemo(() => {
    if (!orientation || !aspectRatio) return containerWidth;
    if (orientation === "landscape")
      return Math.floor(containerWidth * aspectRatio);
    return Math.floor(containerWidth / aspectRatio);
  }, [orientation, aspectRatio, containerWidth]);

  const renderPage = (pageNumber: number) => (
    <div
      className="relative block bg-white shadow-md overflow-hidden"
      style={{ width: pageBoxWidth, height: pageBoxHeight }}
    >
      {orientation === "portrait" ? (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%) rotate(-90deg)",
            transformOrigin: "center center",
          }}
        >
          <Page
            pageNumber={pageNumber}
            width={pagePreWidth}
            renderAnnotationLayer={false}
            renderTextLayer={false}
          />
        </div>
      ) : (
        <Page
          pageNumber={pageNumber}
          width={pagePreWidth}
          renderAnnotationLayer={false}
          renderTextLayer={false}
        />
      )}
    </div>
  );

  const renderSinglePage = (pageNumber: number) => (
    <div
      className="relative mx-auto block bg-white shadow-md overflow-hidden"
      style={{ width: singleBoxWidth, height: singleBoxHeight }}
    >
      {orientation === "portrait" ? (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%) rotate(-90deg)",
            transformOrigin: "center center",
          }}
        >
          <Page
            pageNumber={pageNumber}
            width={singlePreWidth}
            renderAnnotationLayer={false}
            renderTextLayer={false}
          />
        </div>
      ) : (
        <Page
          pageNumber={pageNumber}
          width={singlePreWidth}
          renderAnnotationLayer={false}
          renderTextLayer={false}
        />
      )}
    </div>
  );


  const handleDocumentLoad = async (pdf: PDFDocumentProxy) => {
    setNumPages(pdf.numPages);
    try {
      const page = await pdf.getPage(1);
      const viewport = page.getViewport({ scale: 1 });
      const isLandscape = viewport.width > viewport.height;
      setOrientation(isLandscape ? "landscape" : "portrait");
      setAspectRatio(viewport.height / viewport.width);
    } catch {
      // Leave defaults if page inspection fails.
    }
  };

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
            onLoadSuccess={handleDocumentLoad}
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
            {orientation === null ? (
              <div className="flex h-[520px] items-center justify-center text-sm text-muted-foreground">
                Loading book…
              </div>
            ) : view === 0 ? (
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
            ) : mode === "single" ? (
              <button
                type="button"
                onClick={goNext}
                aria-label="Next page"
                className="mx-auto block bg-ink/10 p-1 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)]"
              >
                {renderSinglePage(leftPage)}
              </button>
            ) : (
              <button
                type="button"
                onClick={goNext}
                aria-label="Next spread"
                className="mx-auto flex justify-center gap-2 bg-ink/10 p-1 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)]"
              >
                {renderPage(leftPage)}
                {rightPage && rightPage <= numPages ? (
                  renderPage(rightPage)
                ) : (
                  <div style={{ width: pageBoxWidth, height: pageBoxHeight }} />
                )}
              </button>
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
              : rightPage && rightPage <= numPages
                ? `Pages ${leftPage}–${rightPage} of ${numPages}`
                : `Page ${leftPage} of ${numPages}`}
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
