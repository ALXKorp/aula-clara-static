import { AdSlot } from "@/components/ads/AdSlot";
import { DemoAccessNotice } from "@/components/learning/DemoAccessNotice";
import { MarkStepButton } from "@/components/learning/MarkStepButton";
import { Button } from "@/components/ui/Button";
import { CommonMistakes } from "@/components/lessons/CommonMistakes";
import { LessonSection } from "@/components/lessons/LessonSection";
import { PracticeBox } from "@/components/lessons/PracticeBox";
import { SoftActionPanel } from "@/components/lessons/SoftActionPanel";
import { SqlExample } from "@/components/lessons/SqlExample";
import { getCurrentUser } from "@/lib/auth";
import { getStepProgress } from "@/lib/progress";

const mistakes = [
  "Olvidar escribir WHERE.",
  "Usar = mal escrito.",
  "Olvidar comillas en textos.",
  "Confundir columna con valor."
];

export default async function WhereLessonPage() {
  const user = await getCurrentUser();
  const progressStatus = user ? await getStepProgress(user.id, "where") : null;

  return (
    <article className="mx-auto max-w-4xl px-5 py-14">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
        Leccion SQL
      </p>
      <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">
        WHERE: como filtrar datos
      </h1>
      <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
        WHERE sirve para filtrar filas. Lo usamos cuando no queremos ver todos los registros,
        sino solo los que cumplen una condicion concreta.
      </p>
      <div className="mt-6">
        <DemoAccessNotice isLoggedIn={Boolean(user)} />
      </div>

      <div className="mt-10 grid gap-6">
        <LessonSection title="Explicacion sencilla">
          <p>
            WHERE es como decir: muestrame solo los datos que cumplan esto. Primero eliges las
            columnas con SELECT, despues indicas la tabla con FROM y luego filtras con WHERE.
          </p>
          <p>
            La condicion puede revisar una ciudad, un precio, una categoria o cualquier columna
            que tenga sentido para la consulta.
          </p>
        </LessonSection>

        <LessonSection title="Ejemplo principal SQL">
          <SqlExample code={"SELECT nombre, email\nFROM usuarios\nWHERE ciudad = 'Madrid';"} />
          <p>SELECT nombre, email indica las columnas que queremos ver.</p>
          <p>FROM usuarios indica la tabla de la que salen los datos.</p>
          <p>
            WHERE ciudad = &apos;Madrid&apos; filtra solo usuarios cuya ciudad sea Madrid.
          </p>
        </LessonSection>

        <LessonSection title="Segundo ejemplo SQL">
          <SqlExample
            code={"SELECT titulo, autor\nFROM libros\nWHERE autor = 'Miguel de Cervantes';"}
          />
          <p>
            Esta consulta muestra el titulo y el autor de los libros cuyo autor sea Miguel de
            Cervantes.
          </p>
        </LessonSection>

        <LessonSection title="No lo entiendo todavia">
          <p>
            Imagina una hoja de calculo. WHERE es como aplicar un filtro en una columna para ver
            solo las filas que cumplen una condicion.
          </p>
          <p>
            Si filtras la columna ciudad por Madrid, desaparecen de la vista las filas que no
            tienen Madrid en esa columna.
          </p>
        </LessonSection>

        <PracticeBox
          exercise="Escribe una consulta para mostrar nombre y precio de la tabla productos, pero solo los productos cuya categoria sea teclados."
          answer={"SELECT nombre, precio\nFROM productos\nWHERE categoria = 'teclados';"}
        />

        <CommonMistakes mistakes={mistakes} />

        <SoftActionPanel title="Siguientes acciones">
          <MarkStepButton stepSlug="where" initialStatus={progressStatus} isLoggedIn={Boolean(user)} />
          <Button href="/learn/sql/step/order-by" variant="secondary">
            Siguiente paso: ORDER BY
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
