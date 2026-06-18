export function HeroPanel() {
  return (
    <svg
      viewBox="0 0 480 560"
      className="h-full w-full"
      role="img"
      aria-label="Abstract editorial composition: cobalt and gold geometric forms over warm cream"
    >
      <defs>
        <linearGradient id="cobalt" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="oklch(0.42 0.22 268)" />
          <stop offset="1" stopColor="oklch(0.30 0.18 268)" />
        </linearGradient>
        <pattern id="lines" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="oklch(0.18 0.025 270)" strokeWidth="0.5" />
        </pattern>
      </defs>
      {/* Background paper */}
      <rect width="480" height="560" fill="oklch(0.94 0.014 70)" />
      {/* Outer frame */}
      <rect x="24" y="24" width="432" height="512" fill="none" stroke="oklch(0.18 0.025 270)" strokeWidth="1" />
      {/* Big cobalt rectangle */}
      <rect x="64" y="80" width="280" height="340" fill="url(#cobalt)" />
      {/* Gold circle */}
      <circle cx="368" cy="200" r="64" fill="oklch(0.745 0.142 70)" />
      {/* Hatched square */}
      <rect x="240" y="360" width="160" height="120" fill="url(#lines)" opacity="0.35" />
      {/* Thin gold rule */}
      <line x1="64" y1="460" x2="416" y2="460" stroke="oklch(0.745 0.142 70)" strokeWidth="2" />
      {/* Serif glyph as a focal mark */}
      <text
        x="180"
        y="290"
        fontFamily="Cormorant Garamond, Georgia, serif"
        fontSize="220"
        fill="oklch(0.94 0.014 70)"
        fontStyle="italic"
        textAnchor="middle"
      >
        E
      </text>
      {/* Caption tick */}
      <text
        x="64"
        y="500"
        fontFamily="Inter, sans-serif"
        fontSize="10"
        letterSpacing="3"
        fill="oklch(0.18 0.025 270)"
      >
        FIG. 01 — COPY WITH HEART
      </text>
    </svg>
  );
}
