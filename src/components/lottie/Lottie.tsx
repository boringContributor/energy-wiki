"use client";

import { Lottie as LottiePlayer } from "lottie-react";

import { useMediaQuery } from "@/lib/useMediaQuery";

/**
 * Plays a scene from /public/lottie. The JSON is fetched by the player at
 * runtime, so it never lands in the JS bundle. Readers who prefer reduced
 * motion keep the static fallback instead.
 */
export function Lottie({
  name,
  className,
  loop = true,
  fallback = null,
  ariaLabel,
}: {
  name: string;
  className?: string;
  loop?: boolean;
  fallback?: React.ReactNode;
  ariaLabel?: string;
}) {
  const reduced = useMediaQuery("(prefers-reduced-motion: reduce)");

  if (reduced) return <>{fallback}</>;

  return (
    <LottiePlayer
      src={`/lottie/${name}.json`}
      className={className}
      role="img"
      aria-label={ariaLabel}
      loop={loop}
      autoplay
    />
  );
}
