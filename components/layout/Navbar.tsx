"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

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
      <header className="fixed top-4 left-0 right-0 z-50 px-4">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-black/70 px-5 backdrop-blur-xl">

          <Link
            href="/"
            className="text-xl font-bold tracking-tight"
          >
            Defintex
          </Link>

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

          <div className="hidden md:block">
            <Button>
              Launch App
            </Button>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 md:hidden"
          >
            <div className="space-y-1">
              <span className="block h-0.5 w-5 bg-white"></span>
              <span className="block h-0.5 w-5 bg-white"></span>
              <span className="block h-0.5 w-5 bg-white"></span>
            </div>
          </button>

        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-black transition-all duration-300 ${
          open
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-white/10 px-6">

          <h2 className="text-xl font-bold">
            Defintex
          </h2>

          <button
            onClick={() => setOpen(false)}
            className="text-3xl"
          >
            ×
          </button>

        </div>

        <nav className="mt-8 flex flex-col gap-6 px-6">

          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-lg text-gray-300"
            >
              {item.label}
            </Link>
          ))}

          <div className="pt-6">
            <Button className="w-full">
              Launch App
            </Button>
          </div>

        </nav>
      </div>
    </>
  );
}
