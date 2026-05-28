import { redirect } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getCurrentUser } from "@/lib/auth";
import { getCompletedStepSlugs } from "@/lib/progress";

export default async function DashboardPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  const completedSteps = await getCompletedStepSlugs(user.id);
  const completedCount = completedSteps.length;

  return (
    <section className="mx-auto max-w-6xl px-5 py-14">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
          Tu espacio
        </p>
        <h1 className="mt-3 text-4xl font-bold">Hola, {user.name}</h1>
        <p className="mt-4 leading-8 text-[var(--muted)]">
          Este panel irá creciendo con tu progreso, rutas y preferencias de aprendizaje.
        </p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Card>
          <h2 className="text-2xl font-bold">Cuenta</h2>
          <dl className="mt-5 grid gap-3 text-sm">
            <div className="rounded-md bg-[#f2f7f4] px-4 py-3">
              <dt className="font-semibold">Email</dt>
              <dd className="mt-1 text-[var(--muted)]">{user.email}</dd>
            </div>
            <div className="rounded-md bg-[#f2f7f4] px-4 py-3">
              <dt className="font-semibold">Plan actual</dt>
              <dd className="mt-1 text-[var(--muted)]">{user.plan}</dd>
            </div>
          </dl>
        </Card>

        <Card>
          <h2 className="text-2xl font-bold">Tus rutas</h2>
          <div className="mt-5 rounded-lg border border-[var(--line)] bg-[#fffdf8] p-5">
            <p className="text-lg font-bold">SQL sin miedo</p>
            <p className="mt-2 leading-7 text-[var(--muted)]">
              {completedCount > 0
                ? `Has completado ${completedCount} pasos de la ruta SQL sin miedo.`
                : "Todavía no has marcado pasos como entendidos. Puedes empezar cuando quieras."}
            </p>
            <Button href="/learn/sql" className="mt-5">
              Abrir ruta
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
