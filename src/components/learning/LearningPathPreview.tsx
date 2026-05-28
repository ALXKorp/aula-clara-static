import { LearningStepCard } from "@/components/learning/LearningStepCard";

type StepStatus = "Disponible" | "Recomendado" | "Proximamente";

type LearningStep = {
  title: string;
  description: string;
  status: StepStatus;
  href?: string;
};

type LearningPathPreviewProps = {
  steps: LearningStep[];
};

export function LearningPathPreview({ steps }: LearningPathPreviewProps) {
  return (
    <section id="learning-path" className="mx-auto max-w-6xl px-5 py-12">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
          Ruta de aprendizaje
        </p>
        <h2 className="mt-3 text-3xl font-bold">Paso a paso, sin prisa</h2>
        <p className="mt-4 leading-8 text-[var(--muted)]">
          Puedes empezar por el primer paso o repasar conceptos anteriores cuando lo necesites.
        </p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, index) => (
          <LearningStepCard
            key={step.title}
            number={index + 1}
            title={step.title}
            description={step.description}
            status={step.status}
            href={step.href}
          />
        ))}
      </div>
    </section>
  );
}
