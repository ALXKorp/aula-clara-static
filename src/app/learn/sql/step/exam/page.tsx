import { AdSlot } from "@/components/ads/AdSlot";
import { LessonSection } from "@/components/lessons/LessonSection";
import { SoftActionPanel } from "@/components/lessons/SoftActionPanel";
import { SqlExample } from "@/components/lessons/SqlExample";
import { DemoAccessNotice } from "@/components/learning/DemoAccessNotice";
import { MarkStepButton } from "@/components/learning/MarkStepButton";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const questions = [
  {
    question: "¿Para qué sirve SELECT?",
    answer: "Para elegir qué columnas queremos ver."
  },
  {
    question: "¿Qué hace WHERE?",
    answer: "Filtra filas para mostrar solo las que cumplen una condición."
  },
  {
    question: "¿Qué diferencia hay entre ORDER BY ASC y ORDER BY DESC?",
    answer: "ASC ordena de menor a mayor. DESC ordena de mayor a menor."
  },
  {
    question: "¿Para qué se usa GROUP BY?",
    answer: "Para agrupar filas con valores en común y poder obtener resúmenes."
  },
  {
    question: "¿Qué permite hacer JOIN?",
    answer: "Permite unir datos relacionados de varias tablas."
  },
  {
    question: "¿Por qué hay que tener cuidado con UPDATE sin WHERE?",
    answer: "Porque puede modificar muchas filas sin querer."
  },
  {
    question: "¿Qué hace INSERT INTO?",
    answer: "Añade un registro nuevo a una tabla."
  },
  {
    question: "¿Qué hace DELETE FROM?",
    answer: "Elimina registros de una tabla, normalmente usando WHERE para limitar cuáles."
  }
];

const reviewHints = [
  "Si fallas al elegir columnas: repasa SELECT.",
  "Si no sabes limitar resultados: repasa WHERE.",
  "Si confundes ASC y DESC: repasa ORDER BY.",
  "Si no entiendes resúmenes: repasa GROUP BY.",
  "Si te cuesta unir tablas: repasa JOIN.",
  "Si dudas al modificar datos: repasa INSERT, UPDATE y DELETE."
];

export default function ExamLessonPage() {
  return (
    <article className="mx-auto max-w-4xl px-5 py-14">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
        Simulacro SQL
      </p>
      <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">
        Simulacro: comprueba lo que ya entiendes
      </h1>
      <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
        Esto no es una prueba para juzgarte. Es una forma de ver qué partes ya reconoces y
        cuáles podrías repasar con calma.
      </p>
      <div className="mt-6">
        <DemoAccessNotice />
      </div>

      <div className="mt-10 grid gap-6">
        <Card>
          <h2 className="text-2xl font-bold">Preguntas rápidas</h2>
          <div className="mt-5 grid gap-4">
            {questions.map((item, index) => (
              <div key={item.question} className="rounded-md bg-[#f2f7f4] p-4">
                <p className="font-semibold text-[var(--foreground)]">
                  {index + 1}. {item.question}
                </p>
                <p className="mt-2 leading-7 text-[var(--muted)]">{item.answer}</p>
              </div>
            ))}
          </div>
        </Card>

        <LessonSection title="Consulta guiada">
          <p>Tabla productos: id, nombre, categoria, precio.</p>
          <p>
            Queremos mostrar nombre y precio de los productos de la categoría teclados, ordenados
            de menor a mayor precio.
          </p>
          <SqlExample
            code={
              "SELECT nombre, precio\nFROM productos\nWHERE categoria = 'teclados'\nORDER BY precio ASC;"
            }
          />
          <p>SELECT nombre, precio elige las columnas.</p>
          <p>FROM productos indica la tabla.</p>
          <p>WHERE categoria = &apos;teclados&apos; limita los resultados.</p>
          <p>ORDER BY precio ASC ordena de menor a mayor precio.</p>
        </LessonSection>

        <LessonSection title="Consulta con JOIN">
          <p>Tabla clientes: id, nombre.</p>
          <p>Tabla pedidos: id, cliente_id, total.</p>
          <p>Queremos mostrar el nombre del cliente y el total de sus pedidos.</p>
          <SqlExample
            code={
              "SELECT clientes.nombre, pedidos.total\nFROM clientes\nJOIN pedidos ON clientes.id = pedidos.cliente_id;"
            }
          />
          <p>SELECT elige el nombre del cliente y el total del pedido.</p>
          <p>FROM clientes empieza desde la tabla de clientes.</p>
          <p>JOIN pedidos añade la tabla de pedidos.</p>
          <p>ON clientes.id = pedidos.cliente_id explica cómo se relacionan.</p>
        </LessonSection>

        <LessonSection title="Qué repasar según dudas">
          <ul className="space-y-3">
            {reviewHints.map((hint) => (
              <li key={hint} className="flex gap-3">
                <span className="mt-3 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--accent)]" />
                <span>{hint}</span>
              </li>
            ))}
          </ul>
        </LessonSection>

        <LessonSection title="Mensaje final">
          <p>
            Si algo no salió, no significa que no sepas. Significa que ya sabes exactamente qué
            parte repasar.
          </p>
        </LessonSection>

        <SoftActionPanel title="Siguientes acciones">
          <MarkStepButton stepSlug="exam" />
          <Button href="/learn/sql" variant="secondary">
            Volver a la ruta
          </Button>
          <Button href="/learn/sql/step/select" variant="ghost">
            Repasar SELECT
          </Button>
        </SoftActionPanel>

        <AdSlot />
      </div>
    </article>
  );
}
