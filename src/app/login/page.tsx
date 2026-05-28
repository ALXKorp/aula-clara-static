import { AuthForm } from "@/components/auth/AuthForm";
import { Card } from "@/components/ui/Card";

export default function LoginPage() {
  return (
    <section className="mx-auto max-w-2xl px-5 py-14">
      <Card>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
          Acceso
        </p>
        <h1 className="mt-3 text-3xl font-bold">Iniciar sesión</h1>
        <p className="mt-4 leading-7 text-[var(--muted)]">
          Entra para acceder a tu espacio personal. El progreso completo llegará poco a poco.
        </p>
        <AuthForm mode="login" />
      </Card>
    </section>
  );
}
