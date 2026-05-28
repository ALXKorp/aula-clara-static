import { AdSlot } from "@/components/ads/AdSlot";
import { LearningModeCard } from "@/components/learning/LearningModeCard";
import { LearningPathPreview } from "@/components/learning/LearningPathPreview";
import { TopicHero } from "@/components/topics/TopicHero";
import { ResourcePreviewCard } from "@/components/resources/ResourcePreviewCard";
import { Card } from "@/components/ui/Card";
import { getCatalogContextForTopic } from "@/lib/catalog";
import { getSqlTopic } from "@/lib/topics";

const steps = [
  {
    title: "Qué es una base de datos",
    description: "Entiende para qué sirve guardar información de forma ordenada.",
    status: "Recomendado" as const
  },
  {
    title: "Qué es una tabla",
    description: "Mira cómo se organizan los datos en filas, columnas y valores.",
    status: "Disponible" as const
  },
  {
    title: "Qué es una consulta",
    description: "Aprende a pedirle información concreta a una base de datos.",
    status: "Disponible" as const
  },
  {
    title: "SELECT",
    description: "Elige qué columnas quieres ver y empieza a leer datos con calma.",
    status: "Disponible" as const
  },
  {
    title: "WHERE",
    description: "Filtra resultados para encontrar justo lo que necesitas.",
    status: "Disponible" as const
  },
  {
    title: "ORDER BY",
    description: "Ordena información para leerla mejor y comparar resultados.",
    status: "Disponible" as const
  },
  {
    title: "GROUP BY",
    description: "Agrupa datos para resumirlos y responder preguntas más amplias.",
    status: "Disponible" as const
  },
  {
    title: "JOIN",
    description: "Relaciona tablas sin perderte en nombres técnicos.",
    status: "Disponible" as const
  },
  {
    title: "INSERT, UPDATE y DELETE",
    description: "Prepara el camino para crear, cambiar y borrar datos con cuidado.",
    status: "Disponible" as const
  },
  {
    title: "Ejercicios de repaso",
    description: "Practica con ejercicios pequeños para afianzar lo aprendido.",
    status: "Disponible" as const
  },
  {
    title: "Simulacro de examen",
    description: "Repasa lo esencial con una práctica guiada y sin presión.",
    status: "Disponible" as const
  }
];

const modes = [
  {
    title: "Leer explicacion",
    description: "Texto claro, ejemplos pequenos y conceptos explicados desde cero."
  },
  {
    title: "Ver video",
    description: "Un recurso audiovisual recomendado cuando este revisado."
  },
  {
    title: "Practicar",
    description: "Ejercicios cortos para probar una idea antes de pasar a la siguiente."
  },
  {
    title: "Preguntar a la IA",
    description: "Espacio preparado para una tutora paciente cuando se implemente la IA real."
  },
  {
    title: "Repasar antes del examen",
    description: "Resumen, errores comunes y practica centrada en lo mas importante."
  }
];

const resources = [
  {
    type: "Video recomendado",
    title: "Recurso pendiente de anadir",
    description: "Aqui ira un video revisado para empezar con bases de datos y consultas SQL."
  },
  {
    type: "Articulo o documentacion",
    title: "Recurso pendiente de anadir",
    description: "Un enlace claro y fiable para consultar sintaxis basica sin ruido."
  },
  {
    type: "Ejercicio practico",
    title: "Recurso pendiente de anadir",
    description: "Practica guiada para escribir SELECT, WHERE y ORDER BY paso a paso."
  },
  {
    type: "Recurso visual",
    title: "Recurso pendiente de anadir",
    description: "Una explicacion visual de tablas, filas, columnas y relaciones."
  }
];

export default async function SqlTopicPage() {
  const topic = await getSqlTopic();
  const catalogContext = getCatalogContextForTopic("sql");
  const breadcrumb =
    catalogContext.area && catalogContext.category
      ? `${catalogContext.area.title} / ${catalogContext.category.title}`
      : undefined;
  const catalogTopic = catalogContext.topic;

  return (
    <>
      <TopicHero
        title={topic.title}
        subtitle={topic.subtitle}
        level={topic.level}
        estimatedTime={topic.estimatedTime}
        category={catalogContext.category?.title ?? topic.category}
        status={catalogTopic?.status ?? "Disponible"}
        breadcrumb={breadcrumb}
        startHref="/learn/sql"
      />

      <section className="bg-[#fbfaf6]">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <Card className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
              Descripcion
            </p>
            <h2 className="mt-3 text-3xl font-bold">Para que sirve SQL</h2>
            <p className="mt-5 leading-8 text-[var(--muted)]">{topic.description}</p>
            <p className="mt-4 leading-8 text-[var(--muted)]">
              No necesitas saberlo todo antes de empezar. Puedes leer, practicar, repetir y
              volver atras siempre que lo necesites.
            </p>
          </Card>
        </div>
      </section>

      <LearningPathPreview steps={steps} />

      <section id="learning-modes" className="bg-[#fbfaf6]">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
              Elige como aprender
            </p>
            <h2 className="mt-3 text-3xl font-bold">Varios caminos para el mismo tema</h2>
            <p className="mt-4 leading-8 text-[var(--muted)]">
              Si una explicacion no encaja contigo, no significa que no puedas aprenderlo. Solo
              probamos otra entrada.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {modes.map((mode) => (
              <LearningModeCard key={mode.title} title={mode.title} description={mode.description} />
            ))}
          </div>
        </div>
      </section>

      <section id="resources" className="mx-auto max-w-6xl px-5 py-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
            Recursos recomendados
          </p>
          <h2 className="mt-3 text-3xl font-bold">Apoyos externos revisados</h2>
          <p className="mt-4 leading-8 text-[var(--muted)]">
            Los enlaces reales se anadiran cuando esten revisados. La plataforma enlazara
            recursos externos, sin copiar contenido protegido.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource) => (
            <ResourcePreviewCard
              key={resource.type}
              type={resource.type}
              title={resource.title}
              description={resource.description}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-14">
        <AdSlot />
      </section>
    </>
  );
}
