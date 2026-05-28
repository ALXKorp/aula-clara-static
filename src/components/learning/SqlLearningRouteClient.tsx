"use client";

import { useEffect, useState } from "react";
import { AdSlot } from "@/components/ads/AdSlot";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { CalmProgress } from "@/components/learning/CalmProgress";
import { DemoAccessNotice } from "@/components/learning/DemoAccessNotice";
import { LearningStepCard } from "@/components/learning/LearningStepCard";
import { getLocalSqlRouteState } from "@/lib/local-progress";

function formatStepCount(count: number) {
  return count === 1 ? "1 paso" : `${count} pasos`;
}

export function SqlLearningRouteClient() {
  const [state, setState] = useState(getLocalSqlRouteState);

  function refresh() {
    setState(getLocalSqlRouteState());
  }

  useEffect(() => {
    refresh();
    window.addEventListener("aula-clara-progress-changed", refresh);
    return () => window.removeEventListener("aula-clara-progress-changed", refresh);
  }, []);

  const continueLabel = state.nextStep ? `Continuar con ${state.nextStep.title}` : "Repasar ruta";
  const continueHref = state.nextStep?.href ?? "/learn/sql/step/review";
  const allCompleted = !state.nextStep;

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
            <DemoAccessNotice />
          </div>
        </div>

        <CalmProgress
          message={
            allCompleted
              ? "Has completado esta primera ruta. Puedes repasarla cuando quieras."
              : `Has completado ${formatStepCount(state.completedCount)}. Puedes continuar con ${state.nextStep?.title} cuando quieras.`
          }
          detail="No hay prisa: puedes repetir un paso, saltar a un repaso o simplemente leer primero."
        />
      </div>

      <div className="mt-10">
        <Card>
          <h2 className="text-2xl font-bold">Pasos de la ruta</h2>
          <p className="mt-3 leading-7 text-[var(--muted)]">
            Los pasos entendidos se guardan en este navegador.
          </p>
        </Card>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {state.steps.map((step, index) => (
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
