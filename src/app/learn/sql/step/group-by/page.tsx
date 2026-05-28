import { AdSlot } from "@/components/ads/AdSlot";
import { DemoAccessNotice } from "@/components/learning/DemoAccessNotice";
import { MarkStepButton } from "@/components/learning/MarkStepButton";
import { Button } from "@/components/ui/Button";
import { CommonMistakes } from "@/components/lessons/CommonMistakes";
import { LessonSection } from "@/components/lessons/LessonSection";
import { PracticeBox } from "@/components/lessons/PracticeBox";
import { SoftActionPanel } from "@/components/lessons/SoftActionPanel";
import { SqlExample } from "@/components/lessons/SqlExample";

const mistakes = [
  "Usar GROUP BY sin entender que se esta agrupando.",
  "Seleccionar columnas que no estan agrupadas ni resumidas.",
  "Confundir WHERE con filtros sobre grupos.",
  "Olvidar que COUNT, AVG, SUM, MIN y MAX suelen acompanar a GROUP BY."
];

export default function GroupByLessonPage() {
  return (
    <article className="mx-auto max-w-4xl px-5 py-14">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
        Leccion SQL
      </p>
      <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">
        GROUP BY: como agrupar datos
      </h1>
      <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
        GROUP BY sirve para agrupar filas que tienen valores en comun. Es un paso mas avanzado
        que SELECT, WHERE y ORDER BY, asi que podemos ir despacio.
      </p>
      <div className="mt-6">
        <DemoAccessNotice />
      </div>

      <div className="mt-10 grid gap-6">
        <LessonSection title="Explicacion sencilla">
          <p>
            GROUP BY suele usarse junto con funciones como COUNT, SUM, AVG, MIN o MAX. Sirve
            para obtener resumenes: contar elementos, calcular medias o sumar valores por grupo.
          </p>
          <p>
            La idea principal es juntar filas que comparten algo, como la misma ciudad o la misma
            categoria, y despues calcular algo sobre cada grupo.
          </p>
        </LessonSection>

        <LessonSection title="Ejemplo principal SQL">
          <SqlExample
            code={"SELECT ciudad, COUNT(*) AS total_usuarios\nFROM usuarios\nGROUP BY ciudad;"}
          />
          <p>Esta consulta agrupa usuarios por ciudad.</p>
          <p>COUNT(*) cuenta cuantas filas hay en cada ciudad.</p>
          <p>AS total_usuarios da un nombre mas claro al resultado.</p>
        </LessonSection>

        <LessonSection title="Segundo ejemplo SQL">
          <SqlExample
            code={"SELECT categoria, AVG(precio) AS precio_medio\nFROM productos\nGROUP BY categoria;"}
          />
          <p>
            Esta consulta agrupa productos por categoria y calcula el precio medio de cada una.
          </p>
        </LessonSection>

        <LessonSection title="No lo entiendo todavia">
          <p>
            GROUP BY es como separar una lista en montones. Por ejemplo, juntar productos por
            categoria y luego contar cuantos hay en cada monton.
          </p>
          <p>
            Primero decides como separar los montones. Despues decides que resumen quieres
            calcular en cada uno.
          </p>
        </LessonSection>

        <PracticeBox
          exercise="Escribe una consulta para contar cuantos libros hay por cada autor en la tabla libros."
          answer={"SELECT autor, COUNT(*) AS total_libros\nFROM libros\nGROUP BY autor;"}
        />

        <CommonMistakes mistakes={mistakes} />

        <SoftActionPanel title="Siguientes acciones">
          <MarkStepButton stepSlug="group-by" />
          <Button href="/learn/sql/step/join" variant="secondary">
            Siguiente paso: JOIN
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
