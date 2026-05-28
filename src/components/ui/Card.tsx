import type { HTMLAttributes, ReactNode } from "react";

type CardProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "", ...props }: CardProps) {
  return (
    <section
      className={[
        "rounded-lg border border-[var(--line)] bg-[var(--panel)] p-6 shadow-sm",
        className
      ].join(" ")}
      {...props}
    >
      {children}
    </section>
  );
}
