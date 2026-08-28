/**
 * A meter dial with a needle sweeping into the accent arc — the smallest
 * possible nod to "this is about measuring energy".
 */
export function Wordmark({ size = 26 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <rect
        x="1"
        y="1"
        width="30"
        height="30"
        rx="9"
        fill="var(--accent-soft)"
        stroke="var(--accent)"
        strokeOpacity="0.25"
      />
      <path
        d="M8.5 21a8.5 8.5 0 1 1 15 0"
        stroke="var(--border-strong)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M8.5 21a8.5 8.5 0 0 1 4.4-7.45"
        stroke="var(--accent)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <g className="ew-pulse-soft" style={{ transformOrigin: "16px 21px" }}>
        <path
          d="M16 21 20.6 14.6"
          stroke="var(--accent)"
          strokeWidth="2.1"
          strokeLinecap="round"
        />
      </g>
      <circle cx="16" cy="21" r="1.9" fill="var(--accent)" />
    </svg>
  );
}
