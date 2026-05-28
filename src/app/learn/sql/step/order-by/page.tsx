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
  "Escribir ORDER sin BY.",
  "Confundir ASC y DESC.",
  "Intentar ordenar por una columna que no existe.",
  "Pensar que ORDER BY filtra datos, cuando solo los ordena."
];

export default async function OrderByLessonPage() {
  const user = await getCurrentUser();
  const progressStatus = user ? await getStepProgress(user.id, "order-by") : null;

  return (
    <article className="mx-auto max-w-4xl px-5 py-14">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
        Leccion SQL
      </p>
      <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">
        ORDER BY: como ordenar resultados
      </h1>
      <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
        ORDER BY sirve para ordenar los resultados de una consulta. Puede ordenar de menor a
        mayor o de mayor a menor.
      </p>
      <div className="mt-6">
        <DemoAccessNotice isLoggedIn={Boolean(user)} />
      </div>

      <div className="mt-10 grid gap-6">
        <LessonSection title="Explicacion sencilla">
          <p>
            ASC ordena de forma ascendente: normalmente de menor a mayor, o de la A a la Z.
            DESC ordena de forma descendente: de mayor a menor, o de la Z a la A.
          </p>
          <p>
            Si no indicas nada, normalmente la base de datos usa orden ascendente. Es bueno
            escribir ASC o DESC cuando quieras que la intencion quede clara.
          </p>
        </LessonSection>

        <LessonSection title="Ejemplo principal SQL">
          <SqlExample code={"SELECT nombre, precio\nFROM productos\nORDER BY precio ASC;"} />
          <p>Muestra nombre y precio de productos.</p>
          <p>ORDER BY precio ASC ordena los resultados por precio de menor a mayor.</p>
        </LessonSection>

        <LessonSection title="Segundo ejemplo SQL">
          <SqlExample code={"SELECT nombre, precio\nFROM productos\nORDER BY precio DESC;"} />
          <p>
            DESC muestra primero los valores mas altos. En este caso, los productos mas caros
            aparecerian antes.
          </p>
        </LessonSection>

        <LessonSection title="No lo entiendo todavia">
          <p>
            ORDER BY es como ordenar una lista de productos por precio: de barato a caro o de
            caro a barato.
          </p>
          <p>
            No elimina productos de la lista. Solo cambia el orden en el que aparecen.
          </p>
        </LessonSection>

        <PracticeBox
          exercise="Escribe una consulta para mostrar titulo y fecha_publicacion de la tabla libros, ordenando los libros mas recientes primero."
          answer={"SELECT titulo, fecha_publicacion\nFROM libros\nORDER BY fecha_publicacion DESC;"}
        />

        <CommonMistakes mistakes={mistakes} />

        <SoftActionPanel title="Siguientes acciones">
          <MarkStepButton stepSlug="order-by" initialStatus={progressStatus} isLoggedIn={Boolean(user)} />
          <Button href="/learn/sql/step/group-by" variant="secondary">
            Siguiente paso: GROUP BY
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
