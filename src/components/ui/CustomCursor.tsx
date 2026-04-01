"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);
  const [label, setLabel] = useState<string | null>(null);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const cursorEl = target.closest("[data-cursor]") as HTMLElement | null;
      if (cursorEl) {
        setIsHovering(true);
        setLabel(cursorEl.dataset.cursor ?? null);
      } else if (target.closest("a, button")) {
        setIsHovering(true);
        setLabel(null);
      } else {
        setIsHovering(false);
        setLabel(null);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            width: isHovering ? (label ? 80 : 40) : 8,
            height: isHovering ? (label ? 80 : 40) : 8,
            backgroundColor: isHovering ? "rgba(196,131,32,0.9)" : "rgba(237,240,242,1)",
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="rounded-full flex items-center justify-center"
        >
          {label && (
            <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-bg-primary">
              {label}
            </span>
          )}
        </motion.div>
      </motion.div>
    </>
  );
}
