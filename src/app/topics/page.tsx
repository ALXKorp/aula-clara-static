import { AdSlot } from "@/components/ads/AdSlot";
import { AreaCard } from "@/components/catalog/AreaCard";
import { getCatalogAreas } from "@/lib/catalog";

export default function TopicsPage() {
  const areas = getCatalogAreas();

  return (
    <section className="mx-auto max-w-6xl px-5 py-14">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
          Temas
        </p>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">Explora temas</h1>
        <p className="mt-4 leading-8 text-[var(--muted)]">
          Elige un área para empezar. Dentro encontrarás categorías, rutas y temas organizados
          por nivel.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {areas.map((area) => (
          <AreaCard key={area.slug} area={area} href={`/topics/${area.slug}`} />
        ))}
      </div>

      <div className="mt-10">
        <AdSlot />
      </div>
    </section>
  );
}
