import { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-violet-600 hover:bg-violet-700 text-white border border-violet-600",

    secondary:
      "bg-blue-600 hover:bg-blue-700 text-white border border-blue-600",

    outline:
      "bg-transparent border border-white/20 hover:bg-white/10 text-white",
  };

  return (
    <button
      className={`inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
