import { CategorySection } from "@/components/catalog/CategorySection";
import type { CatalogArea, CatalogCategory, CatalogTopic } from "@/lib/catalog";

type AreaSectionProps = {
  area: CatalogArea;
  categories: Array<{
    category: CatalogCategory;
    topics: CatalogTopic[];
  }>;
};

export function AreaSection({ area, categories }: AreaSectionProps) {
  return (
    <section className="rounded-lg bg-[#fbfaf6] px-5 py-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
          Área
        </p>
        <h2 className="mt-3 text-3xl font-bold">{area.title}</h2>
        <p className="mt-4 leading-8 text-[var(--muted)]">{area.description}</p>
      </div>

      <div className="mt-8 grid gap-6">
        {categories.map((item) => (
          <CategorySection
            key={item.category.slug}
            category={item.category}
            topics={item.topics}
          />
        ))}
      </div>
    </section>
  );
}
