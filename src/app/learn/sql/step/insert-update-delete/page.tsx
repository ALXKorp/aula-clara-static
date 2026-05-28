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
  "Olvidar las columnas en INSERT.",
  "Poner valores en orden incorrecto.",
  "Usar UPDATE sin WHERE.",
  "Usar DELETE sin WHERE.",
  "Confundir modificar datos con consultar datos."
];

export default function InsertUpdateDeleteLessonPage() {
  return (
    <article className="mx-auto max-w-4xl px-5 py-14">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
        Lección SQL
      </p>
      <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">
        INSERT, UPDATE y DELETE: cómo modificar datos
      </h1>
      <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
        Hasta ahora has consultado datos. INSERT, UPDATE y DELETE sirven para cambiar el
        contenido de una base de datos. Se usan con calma y atención.
      </p>
      <div className="mt-6">
        <DemoAccessNotice />
      </div>

      <div className="mt-10 grid gap-6">
        <LessonSection title="Explicación sencilla">
          <p>INSERT sirve para añadir registros.</p>
          <p>UPDATE sirve para modificar registros existentes.</p>
          <p>DELETE sirve para eliminar registros.</p>
          <p>
            WHERE es muy importante en UPDATE y DELETE, porque limita exactamente qué filas se
            modifican o eliminan.
          </p>
        </LessonSection>

        <LessonSection title="Ejemplo INSERT">
          <SqlExample
            code={"INSERT INTO usuarios (nombre, email)\nVALUES ('Lucía', 'lucia@example.com');"}
          />
          <p>INSERT INTO usuarios indica la tabla.</p>
          <p>(nombre, email) indica las columnas.</p>
          <p>VALUES indica los valores que se van a guardar.</p>
        </LessonSection>

        <LessonSection title="Ejemplo UPDATE">
          <SqlExample
            code={
              "UPDATE usuarios\nSET email = 'lucia.nuevo@example.com'\nWHERE nombre = 'Lucía';"
            }
          />
          <p>UPDATE usuarios indica la tabla.</p>
          <p>SET email = ... indica el cambio.</p>
          <p>WHERE nombre = &apos;Lucía&apos; limita qué fila se modifica.</p>
          <p>
            Sin WHERE, podrías modificar muchas filas sin querer. No es para asustarse, solo
            para acostumbrarse a revisar antes de ejecutar.
          </p>
        </LessonSection>

        <LessonSection title="Ejemplo DELETE">
          <SqlExample code={"DELETE FROM usuarios\nWHERE nombre = 'Lucía';"} />
          <p>DELETE FROM usuarios indica de qué tabla se eliminan datos.</p>
          <p>WHERE nombre = &apos;Lucía&apos; limita qué fila se elimina.</p>
          <p>Sin WHERE, podrías borrar demasiados registros.</p>
        </LessonSection>

        <LessonSection title="No lo entiendo todavía">
          <p>INSERT es añadir una nueva fila.</p>
          <p>UPDATE es corregir una fila.</p>
          <p>DELETE es borrar una fila.</p>
          <p>WHERE es seleccionar exactamente qué fila quieres tocar.</p>
        </LessonSection>

        <PracticeBox
          exercise="Escribe una consulta para añadir un producto llamado Teclado mecánico con precio 59.99 en una tabla productos."
          answer={"INSERT INTO productos (nombre, precio)\nVALUES ('Teclado mecánico', 59.99);"}
        />

        <PracticeBox
          exercise="Escribe una consulta para cambiar el precio de ese producto a 49.99."
          answer={"UPDATE productos\nSET precio = 49.99\nWHERE nombre = 'Teclado mecánico';"}
        />

        <CommonMistakes mistakes={mistakes} />

        <SoftActionPanel title="Siguientes acciones">
          <MarkStepButton stepSlug="insert-update-delete" />
          <Button href="/learn/sql/step/review" variant="secondary">
            Siguiente paso: Repaso
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
