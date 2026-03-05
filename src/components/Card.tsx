"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";

export interface CardProps {
  children: ReactNode;
  variant?: "default" | "elevated" | "glass" | "outline";
  hover?: boolean;
  className?: string;
  onClick?: () => void;
}

const variantStyles: Record<string, string> = {
  default:
    "bg-[var(--color-bg-card)] border border-[var(--color-border)]",
  elevated:
    "bg-[var(--color-bg-card)] border border-[var(--color-border)] shadow-lg",
  glass:
    "bg-[var(--color-bg-card)]/80 backdrop-blur-xl border border-[var(--color-border)]/50",
  outline:
    "bg-transparent border-2 border-[var(--color-border)]",
};

export function Card({
  children,
  variant = "default",
  hover = false,
  className = "",
  onClick,
}: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`rounded-2xl p-6 transition-all ${variantStyles[variant]} ${
        hover ? "cursor-pointer" : ""
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
