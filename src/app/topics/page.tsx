import { AdSlot } from "@/components/ads/AdSlot";
import { AreaSection } from "@/components/catalog/AreaSection";
import { getCatalogAreas, getCategoriesByArea, getTopicsByCategory } from "@/lib/catalog";

export default function TopicsPage() {
  const areas = getCatalogAreas().map((area) => ({
    area,
    categories: getCategoriesByArea(area.slug).map((category) => ({
      category,
      topics: getTopicsByCategory(category.slug)
    }))
  }));

  return (
    <section className="mx-auto max-w-6xl px-5 py-14">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
          Temas
        </p>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">Explora temas</h1>
        <p className="mt-4 leading-8 text-[var(--muted)]">
          Los contenidos están organizados por áreas, categorías y niveles para que puedas
          encontrar una ruta que encaje contigo.
        </p>
      </div>

      <div className="mt-10 grid gap-8">
        {areas.map((item) => (
          <AreaSection key={item.area.slug} area={item.area} categories={item.categories} />
        ))}
      </div>

      <div className="mt-10">
        <AdSlot />
      </div>
    </section>
  );
}
