import { notFound } from "next/navigation";
import { AdSlot } from "@/components/ads/AdSlot";
import { Breadcrumb } from "@/components/catalog/Breadcrumb";
import { TopicCard } from "@/components/catalog/TopicCard";
import {
  getAreaBySlug,
  getCategoriesByArea,
  getCategoryBySlug,
  getTopicsByCategory
} from "@/lib/catalog";

type CategoryTopicsPageProps = {
  params: Promise<{
    category: string;
  }>;
};

export function generateStaticParams() {
  return getCategoriesByArea("programacion").map((category) => ({
    category: category.slug
  }));
}

export default async function CategoryTopicsPage({ params }: CategoryTopicsPageProps) {
  const { category: categorySlug } = await params;
  const area = getAreaBySlug("programacion");
  const category = getCategoryBySlug(categorySlug);

  if (!area || !category || category.areaSlug !== area.slug) {
    notFound();
  }

  const topics = getTopicsByCategory(category.slug);

  return (
    <section className="mx-auto max-w-6xl px-5 py-14">
      <Breadcrumb
        items={[
          { label: "Temas", href: "/topics" },
          { label: area.title, href: "/topics/programacion" },
          { label: category.title }
        ]}
      />

      <div className="mt-8 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
          Categoría
        </p>
        <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">{category.title}</h1>
        <p className="mt-5 leading-8 text-[var(--muted)]">{category.description}</p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic) => (
          <TopicCard key={topic.slug} topic={topic} />
        ))}
      </div>

      <div className="mt-10">
        <AdSlot />
      </div>
    </section>
  );
}
