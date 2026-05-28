import { notFound } from "next/navigation";
import { AdSlot } from "@/components/ads/AdSlot";
import { Breadcrumb } from "@/components/catalog/Breadcrumb";
import { CategoryCard } from "@/components/catalog/CategoryCard";
import {
  getAreaBySlug,
  getCategoriesByArea,
  getCategoryStatus,
  getTopicCountByCategory
} from "@/lib/catalog";

export default function ProgrammingTopicsPage() {
  const area = getAreaBySlug("programacion");

  if (!area) {
    notFound();
  }

  const categories = getCategoriesByArea(area.slug);

  return (
    <section className="mx-auto max-w-6xl px-5 py-14">
      <Breadcrumb items={[{ label: "Temas", href: "/topics" }, { label: area.title }]} />

      <div className="mt-8 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
          Área
        </p>
        <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">{area.title}</h1>
        <p className="mt-5 leading-8 text-[var(--muted)]">
          Aprende fundamentos, desarrollo web, backend y bases de datos con rutas claras y
          progresivas.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {categories.map((category) => (
          <CategoryCard
            key={category.slug}
            category={category}
            href={`/topics/programacion/${category.slug}`}
            topicCount={getTopicCountByCategory(category.slug)}
            status={getCategoryStatus(category.slug)}
          />
        ))}
      </div>

      <div className="mt-10">
        <AdSlot />
      </div>
    </section>
  );
}
