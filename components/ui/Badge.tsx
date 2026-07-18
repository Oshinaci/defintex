import { ReactNode } from "react";

type BadgeVariant =
  | "primary"
  | "success"
  | "warning"
  | "danger";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
}

export default function Badge({
  children,
  variant = "primary",
}: BadgeProps) {
  const variants = {
    primary:
      "bg-violet-500/15 text-violet-300 border border-violet-500/30",

    success:
      "bg-green-500/15 text-green-300 border border-green-500/30",

    warning:
      "bg-yellow-500/15 text-yellow-300 border border-yellow-500/30",

    danger:
      "bg-red-500/15 text-red-300 border border-red-500/30",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
