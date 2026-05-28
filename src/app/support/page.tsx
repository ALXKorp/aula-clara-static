import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const included = [
  "Aula Clara seguirá siendo gratuita.",
  "Donar ayuda a mantener la plataforma disponible.",
  "No desbloquea contenido educativo exclusivo.",
  "El aprendizaje básico no depende de pagar."
];

export default function SupportPage() {
  return (
    <section className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-[1fr_0.8fr]">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
          Apoyar el proyecto
        </p>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
          Aula Clara es gratuita. Puedes apoyar si te resulta útil.
        </h1>
        <p className="mt-5 leading-8 text-[var(--muted)]">
          Aula Clara es gratuita. Si el proyecto te resulta útil, puedes apoyar su
          mantenimiento con una donación voluntaria. No desbloquea contenido exclusivo: solo
          ayuda a que siga disponible.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/topics">Seguir aprendiendo gratis</Button>
          <Button href="/sustainability" variant="secondary">
            Cómo se mantiene
          </Button>
        </div>
      </div>

      <Card>
        <p className="text-sm font-semibold text-[var(--primary)]">Donación voluntaria</p>
        <h2 className="mt-2 text-2xl font-bold">Apoyar sin bloquear</h2>
        <p className="mt-2 text-[var(--muted)]">
          Esta versión no integra donaciones online todavía.
        </p>
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
