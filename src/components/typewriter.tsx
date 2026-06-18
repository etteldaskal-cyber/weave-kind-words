import { useEffect, useState } from "react";

const PHRASES = ["Values-based.", "Compassionate.", "Mission-driven."];
const FALLBACK = "Values-based.";

export function Typewriter() {
  const [mounted, setMounted] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [i, setI] = useState(0);
  const [text, setText] = useState(FALLBACK);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (!mounted || reduced) return;
    const full = PHRASES[i];
    const atEnd = !deleting && text === full;
    const atStart = deleting && text === "";

    if (atEnd) {
      const t = setTimeout(() => setDeleting(true), 1600);
      return () => clearTimeout(t);
    }
    if (atStart) {
      setDeleting(false);
      setI((i + 1) % PHRASES.length);
      return;
    }

    const t = setTimeout(
      () => {
        setText((cur) => (deleting ? cur.slice(0, -1) : full.slice(0, cur.length + 1)));
      },
      deleting ? 38 : 70,
    );
    return () => clearTimeout(t);
  }, [text, deleting, i, reduced, mounted]);

  // SSR + first client paint render identical static fallback to avoid mismatch.
  if (!mounted || reduced) {
    return <span className="text-primary">{FALLBACK}</span>;
  }

  return (
    <span className="text-primary" aria-live="polite">
      {text}
      <span
        className="ml-0.5 inline-block h-[0.9em] w-[2px] -translate-y-[0.08em] bg-primary align-middle animate-pulse"
        aria-hidden
      />
    </span>
  );
}
