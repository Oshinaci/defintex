import Link from "next/link";
import Button from "@/components/ui/Button";

const navItems = [
  {
    label: "Features",
    href: "#features",
  },
  {
    label: "Technology",
    href: "#technology",
  },
  {
    label: "Roadmap",
    href: "#roadmap",
  },
  {
    label: "Docs",
    href: "#",
  },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight"
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
          <Button>Launch App</Button>
        </div>

        <button
          className="text-2xl md:hidden"
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>
    </header>
  );
}
