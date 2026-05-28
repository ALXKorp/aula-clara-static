type ResourcePreviewCardProps = {
  type: string;
  title: string;
  description: string;
};

export function ResourcePreviewCard({ type, title, description }: ResourcePreviewCardProps) {
  return (
    <article className="rounded-lg border border-[var(--line)] bg-[var(--panel)] p-5 shadow-sm">
      <p className="text-sm font-semibold text-[var(--primary)]">{type}</p>
      <h3 className="mt-2 text-lg font-bold">{title}</h3>
      <p className="mt-3 leading-7 text-[var(--muted)]">{description}</p>
    </article>
  );
}
