import { SqlExample } from "@/components/lessons/SqlExample";

type PracticeBoxProps = {
  exercise: string;
  answer: string;
};

export function PracticeBox({ exercise, answer }: PracticeBoxProps) {
  return (
    <section className="rounded-lg border border-[#b7c8bd] bg-[#eef6f1] p-6">
      <h2 className="text-2xl font-bold">Prueba tu</h2>
      <p className="mt-4 leading-8 text-[#4d615b]">{exercise}</p>
      <div className="mt-5">
        <p className="mb-3 text-sm font-semibold text-[var(--primary-dark)]">
          Respuesta preparada
        </p>
        <SqlExample code={answer} />
      </div>
    </section>
  );
}
