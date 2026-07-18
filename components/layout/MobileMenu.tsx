"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Technology", href: "#technology" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Docs", href: "#" },
];

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          open
            ? "opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Panel */}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-screen w-[82%] max-w-sm flex-col border-l border-white/10 bg-[#050505] transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 p-6">
          <h2 className="text-xl font-bold">
            Defintex
          </h2>

          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-xl transition hover:bg-white/10"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-2 p-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={onClose}
              className="rounded-xl px-4 py-3 text-lg text-gray-300 transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="border-t border-white/10 p-6">
          <Button className="w-full">
            Launch App
          </Button>

          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-500">
            <Link href="#">GitHub</Link>
            <Link href="#">Docs</Link>
            <Link href="#">X</Link>
          </div>
        </div>
      </aside>
    </>
  );
}
