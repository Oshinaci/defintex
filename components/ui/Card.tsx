import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-6
        transition-all
        duration-300
        hover:border-violet-500/40
        hover:bg-white/10
        hover:shadow-[0_0_40px_rgba(124,58,237,0.18)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}
