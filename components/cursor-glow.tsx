"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [visible]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-50"
      animate={{
        opacity: visible ? 1 : 0,
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="pointer-events-none absolute h-[500px] w-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 30%, transparent 70%)",
        }}
        animate={{
          x: position.x - 250,
          y: position.y - 250,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.5,
        }}
      />
    </motion.div>
  );
}
