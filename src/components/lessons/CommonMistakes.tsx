type CommonMistakesProps = {
  mistakes: string[];
};

export function CommonMistakes({ mistakes }: CommonMistakesProps) {
  return (
    <section className="rounded-lg border border-[var(--line)] bg-[var(--panel)] p-6 shadow-sm">
      <h2 className="text-2xl font-bold">Errores comunes</h2>
      <ul className="mt-5 space-y-3 text-[var(--muted)]">
        {mistakes.map((mistake) => (
          <li key={mistake} className="flex gap-3 leading-7">
            <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--accent)]" />
            <span>{mistake}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
