import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { LevelBadge } from "@/components/catalog/LevelBadge";
import { StatusBadge } from "@/components/catalog/StatusBadge";
import type { CatalogTopic } from "@/lib/catalog";

type TopicCardProps = {
  topic: CatalogTopic;
};

export function TopicCard({ topic }: TopicCardProps) {
  const isAvailable = topic.status === "Disponible" && topic.href;

  return (
    <Card className={!isAvailable ? "bg-[#fbfaf6]" : ""}>
      <div className="flex flex-wrap gap-2">
        <LevelBadge level={topic.level} />
        <StatusBadge status={topic.status} />
      </div>

      <h3 className="mt-4 text-xl font-bold">{topic.title}</h3>
      <p className="mt-2 text-sm font-medium text-[var(--muted)]">
        Tiempo estimado: {topic.estimatedTime}
      </p>
      <p className="mt-4 min-h-24 leading-7 text-[var(--muted)]">{topic.description}</p>

      {isAvailable ? (
        <Button href={topic.href} variant="secondary" className="mt-5 w-full">
          Abrir tema
        </Button>
      ) : (
        <div className="mt-5 rounded-md border border-dashed border-[#d9d0bd] bg-[#fffaf0] px-4 py-3 text-sm font-semibold text-[#716657]">
          Contenido en preparación
        </div>
      )}
    </Card>
  );
}
