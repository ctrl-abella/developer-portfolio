"use client";

import Link from "next/link";
import { FiX, FiMail } from "react-icons/fi";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileSidebar({
  isOpen,
  onClose,
}: MobileSidebarProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/50 md:hidden"
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside className="fixed right-0 top-0 z-50 flex h-full w-64 flex-col bg-background p-6 shadow-xl md:hidden">
        {/* Header */}
        <div className="flex items-center justify-between">
          <span className="font-semibold">Menu</span>

          <button
            onClick={onClose}
            aria-label="Close navigation menu"
            className="rounded-md p-2 hover:bg-surface"
          >
            <FiX className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-8 flex flex-col gap-6">
          <Link href="#about" onClick={onClose}>
            About
          </Link>

          <Link href="#skills" onClick={onClose}>
            Skills
          </Link>

          <Link href="#projects" onClick={onClose}>
            Projects
          </Link>

          <Link href="#experience" onClick={onClose}>
            Experience
          </Link>

          <Link href="#contact" onClick={onClose}>
            Contact
          </Link>
        </nav>

        {/* Email */}
        <div className="mt-auto border-t border-border pt-6">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-muted">
            For inquiries
          </p>

          <a
            href="mailto:abellafranzchristian@gmail.com"
            className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <FiMail className="h-5 w-5 shrink-0" />
            <span className="truncate">
              abellafranzchristian@gmail.com
            </span>
          </a>
        </div>
      </aside>
    </>
  );
}