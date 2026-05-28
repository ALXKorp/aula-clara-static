import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const included = [
  "Aula Clara seguirá teniendo acceso gratuito.",
  "El Plan Apoyo elimina anuncios.",
  "Ayuda a mantener la plataforma.",
  "No bloquea el aprendizaje básico."
];

export default function SupportPage() {
  return (
    <section className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-[1fr_0.8fr]">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
          Plan Apoyo
        </p>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
          No pagas para aprender. Pagas para apoyar.
        </h1>
        <p className="mt-5 leading-8 text-[var(--muted)]">
          Aula Clara nace como una plataforma gratuita. El Plan Apoyo existirá para eliminar
          anuncios y ayudar a cubrir costes, sin convertir el contenido esencial en un muro de
          pago.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/topics">Seguir aprendiendo gratis</Button>
          <Button href="/sustainability" variant="secondary">
            Ver sostenibilidad
          </Button>
        </div>
      </div>

      <Card>
        <p className="text-sm font-semibold text-[var(--primary)]">Preparado para el futuro</p>
        <h2 className="mt-2 text-2xl font-bold">Plan Apoyo</h2>
        <p className="mt-2 text-[var(--muted)]">Pagos reales no implementados todavia.</p>
        <ul className="mt-6 space-y-3">
          {included.map((item) => (
            <li key={item} className="flex gap-3 text-[var(--muted)]">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Card>
    </section>
  );
}
