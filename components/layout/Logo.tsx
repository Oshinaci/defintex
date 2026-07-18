import Link from "next/link";

interface LogoProps {
  small?: boolean;
}

export default function Logo({ small = false }: LogoProps) {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 select-none"
    >
      <div
        className={`
          relative flex items-center justify-center
          rounded-xl
          bg-gradient-to-br
          from-violet-600
          via-indigo-500
          to-blue-500
          shadow-lg shadow-violet-500/30
          ${small ? "h-9 w-9" : "h-11 w-11"}
        `}
      >
        <div className="h-4 w-4 rotate-45 rounded-[4px] border-2 border-white/90" />
      </div>

      <div className="flex flex-col leading-none">
        <span
          className={`font-bold tracking-tight ${
            small ? "text-lg" : "text-xl"
          }`}
        >
          Defintex
        </span>

        <span className="text-[10px] uppercase tracking-[0.25em] text-gray-400">
          Value Exchange
        </span>
      </div>
    </Link>
  );
}
