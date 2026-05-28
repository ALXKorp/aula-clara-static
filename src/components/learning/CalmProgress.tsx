type CalmProgressProps = {
  message: string;
  detail?: string;
};

export function CalmProgress({ message, detail }: CalmProgressProps) {
  return (
    <section className="rounded-lg border border-[#b7c8bd] bg-[#eef6f1] p-5 text-[#38564f]">
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--primary-dark)]">
        Progreso tranquilo
      </p>
      <p className="mt-3 text-lg font-bold">{message}</p>
      {detail ? <p className="mt-2 leading-7">{detail}</p> : null}
    </section>
  );
}
