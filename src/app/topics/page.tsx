import { AdSlot } from "@/components/ads/AdSlot";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getPublishedTopics } from "@/lib/topics";

export default async function TopicsPage() {
  const topics = await getPublishedTopics();

  return (
    <section className="mx-auto max-w-6xl px-5 py-14">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
          Temas
        </p>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">Explora temas academicos</h1>
        <p className="mt-4 leading-8 text-[var(--muted)]">
          Empieza por una ruta clara. La prioridad es que sepas cual es el siguiente paso,
          no que tengas que elegir entre cien opciones.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {topics.map((topic) => (
          <Card key={topic.title}>
            <p className="text-sm font-semibold text-[var(--primary)]">{topic.category}</p>
            <h2 className="mt-2 text-xl font-bold">{topic.title}</h2>
            <p className="mt-1 text-sm text-[var(--muted)]">{topic.level}</p>
            <p className="mt-4 min-h-24 leading-7 text-[var(--muted)]">{topic.description}</p>
            <p className="mt-4 rounded-md bg-[#edf5f1] px-3 py-2 text-sm text-[#38564f]">
              {topic.status}
            </p>
            <Button href={topic.href} variant="secondary" className="mt-5 w-full">
              {topic.action}
            </Button>
          </Card>
        ))}
      </div>

      <div className="mt-10">
        <AdSlot />
      </div>
    </section>
  );
}
