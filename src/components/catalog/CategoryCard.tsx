import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { StatusBadge } from "@/components/catalog/StatusBadge";
import type { CatalogCategory, TopicStatus } from "@/lib/catalog";

type CategoryCardProps = {
  category: CatalogCategory;
  href: string;
  topicCount: number;
  status: TopicStatus;
};

export function CategoryCard({ category, href, topicCount, status }: CategoryCardProps) {
  return (
    <Card className="bg-white">
      <div className="flex flex-wrap gap-2">
        <span className="inline-flex rounded-md bg-[#edf5f1] px-3 py-1 text-xs font-semibold text-[#38564f]">
          Categoría
        </span>
        <StatusBadge status={status} />
      </div>
      <h2 className="mt-5 text-2xl font-bold">{category.title}</h2>
      <p className="mt-3 min-h-20 leading-7 text-[var(--muted)]">{category.description}</p>
      <p className="mt-4 text-sm font-semibold text-[var(--primary-dark)]">
        {topicCount === 1 ? "1 tema" : `${topicCount} temas`}
      </p>
      <Button href={href} variant="secondary" className="mt-5 w-full">
        Ver categoría
      </Button>
    </Card>
  );
}
