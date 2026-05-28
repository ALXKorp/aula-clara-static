type LearningModeCardProps = {
  title: string;
  description: string;
};

export function LearningModeCard({ title, description }: LearningModeCardProps) {
  return (
    <article className="rounded-lg border border-[var(--line)] bg-[var(--panel)] p-5 shadow-sm">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mt-3 leading-7 text-[var(--muted)]">{description}</p>
    </article>
  );
}
