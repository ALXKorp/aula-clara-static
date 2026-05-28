import { AuthForm } from "@/components/auth/AuthForm";
import { Card } from "@/components/ui/Card";

export default function RegisterPage() {
  return (
    <section className="mx-auto max-w-2xl px-5 py-14">
      <Card>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
          Cuenta gratuita
        </p>
        <h1 className="mt-3 text-3xl font-bold">Crear cuenta</h1>
        <p className="mt-4 leading-7 text-[var(--muted)]">
          Crea una cuenta para preparar el guardado de progreso y tu experiencia personal.
        </p>
        <AuthForm mode="register" />
      </Card>
    </section>
  );
}
