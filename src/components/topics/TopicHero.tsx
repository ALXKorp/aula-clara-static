import { Button } from "@/components/ui/Button";

type TopicHeroProps = {
  title: string;
  subtitle: string;
  level: string;
  estimatedTime: string;
  category: string;
  status?: string;
  breadcrumb?: string;
  startHref?: string;
};

export function TopicHero({
  title,
  subtitle,
  level,
  estimatedTime,
  category,
  status,
  breadcrumb,
  startHref = "#learning-path"
}: TopicHeroProps) {
  const details = [
    { label: "Nivel", value: level },
    { label: "Tiempo estimado", value: estimatedTime },
    { label: "Categoría", value: category },
    ...(status ? [{ label: "Estado", value: status }] : [])
  ];

  return (
    <section className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-[1.15fr_0.85fr] md:items-center">
      <div>
        {breadcrumb ? (
          <p className="text-sm font-semibold text-[var(--primary-dark)]">{breadcrumb}</p>
        ) : null}
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
          Tema inicial
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">{subtitle}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={startHref}>Empezar ruta</Button>
          <Button href="#learning-modes" variant="secondary">
            No lo entiendo
          </Button>
          <Button href="#exam-review" variant="ghost">
            Tengo examen pronto
          </Button>
        </div>
      </div>

      <div className="rounded-lg border border-[var(--line)] bg-[var(--panel)] p-6 shadow-sm">
        <p className="text-sm font-semibold text-[var(--primary-dark)]">Información del tema</p>
        <div className="mt-5 grid gap-3">
          {details.map((detail) => (
            <div
              key={detail.label}
              className="flex items-center justify-between gap-4 rounded-md bg-[#f2f7f4] px-4 py-3"
            >
              <span className="text-sm text-[var(--muted)]">{detail.label}</span>
              <span className="text-sm font-semibold">{detail.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
