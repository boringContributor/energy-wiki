/** Faint blueprint grid behind the hero. Purely decorative. */
export function GridBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <svg className="size-full opacity-[0.55]">
        <defs>
          <pattern
            id="ew-grid"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M32 0H0v32"
              fill="none"
              stroke="var(--border)"
              strokeWidth="1"
            />
          </pattern>
          <radialGradient id="ew-grid-mask" cx="30%" cy="0%" r="90%">
            <stop offset="0%" stopColor="white" stopOpacity="0.9" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="ew-grid-fade">
            <rect width="100%" height="100%" fill="url(#ew-grid-mask)" />
          </mask>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#ew-grid)"
          mask="url(#ew-grid-fade)"
        />
      </svg>
    </div>
  );
}
