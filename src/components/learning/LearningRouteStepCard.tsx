import { Button } from "@/components/ui/Button";

type StepStatus = "Disponible" | "Recomendado" | "Proximamente";

type LearningRouteStepCardProps = {
  number: number;
  title: string;
  description: string;
  status: StepStatus;
  href?: string;
};

const statusStyles: Record<StepStatus, string> = {
  Disponible: "bg-[#edf5f1] text-[#38564f]",
  Recomendado: "bg-[#dbece6] text-[var(--primary-dark)]",
  Proximamente: "bg-[#f3efe6] text-[#716657]"
};

export function LearningRouteStepCard({
  number,
  title,
  description,
  status,
  href
}: LearningRouteStepCardProps) {
  return (
    <article className="rounded-lg border border-[var(--line)] bg-[var(--panel)] p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#e6f0ed] text-sm font-bold text-[var(--primary-dark)]">
          {number}
        </span>
        <span className={`rounded-md px-3 py-1 text-xs font-semibold ${statusStyles[status]}`}>
          {status}
        </span>
      </div>
      <h2 className="mt-4 text-lg font-bold">{title}</h2>
      <p className="mt-3 leading-7 text-[var(--muted)]">{description}</p>
      {href ? (
        <Button href={href} variant="secondary" className="mt-5 w-full">
          Abrir paso
        </Button>
      ) : null}
    </article>
  );
}
