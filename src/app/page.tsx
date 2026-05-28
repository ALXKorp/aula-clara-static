import { AdSlot } from "@/components/ads/AdSlot";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const values = [
  "Rutas paso a paso sin prisa.",
  "Recursos externos organizados.",
  "Explicaciones claras en español.",
  "Progreso calmado, sin rankings."
];

const features = [
  {
    title: "Explora temas academicos",
    text: "Empieza por SQL sin miedo y crece hacia nuevas materias cuando el proyecto avance."
  },
  {
    title: "Aprende con una ruta",
    text: "Cada tema se organiza en pasos pequenos para que puedas continuar o repasar cuando lo necesites."
  },
  {
    title: "Apoya sin bloquear",
    text: "El Plan Apoyo elimina anuncios, pero el aprendizaje basico sigue siendo gratuito."
  }
];

export default function Home() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.2fr_0.8fr] md:items-center md:py-14">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
            Aula Clara
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-[var(--foreground)] sm:text-5xl">
            Aprende a tu ritmo, con recursos que sí entiendes.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            Una plataforma educativa gratuita para estudiar de forma flexible, clara y
            tranquila. Sin carreras, sin comparaciones y sin castigos por necesitar repasar.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/topics">Explorar temas</Button>
            <Button href="/support" variant="secondary">
              Ver Plan Apoyo
            </Button>
          </div>
        </div>

        <Card className="bg-[#fffaf0]">
          <p className="text-sm font-semibold text-[var(--primary-dark)]">Cómo se siente estudiar aquí</p>
          <ul className="mt-5 space-y-4">
            {values.map((value) => (
              <li key={value} className="flex gap-3 text-[var(--muted)]">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </Card>
      </section>

      <section className="bg-[#fbfaf6]">
        <div className="mx-auto grid max-w-6xl gap-5 px-5 py-12 md:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title}>
              <h2 className="text-xl font-bold">{feature.title}</h2>
              <p className="mt-3 leading-7 text-[var(--muted)]">{feature.text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12">
        <AdSlot />
      </section>
    </>
  );
}
