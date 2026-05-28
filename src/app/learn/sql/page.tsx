import { AdSlot } from "@/components/ads/AdSlot";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { CalmProgress } from "@/components/learning/CalmProgress";
import { DemoAccessNotice } from "@/components/learning/DemoAccessNotice";
import { LearningStepCard } from "@/components/learning/LearningStepCard";
import { getCurrentUser } from "@/lib/auth";
import { getSqlRouteForUser } from "@/lib/sql-learning";

function formatStepCount(count: number) {
  return count === 1 ? "1 paso" : `${count} pasos`;
}

export default async function SqlLearningPage() {
  const user = await getCurrentUser();
  const { steps, completedCount, nextStep, allContinuableCompleted } = await getSqlRouteForUser(user?.id);
  const continueLabel = nextStep ? `Continuar con ${nextStep.title}` : "Repasar ruta";
  const continueHref = nextStep?.href ?? "/learn/sql/step/review";

  return (
    <section className="mx-auto max-w-6xl px-5 py-14">
      <div className="grid gap-8 md:grid-cols-[1fr_0.8fr] md:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
            Aprendizaje
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">
            Ruta: SQL sin miedo
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            Una ruta tranquila para entender SQL desde sus piezas mas basicas hasta consultas
            utiles.
          </p>
          <p className="mt-4 leading-8 text-[var(--muted)]">
            Puedes avanzar a tu ritmo. Tambien puedes volver atras cuando quieras.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={continueHref}>{continueLabel}</Button>
            <Button href="/learn/sql" variant="secondary">
              Repasar desde el principio
            </Button>
            <Button href="/learn/sql/step/review" variant="ghost">
              Tengo examen pronto
            </Button>
          </div>
          <div className="mt-6">
            <DemoAccessNotice isLoggedIn={Boolean(user)} />
          </div>
        </div>

        <CalmProgress
          message={
            user
              ? allContinuableCompleted
                ? "Has completado esta primera ruta. Puedes repasarla cuando quieras."
                : `Has completado ${formatStepCount(completedCount)}. Puedes continuar con ${nextStep?.title} cuando quieras.`
              : "Estás viendo la ruta como demo. Crea una cuenta gratis para guardar tu avance."
          }
          detail={
            user
              ? "No hay prisa: puedes repetir un paso, saltar a un repaso o simplemente leer primero."
              : "Las lecciones siguen abiertas para que puedas probar la experiencia antes de registrarte."
          }
        />
      </div>

      <div className="mt-10">
        <Card>
          <h2 className="text-2xl font-bold">Pasos de la ruta</h2>
          <p className="mt-3 leading-7 text-[var(--muted)]">
            Los pasos entendidos aparecerán como completados cuando hayas iniciado sesión.
          </p>
        </Card>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, index) => (
          <LearningStepCard
            key={step.slug}
            number={index + 1}
            title={step.title}
            description={step.description}
            status={step.status}
            href={step.href}
          />
        ))}
      </div>

      <div className="mt-10">
        <AdSlot />
      </div>
    </section>
  );
}
