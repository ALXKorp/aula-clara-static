import { AdSlot } from "@/components/ads/AdSlot";
import { DemoAccessNotice } from "@/components/learning/DemoAccessNotice";
import { MarkStepButton } from "@/components/learning/MarkStepButton";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { CommonMistakes } from "@/components/lessons/CommonMistakes";
import { LessonSection } from "@/components/lessons/LessonSection";
import { PracticeBox } from "@/components/lessons/PracticeBox";
import { SoftActionPanel } from "@/components/lessons/SoftActionPanel";
import { SqlExample } from "@/components/lessons/SqlExample";

const quickMap = [
  { term: "SELECT", meaning: "elegir columnas." },
  { term: "FROM", meaning: "elegir tabla." },
  { term: "WHERE", meaning: "filtrar filas." },
  { term: "ORDER BY", meaning: "ordenar resultados." },
  { term: "GROUP BY", meaning: "agrupar datos." },
  { term: "JOIN", meaning: "unir tablas relacionadas." },
  { term: "INSERT", meaning: "añadir registros." },
  { term: "UPDATE", meaning: "modificar registros." },
  { term: "DELETE", meaning: "eliminar registros con cuidado." }
];

const mistakes = [
  "Intentar memorizar sin entender.",
  "Olvidar el orden logico de la consulta.",
  "Confundir filtrar con ordenar.",
  "Usar GROUP BY sin funcion de resumen.",
  "Hacer JOIN sin condicion ON."
];

export default function ReviewLessonPage() {
  return (
    <article className="mx-auto max-w-4xl px-5 py-14">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
        Repaso SQL
      </p>
      <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">
        Repaso: une lo aprendido
      </h1>
      <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
        No necesitas dominarlo todo a la primera. La idea es reconocer para que sirve cada parte
        y practicar poco a poco.
      </p>
      <div className="mt-6">
        <DemoAccessNotice />
      </div>

      <div className="mt-10 grid gap-6">
        <Card>
          <h2 className="text-2xl font-bold">Mapa rapido</h2>
          <ul className="mt-5 grid gap-3 text-[var(--muted)] sm:grid-cols-2">
            {quickMap.map((item) => (
              <li key={item.term} className="rounded-md bg-[#f2f7f4] px-4 py-3 leading-7">
                <strong className="text-[var(--foreground)]">{item.term}</strong>: {item.meaning}
              </li>
            ))}
          </ul>
        </Card>

        <LessonSection title="Consulta completa de ejemplo">
          <SqlExample
            code={
              "SELECT clientes.nombre, COUNT(pedidos.id) AS total_pedidos\nFROM clientes\nJOIN pedidos ON clientes.id = pedidos.cliente_id\nWHERE clientes.ciudad = 'Madrid'\nGROUP BY clientes.nombre\nORDER BY total_pedidos DESC;"
            }
          />
          <p>Se muestran clientes de Madrid.</p>
          <p>Se unen clientes con pedidos.</p>
          <p>Se cuentan los pedidos de cada cliente.</p>
          <p>Se agrupa por nombre de cliente.</p>
          <p>Se ordena de mayor a menor numero de pedidos.</p>
        </LessonSection>

        <PracticeBox
          exercise="Tienes dos tablas: alumnos y notas. Alumnos tiene id, nombre y curso. Notas tiene id, alumno_id, asignatura y nota. Escribe una consulta para mostrar el nombre del alumno y su nota, solo de la asignatura Bases de datos, ordenando las notas de mayor a menor."
          answer={
            "SELECT alumnos.nombre, notas.nota\nFROM alumnos\nJOIN notas ON alumnos.id = notas.alumno_id\nWHERE notas.asignatura = 'Bases de datos'\nORDER BY notas.nota DESC;"
          }
        />

        <CommonMistakes mistakes={mistakes} />

        <LessonSection title="Mensaje final">
          <p>
            Si has llegado hasta aqui, ya tienes una base real. No hace falta que salga perfecto.
            Repetir ejemplos y equivocarse forma parte del aprendizaje.
          </p>
        </LessonSection>

        <SoftActionPanel title="Siguientes acciones">
          <MarkStepButton stepSlug="review" />
          <Button href="/learn/sql/step/exam" variant="secondary">
            Siguiente paso: Simulacro
          </Button>
          <Button href="/learn/sql">Volver a la ruta</Button>
          <Button href="/learn/sql/step/select" variant="secondary">
            Repasar SELECT
          </Button>
          <Button href="/learn/sql/step/exam" variant="ghost">
            Tengo examen pronto
          </Button>
          <Button type="button" variant="ghost">
            Preguntar a la IA
          </Button>
        </SoftActionPanel>

        <AdSlot />
      </div>
    </article>
  );
}
