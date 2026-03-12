"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

interface FocusRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface TrueFocusProps {
  sentence?: string;
  separator?: string;
  manualMode?: boolean;
  blurAmount?: number;
  borderColor?: string;
  glowColor?: string;
  animationDuration?: number;
  pauseBetweenAnimations?: number;
  fontSize?: string;
  fontWeight?: string;
  className?: string;
}

const CORNER_POSITIONS = [
  { top: true, left: true, borderRight: false, borderBottom: false },
  { top: true, left: false, borderLeft: false, borderBottom: false },
  { top: false, left: true, borderRight: false, borderTop: false },
  { top: false, left: false, borderLeft: false, borderTop: false },
] as const;

function FocusCorner({
  top,
  left,
  borderRight,
  borderBottom,
  borderLeft,
  borderTop,
  color,
}: {
  top: boolean;
  left: boolean;
  borderRight?: boolean;
  borderBottom?: boolean;
  borderLeft?: boolean;
  borderTop?: boolean;
  color: string;
}) {
  const posClass = [
    top ? "top-[-10px]" : "bottom-[-10px]",
    left ? "left-[-10px]" : "right-[-10px]",
    borderRight === false ? "border-r-0" : "",
    borderBottom === false ? "border-b-0" : "",
    borderLeft === false ? "border-l-0" : "",
    borderTop === false ? "border-t-0" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span
      className={`absolute w-4 h-4 border-[3px] rounded-[3px] ${posClass}`}
      style={{
        borderColor: color,
        filter: `drop-shadow(0 0 4px ${color})`,
      }}
    />
  );
}

export default function TrueFocus({
  sentence = "True Focus",
  separator = " ",
  manualMode = false,
  blurAmount = 5,
  borderColor = "green",
  glowColor = "rgba(0, 255, 0, 0.6)",
  animationDuration = 0.5,
  pauseBetweenAnimations = 1,
  fontSize = "3rem",
  fontWeight = "900",
  className = "",
}: TrueFocusProps) {
  const words = sentence.split(separator);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastActiveIndex, setLastActiveIndex] = useState<number | null>(null);
  const [focusRect, setFocusRect] = useState<FocusRect>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);

  // Auto-cycle in automatic mode
  useEffect(() => {
    if (manualMode) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, (animationDuration + pauseBetweenAnimations) * 1000);
    return () => clearInterval(interval);
  }, [manualMode, animationDuration, pauseBetweenAnimations, words.length]);

  // Update focus rect on index change
  useEffect(() => {
    const wordEl = wordRefs.current[currentIndex];
    const containerEl = containerRef.current;
    if (!wordEl || !containerEl) return;

    const parentRect = containerEl.getBoundingClientRect();
    const activeRect = wordEl.getBoundingClientRect();

    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height,
    });
  }, [currentIndex, words.length]);

  const handleMouseEnter = (index: number) => {
    if (!manualMode) return;
    setLastActiveIndex(index);
    setCurrentIndex(index);
  };

  const handleMouseLeave = () => {
    if (!manualMode || lastActiveIndex === null) return;
    setCurrentIndex(lastActiveIndex);
  };

  return (
    <div
      ref={containerRef}
      className={`relative flex gap-4 justify-center items-center flex-wrap select-none ${className}`}
    >
      {words.map((word, index) => (
        <span
          key={index}
          ref={(el) => { wordRefs.current[index] = el; }}
          className="relative cursor-pointer"
          style={{
            fontSize,
            fontWeight,
            filter: index === currentIndex ? "blur(0px)" : `blur(${blurAmount}px)`,
            transition: `filter ${animationDuration}s ease`,
          }}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          {word}
        </span>
      ))}

      <motion.div
        className="absolute top-0 left-0 pointer-events-none"
        animate={{
          x: focusRect.x,
          y: focusRect.y,
          width: focusRect.width,
          height: focusRect.height,
          opacity: currentIndex >= 0 ? 1 : 0,
        }}
        transition={{ duration: animationDuration }}
        style={{ "--border-color": borderColor, "--glow-color": glowColor } as React.CSSProperties}
      >
        <FocusCorner top left borderRight={false} borderBottom={false} color={borderColor} />
        <FocusCorner top left={false} borderLeft={false} borderBottom={false} color={borderColor} />
        <FocusCorner top={false} left borderRight={false} borderTop={false} color={borderColor} />
        <FocusCorner top={false} left={false} borderLeft={false} borderTop={false} color={borderColor} />
      </motion.div>
    </div>
  );
}