"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

const GLOW_RADIUS = 250;

export function CursorGlow() {
  const x = useMotionValue(-GLOW_RADIUS * 2);
  const y = useMotionValue(-GLOW_RADIUS * 2);
  const opacity = useMotionValue(0);
  const smoothX = useSpring(x, { damping: 30, stiffness: 200, mass: 0.5 });
  const smoothY = useSpring(y, { damping: 30, stiffness: 200, mass: 0.5 });
  const shouldReduceMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      opacity.set(0);
      return;
    }

    const handleMouseMove = (event: MouseEvent) => {
      x.set(event.clientX - GLOW_RADIUS);
      y.set(event.clientY - GLOW_RADIUS);
      opacity.set(1);
    };
    const handleMouseLeave = () => opacity.set(0);
    const handleMouseEnter = () => opacity.set(1);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [opacity, shouldReduceMotion, x, y]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 hidden lg:block"
      style={{ opacity }}
    >
      <motion.div
        className="pointer-events-none absolute h-[500px] w-[500px] rounded-full"
        style={{
          x: smoothX,
          y: smoothY,
          background:
            "radial-gradient(circle, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 30%, transparent 70%)",
        }}
      />
    </motion.div>
  );
}
