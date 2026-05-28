"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { clearSqlProgress, getLocalSqlRouteState } from "@/lib/local-progress";

export function LocalProgressDashboard() {
  const [state, setState] = useState(getLocalSqlRouteState);

  function refresh() {
    setState(getLocalSqlRouteState());
  }

  useEffect(() => {
    refresh();
    window.addEventListener("aula-clara-progress-changed", refresh);
    return () => window.removeEventListener("aula-clara-progress-changed", refresh);
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-5 py-14">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
          Progreso local
        </p>
        <h1 className="mt-3 text-4xl font-bold">Mi progreso</h1>
        <p className="mt-4 leading-8 text-[var(--muted)]">
          Tu avance se guarda en este navegador. No necesitas cuenta para usar esta versión.
        </p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Card>
          <h2 className="text-2xl font-bold">SQL sin miedo</h2>
          <p className="mt-3 leading-7 text-[var(--muted)]">
            {state.completedCount > 0
              ? `Has marcado ${state.completedCount} pasos como entendidos.`
              : "Todavía no has marcado pasos como entendidos. Puedes empezar cuando quieras."}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button href="/learn/sql">Abrir ruta</Button>
            <Button
              type="button"
              variant="secondary"
              onClick={() => {
                clearSqlProgress();
                refresh();
              }}
            >
              Limpiar progreso local
            </Button>
          </div>
        </Card>

        <Card>
          <h2 className="text-2xl font-bold">Siguiente paso</h2>
          <p className="mt-3 leading-7 text-[var(--muted)]">
            {state.nextStep
              ? `Puedes continuar con ${state.nextStep.title} cuando quieras.`
              : "Has completado esta primera ruta. Puedes repasarla cuando quieras."}
          </p>
          <Button href={state.nextStep?.href ?? "/learn/sql/step/review"} className="mt-5">
            {state.nextStep ? "Continuar" : "Repasar ruta"}
          </Button>
        </Card>
      </div>
    </section>
  );
}
