import { TopicCard } from "@/components/catalog/TopicCard";
import type { CatalogCategory, CatalogTopic } from "@/lib/catalog";

type CategorySectionProps = {
  category: CatalogCategory;
  topics: CatalogTopic[];
};

export function CategorySection({ category, topics }: CategorySectionProps) {
  return (
    <section className="rounded-lg border border-[var(--line)] bg-white/70 p-5">
      <div className="max-w-3xl">
        <h3 className="text-2xl font-bold">{category.title}</h3>
        <p className="mt-3 leading-7 text-[var(--muted)]">{category.description}</p>
      </div>

      <div className="mt-6 grid gap-5">
        {topics.map((topic) => (
          <TopicCard key={topic.slug} topic={topic} />
        ))}
      </div>
    </section>
  );
}
