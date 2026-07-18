"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import MobileMenu from "./MobileMenu";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Technology", href: "#technology" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Docs", href: "#" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-4 z-30 px-4">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-black/60 px-5 backdrop-blur-xl shadow-lg shadow-black/20">

          {/* Logo */}
          <Link
            href="/"
            className="text-lg font-bold tracking-tight"
          >
            Defintex
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-gray-300 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <Button>Launch App</Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:bg-white/10 md:hidden"
            aria-label="Open Menu"
          >
            <div className="space-y-1">
              <span className="block h-0.5 w-5 rounded bg-white"></span>
              <span className="block h-0.5 w-5 rounded bg-white"></span>
              <span className="block h-0.5 w-5 rounded bg-white"></span>
            </div>
          </button>

        </div>
      </header>

      <MobileMenu
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
