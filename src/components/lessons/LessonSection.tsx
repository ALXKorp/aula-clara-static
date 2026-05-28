import type { ReactNode } from "react";

type LessonSectionProps = {
  title: string;
  children: ReactNode;
  id?: string;
};

export function LessonSection({ title, children, id }: LessonSectionProps) {
  return (
    <section id={id} className="rounded-lg border border-[var(--line)] bg-[var(--panel)] p-6 shadow-sm">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="mt-4 space-y-4 leading-8 text-[var(--muted)]">{children}</div>
    </section>
  );
}
