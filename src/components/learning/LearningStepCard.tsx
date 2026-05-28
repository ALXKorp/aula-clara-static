import Link from "next/link";

type StepStatus = "Completado" | "Disponible" | "Recomendado" | "Proximamente";

type LearningStepCardProps = {
  number: number;
  title: string;
  description: string;
  status: StepStatus;
  href?: string;
};

const statusStyles: Record<StepStatus, string> = {
  Completado: "bg-[#dbece6] text-[#214d43]",
  Disponible: "bg-[#edf5f1] text-[#38564f]",
  Recomendado: "bg-[#dbece6] text-[var(--primary-dark)]",
  Proximamente: "bg-[#f3efe6] text-[#716657]"
};

export function LearningStepCard({
  number,
  title,
  description,
  status,
  href
}: LearningStepCardProps) {
  const content = (
    <>
      <div className="flex items-start justify-between gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#e6f0ed] text-sm font-bold text-[var(--primary-dark)]">
          {number}
        </span>
        <span className={`rounded-md px-3 py-1 text-xs font-semibold ${statusStyles[status]}`}>
          {status}
        </span>
      </div>
      <h3 className="mt-4 text-lg font-bold">{title}</h3>
      <p className="mt-3 leading-7 text-[var(--muted)]">{description}</p>
    </>
  );

  const classes =
    "block rounded-lg border border-[var(--line)] bg-[var(--panel)] p-5 shadow-sm transition";

  if (href) {
    return (
      <Link href={href} className={`${classes} hover:border-[var(--primary)] hover:bg-[#fffdf8]`}>
        {content}
      </Link>
    );
  }

  return (
    <article className={classes}>
      {content}
    </article>
  );
}
