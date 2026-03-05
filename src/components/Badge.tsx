import { type ReactNode } from "react";

export interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "success" | "warning" | "error" | "info";
  size?: "sm" | "md";
  color?: string;
  className?: string;
}

const variantStyles: Record<string, string> = {
  default: "bg-[var(--color-bg-secondary)] text-[var(--color-text-muted)]",
  success: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
  warning: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
  error: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
  info: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
};

const sizeStyles: Record<string, string> = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-1 text-sm",
};

export function Badge({
  children,
  variant = "default",
  size = "sm",
  color,
  className = "",
}: BadgeProps) {
  const customStyle = color
    ? { backgroundColor: `${color}20`, color }
    : undefined;

  return (
    <span
      className={`inline-flex items-center font-medium rounded-full ${
        color ? "" : variantStyles[variant]
      } ${sizeStyles[size]} ${className}`}
      style={customStyle}
    >
      {children}
    </span>
  );
}
