import { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold transition-all duration-300 active:scale-95";

  const variants = {
    primary:
      "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-700/30 hover:scale-105 hover:shadow-violet-500/40",

    secondary:
      "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-700/30 hover:scale-105",

    outline:
      "border border-white/15 bg-white/5 text-white backdrop-blur-md hover:bg-white/10 hover:border-white/25",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}

      {variant === "primary" && (
        <span className="ml-2 text-base transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      )}
    </button>
  );
}
