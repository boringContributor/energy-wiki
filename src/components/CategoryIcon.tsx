const PATHS: Record<string, React.ReactNode> = {
  network: (
    <>
      <circle cx="12" cy="4.5" r="2.2" />
      <circle cx="4.8" cy="18" r="2.2" />
      <circle cx="19.2" cy="18" r="2.2" />
      <path d="M10.4 6.4 6.4 15.9M13.6 6.4l4 9.5M7 18h10" />
    </>
  ),
  bolt: <path d="M13.4 2.5 5.5 13.4h5.3l-.9 8.1 8.1-11.2h-5.4l.8-7.8Z" />,
  tag: (
    <>
      <path d="M3.5 11.3V4.2A.7.7 0 0 1 4.2 3.5h7.1c.2 0 .4.1.5.2l8.4 8.4a.7.7 0 0 1 0 1l-7.1 7.1a.7.7 0 0 1-1 0L3.7 11.8a.7.7 0 0 1-.2-.5Z" />
      <circle cx="7.8" cy="7.8" r="1.2" />
    </>
  ),
  gauge: (
    <>
      <path d="M4 17a8 8 0 1 1 16 0" />
      <path d="M12 17l4.2-5.5" />
      <circle cx="12" cy="17" r="1.3" />
    </>
  ),
  receipt: (
    <>
      <path d="M5.5 2.8h13v18.4l-2.2-1.5-2.1 1.5-2.2-1.5-2.2 1.5-2.1-1.5-2.2 1.5V2.8Z" />
      <path d="M9 8h6M9 12h6" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M4.8 20.2a7.2 7.2 0 0 1 14.4 0" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.6v2.2M12 19.2v2.2M2.6 12h2.2M19.2 12h2.2M5.4 5.4l1.6 1.6M17 17l1.6 1.6M18.6 5.4 17 7M7 17l-1.6 1.6" />
    </>
  ),
  scale: (
    <>
      <path d="M12 3.5v17M6.5 20.5h11M4.5 7.5h15" />
      <path d="M4.5 7.5 2 14h5L4.5 7.5Zm15 0L17 14h5l-2.5-6.5Z" />
    </>
  ),
};

export function CategoryIcon({
  name,
  className = "size-5",
}: {
  name: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {PATHS[name] ?? PATHS.network}
    </svg>
  );
}
