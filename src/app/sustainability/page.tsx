import { Card } from "@/components/ui/Card";

const concepts = [
  {
    title: "Servidor",
    text: "Alojar la web para que las páginas y rutas de aprendizaje estén disponibles."
  },
  {
    title: "Base de datos",
    text: "Guardar temas, recursos y, más adelante, progreso de estudiantes."
  },
  {
    title: "IA",
    text: "Preparar una tutora útil y limitada con cuidado para controlar costes."
  },
  {
    title: "Mantenimiento",
    text: "Revisar recursos, corregir errores y mejorar accesibilidad poco a poco."
  },
  {
    title: "Publicidad discreta",
    text: "Ayudar a cubrir costes sin interrumpir el aprendizaje."
  },
  {
    title: "Plan Apoyo",
    text: "Permitir apoyo opcional y eliminar anuncios sin bloquear contenido básico."
  }
];

export default function SustainabilityPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
          Cómo se mantiene Aula Clara
        </p>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">Cómo se mantiene Aula Clara</h1>
        <p className="mt-5 leading-8 text-[var(--muted)]">
          Esta sección será útil cuando el proyecto esté en marcha. Por ahora explica la
          filosofía: mantener Aula Clara gratuita, con publicidad discreta y apoyo opcional.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {concepts.map((concept) => (
          <Card key={concept.title}>
            <h2 className="text-xl font-bold">{concept.title}</h2>
            <p className="mt-3 leading-7 text-[var(--muted)]">{concept.text}</p>
          </Card>
        ))}
      </div>

      <p className="mt-6 max-w-3xl leading-7 text-[var(--muted)]">
        Cuando haya datos reales, esta página podrá explicar mejor los costes e ingresos. Si
        algún día los ingresos superan los costes, se reinvertirán en mejorar contenidos,
        accesibilidad y herramientas de aprendizaje.
      </p>
    </section>
  );
}
