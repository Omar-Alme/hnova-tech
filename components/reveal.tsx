"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  delay?: number;
  as?: "div" | "section" | "article" | "form";
};

export function Reveal({
  children,
  delay = 0,
  className,
  ...rest
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "0px 0px -60px 0px", amount: 0.12 }}
      transition={{ duration: 1.1, ease: [0.2, 0.7, 0.2, 1], delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
