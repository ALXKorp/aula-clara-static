import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function LoginPage() {
  return (
    <section className="mx-auto max-w-2xl px-5 py-14">
      <Card>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
          Versión estática
        </p>
        <h1 className="mt-3 text-3xl font-bold">No necesitas iniciar sesión</h1>
        <p className="mt-4 leading-7 text-[var(--muted)]">
          Esta versión de Aula Clara para GitHub Pages funciona sin cuentas ni backend. Puedes
          aprender gratis y guardar tu progreso en este navegador.
        </p>
        <p className="mt-4 leading-7 text-[var(--muted)]">
          Si cambias de navegador o borras los datos del sitio, el progreso local puede perderse.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/learn/sql">Ir a la ruta SQL</Button>
          <Button href="/dashboard" variant="secondary">
            Ver mi progreso
          </Button>
        </div>
      </Card>
    </section>
  );
}
