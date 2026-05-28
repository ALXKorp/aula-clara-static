import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function RegisterPage() {
  return (
    <section className="mx-auto max-w-2xl px-5 py-14">
      <Card>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
          Sin cuenta obligatoria
        </p>
        <h1 className="mt-3 text-3xl font-bold">Esta versión no necesita registro</h1>
        <p className="mt-4 leading-7 text-[var(--muted)]">
          Aula Clara está abierta como sitio estático. El progreso se guarda localmente en tu
          navegador mediante localStorage.
        </p>
        <p className="mt-4 leading-7 text-[var(--muted)]">
          La rama fullstack conserva cuentas, sesiones y base de datos. Esta rama está pensada
          para publicarse en GitHub Pages.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/topics">Explorar temas</Button>
          <Button href="/dashboard" variant="secondary">
            Ver mi progreso
          </Button>
        </div>
      </Card>
    </section>
  );
}
