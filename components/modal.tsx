"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function Modal({
  open,
  title,
  children,
  onClose,
}: {
  open: boolean;
  title?: string;
  children: React.ReactNode;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            style={{
              position: "fixed",
              inset: 0,
              background: "black",
              zIndex: 9998,
            }}
          />

          {/* Centering wrapper (never drifts) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "18px",
            }}
          >
            {/* Modal box */}
            <motion.div
              role="dialog"
              aria-modal="true"
              initial={{ y: 14, scale: 0.98 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 10, scale: 0.98 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              style={{
                width: "min(980px, 92vw)",
                maxHeight: "86vh",
                overflow: "hidden",
                borderRadius: 18,
                border: "1px solid var(--line)",
                background:
                  "linear-gradient(180deg, color-mix(in srgb, var(--panel) 92%, transparent), color-mix(in srgb, var(--panel2) 92%, transparent))",
                boxShadow: "0 30px 120px rgba(0,0,0,.55)",
              }}
            >
              {/* Header */}
              <div
                style={{
                  padding: 14,
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 10,
                  alignItems: "center",
                  borderBottom: "1px solid var(--line)",
                }}
              >
                <div style={{ fontWeight: 800, letterSpacing: -0.2 }}>{title}</div>
                <button className="btn" onClick={onClose} aria-label="Close modal">
                  <X size={18} />
                </button>
              </div>

              {/* Content (scrolls) */}
              <div
                style={{
                  padding: "14px",
                  overflowY: "auto",
                  maxHeight: "calc(86vh - 58px)",
                }}
              >
                {children}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}