"use client";

import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

type ProjectVideoProps = {
  label: string;
  poster: string;
  src: string;
};

export function ProjectVideo({ label, poster, src }: ProjectVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(videoRef, { margin: "200px 0px" });
  const shouldReduceMotion = usePrefersReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isInView && !shouldReduceMotion) {
      void video.play().catch(() => undefined);
    } else {
      video.pause();
    }
  }, [isInView, shouldReduceMotion]);

  return (
    <video
      ref={videoRef}
      src={isInView ? src : undefined}
      poster={poster}
      preload="none"
      muted
      loop
      playsInline
      controls
      aria-label={label}
      className="h-auto max-h-[480px] rounded-xl shadow-2xl"
    />
  );
}
