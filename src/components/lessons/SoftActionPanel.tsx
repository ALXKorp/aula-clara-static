import type { ReactNode } from "react";

type SoftActionPanelProps = {
  title: string;
  children: ReactNode;
};

export function SoftActionPanel({ title, children }: SoftActionPanelProps) {
  return (
    <section className="rounded-lg border border-[#cbd9d2] bg-[#f2f7f4] p-6">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="mt-5 flex flex-wrap gap-3">{children}</div>
    </section>
  );
}
