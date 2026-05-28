import { AdSlot } from "@/components/ads/AdSlot";
import { CommonMistakes } from "@/components/lessons/CommonMistakes";
import { LessonSection } from "@/components/lessons/LessonSection";
import { PracticeBox } from "@/components/lessons/PracticeBox";
import { SoftActionPanel } from "@/components/lessons/SoftActionPanel";
import { SqlExample } from "@/components/lessons/SqlExample";
import { DemoAccessNotice } from "@/components/learning/DemoAccessNotice";
import { MarkStepButton } from "@/components/learning/MarkStepButton";
import { Button } from "@/components/ui/Button";

const mistakes = [
  "Pensar que consultar siempre modifica datos.",
  "Olvidar decir de qué tabla salen los datos.",
  "Confundir una consulta con el resultado que devuelve.",
  "Pensar que SQL solo sirve para ver datos."
];

export default function QueriesLessonPage() {
  return (
    <article className="mx-auto max-w-4xl px-5 py-14">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
        Lección SQL
      </p>
      <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">
        Qué es una consulta
      </h1>
      <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
        Una consulta es una pregunta o instrucción que le hacemos a la base de datos. SQL es el
        lenguaje que usamos para escribir esas instrucciones.
      </p>
      <div className="mt-6">
        <DemoAccessNotice />
      </div>

      <div className="mt-10 grid gap-6">
        <LessonSection title="Explicación sencilla">
          <p>
            Una consulta sirve para pedir datos, filtrarlos, ordenarlos o modificarlos. La
            consulta no es la tabla: es la orden que enviamos.
          </p>
          <p>
            Al principio basta con entender esta idea: le dices a la base de datos qué quieres y
            de dónde debe sacarlo.
          </p>
        </LessonSection>

        <LessonSection title="Ejemplo sencillo">
          <SqlExample code={"SELECT nombre\nFROM usuarios;"} />
          <p>Estamos pidiendo la columna nombre.</p>
          <p>La tabla consultada es usuarios.</p>
        </LessonSection>

        <LessonSection title="Una analogía tranquila">
          <p>
            Una consulta es como pedirle a alguien: enséñame solo los nombres de esta lista.
          </p>
        </LessonSection>

        <LessonSection title="No lo entiendo todavía">
          <p>
            SQL no adivina. Hay que decirle qué queremos y de dónde debe sacarlo. Por eso verás
            palabras como SELECT y FROM.
          </p>
        </LessonSection>

        <PracticeBox
          exercise="Si quieres ver los títulos de una tabla llamada libros, ¿qué crees que pedirías?"
          answer={"SELECT titulo\nFROM libros;"}
        />

        <CommonMistakes mistakes={mistakes} />

        <SoftActionPanel title="Siguientes acciones">
          <MarkStepButton stepSlug="queries" />
          <Button href="/learn/sql/step/select" variant="secondary">
            Siguiente paso: SELECT
          </Button>
          <Button href="/learn/sql" variant="ghost">
            Volver a la ruta
          </Button>
        </SoftActionPanel>

        <AdSlot />
      </div>
    </article>
  );
}
