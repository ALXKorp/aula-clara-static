import { AdSlot } from "@/components/ads/AdSlot";
import { CommonMistakes } from "@/components/lessons/CommonMistakes";
import { LessonSection } from "@/components/lessons/LessonSection";
import { PracticeBox } from "@/components/lessons/PracticeBox";
import { SoftActionPanel } from "@/components/lessons/SoftActionPanel";
import { DemoAccessNotice } from "@/components/learning/DemoAccessNotice";
import { MarkStepButton } from "@/components/learning/MarkStepButton";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const mistakes = [
  "Confundir tabla con base de datos completa.",
  "Confundir columna con fila.",
  "Pensar que todas las tablas guardan lo mismo.",
  "No entender que una base de datos puede tener muchas tablas."
];

export default function TablesLessonPage() {
  return (
    <article className="mx-auto max-w-4xl px-5 py-14">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
        Lección SQL
      </p>
      <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">
        Qué es una tabla
      </h1>
      <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
        Las tablas organizan los datos dentro de una base de datos. Cada tabla suele guardar
        información sobre un tipo de cosa.
      </p>
      <div className="mt-6">
        <DemoAccessNotice />
      </div>

      <div className="mt-10 grid gap-6">
        <LessonSection title="Explicación sencilla">
          <p>
            Una tabla tiene columnas y filas. Cada columna representa un dato concreto, como
            nombre o email. Cada fila suele representar un registro.
          </p>
          <p>
            Si la tabla se llama usuarios, cada fila puede representar una persona usuaria de la
            aplicación.
          </p>
        </LessonSection>

        <Card>
          <h2 className="text-2xl font-bold">Ejemplo visual</h2>
          <p className="mt-4 text-[var(--muted)]">Tabla usuarios:</p>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[420px] border-collapse text-left text-sm">
              <thead className="bg-[#edf5f1] text-[var(--foreground)]">
                <tr>
                  <th className="border border-[var(--line)] px-4 py-3">id</th>
                  <th className="border border-[var(--line)] px-4 py-3">nombre</th>
                  <th className="border border-[var(--line)] px-4 py-3">email</th>
                </tr>
              </thead>
              <tbody className="text-[var(--muted)]">
                <tr>
                  <td className="border border-[var(--line)] px-4 py-3">1</td>
                  <td className="border border-[var(--line)] px-4 py-3">Ana</td>
                  <td className="border border-[var(--line)] px-4 py-3">ana@example.com</td>
                </tr>
                <tr>
                  <td className="border border-[var(--line)] px-4 py-3">2</td>
                  <td className="border border-[var(--line)] px-4 py-3">Luis</td>
                  <td className="border border-[var(--line)] px-4 py-3">luis@example.com</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-5 leading-8 text-[var(--muted)]">
            id, nombre y email son columnas. Ana y Luis son filas o registros. Cada fila
            representa un usuario.
          </p>
        </Card>

        <LessonSection title="Una analogía tranquila">
          <p>Una tabla se parece mucho a una hoja de cálculo.</p>
          <p>
            La diferencia es que en una base de datos las tablas están pensadas para consultarse
            con instrucciones como las que aprenderás en SQL.
          </p>
        </LessonSection>

        <PracticeBox
          exercise="Si tuvieras una tabla de libros, ¿qué columnas tendría?"
          answer={"id\ntitulo\nautor\naño\ncategoria"}
        />

        <CommonMistakes mistakes={mistakes} />

        <SoftActionPanel title="Siguientes acciones">
          <MarkStepButton stepSlug="tables" />
          <Button href="/learn/sql/step/queries" variant="secondary">
            Siguiente paso: Qué es una consulta
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
