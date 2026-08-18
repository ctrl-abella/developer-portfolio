"use client";

import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import Sidebar from "./Sidebar";


export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false);


    return (
    <>
      <header className="w-full border-b border-border bg-background">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          
          {/* Logo / Name */}
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight"
          >
            Franz Abella
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
           

            <Link href="#skills" className="hover:text-muted">
              Skills
            </Link>

            <Link href="#projects" className="hover:text-muted">
              Projects
            </Link>

            <Link href="#experience" className="hover:text-muted">
              Experience
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open navigation menu"
            className="rounded-md p-2 hover:bg-surface md:hidden"
          >
            <FiMenu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <Sidebar
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}