"use client";

import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Types ─── */
export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
  icon?: ReactNode;
}

export interface NavigationProps {
  brand: ReactNode;
  items: NavItem[];
  actions?: ReactNode;
  className?: string;
  sticky?: boolean;
}

/* ─── Desktop Nav Link ─── */
function NavLink({ item }: { item: NavItem }) {
  return (
    <a
      href={item.href}
      className={`relative px-3 py-2 text-sm font-medium transition-colors ${
        item.active
          ? "text-[var(--color-primary)]"
          : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
      }`}
    >
      <span className="flex items-center gap-2">
        {item.icon}
        {item.label}
      </span>
      {item.active && (
        <motion.div
          layoutId="nav-active"
          className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-[var(--color-primary)]"
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}
    </a>
  );
}

/* ─── Mobile Menu Button ─── */
function MenuButton({ open, onClick }: { open: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="md:hidden p-2 rounded-lg text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-bg-secondary)] transition-colors"
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <motion.path
          animate={open ? { d: "M6 6l12 12" } : { d: "M3 6h18" }}
          transition={{ duration: 0.2 }}
        />
        <motion.path
          animate={open ? { opacity: 0 } : { opacity: 1, d: "M3 12h18" }}
          transition={{ duration: 0.2 }}
        />
        <motion.path
          animate={open ? { d: "M6 18L18 6" } : { d: "M3 18h18" }}
          transition={{ duration: 0.2 }}
        />
      </svg>
    </button>
  );
}

/* ─── Navigation ─── */
export function Navigation({
  brand,
  items,
  actions,
  className = "",
  sticky = true,
}: NavigationProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className={`w-full bg-[var(--color-bg)]/80 backdrop-blur-xl border-b border-[var(--color-border)] z-40 ${
        sticky ? "sticky top-0" : ""
      } ${className}`}
      role="navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="shrink-0">{brand}</div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {items.map((item) => (
              <NavLink key={item.href} item={item} />
            ))}
          </div>

          {/* Actions + mobile toggle */}
          <div className="flex items-center gap-3">
            {actions && <div className="hidden md:flex items-center gap-2">{actions}</div>}
            <MenuButton open={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)} />
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 md:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="md:hidden overflow-hidden border-t border-[var(--color-border)] bg-[var(--color-bg)] relative z-40"
            >
              <div className="px-4 py-3 space-y-1">
                {items.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      item.active
                        ? "bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
                        : "text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-bg-secondary)]"
                    }`}
                  >
                    {item.icon}
                    {item.label}
                  </a>
                ))}
                {actions && (
                  <div className="pt-2 border-t border-[var(--color-border)]">
                    {actions}
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
