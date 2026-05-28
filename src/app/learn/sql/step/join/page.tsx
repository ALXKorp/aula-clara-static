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
  "Olvidar la condicion ON.",
  "Unir columnas que no estan relacionadas.",
  "No indicar de que tabla viene cada columna cuando hay nombres repetidos.",
  "Pensar que JOIN copia tablas, cuando realmente combina resultados."
];

export default function JoinLessonPage() {
  return (
    <article className="mx-auto max-w-4xl px-5 py-14">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
        Leccion SQL
      </p>
      <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">
        JOIN: como unir datos de varias tablas
      </h1>
      <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
        JOIN sirve para combinar informacion de varias tablas. Es normal que al principio cueste
        un poco, porque ya estamos relacionando datos separados. Vamos con calma.
      </p>
      <div className="mt-6">
        <DemoAccessNotice />
      </div>

      <div className="mt-10 grid gap-6">
        <LessonSection title="Explicacion sencilla">
          <p>
            Muchas bases de datos separan la informacion en varias tablas. Por ejemplo, una tabla
            puede guardar usuarios y otra tabla puede guardar pedidos.
          </p>
          <p>
            JOIN permite juntar resultados de esas tablas cuando existe una columna relacionada,
            como un id de usuario que aparece tambien en los pedidos.
          </p>
        </LessonSection>

        <LessonSection title="Ejemplo principal SQL">
          <SqlExample
            code={
              "SELECT usuarios.nombre, pedidos.fecha\nFROM usuarios\nJOIN pedidos ON usuarios.id = pedidos.usuario_id;"
            }
          />
          <p>usuarios.nombre obtiene el nombre desde la tabla usuarios.</p>
          <p>pedidos.fecha obtiene la fecha desde la tabla pedidos.</p>
          <p>FROM usuarios indica la tabla principal.</p>
          <p>JOIN pedidos anade la tabla pedidos.</p>
          <p>
            ON usuarios.id = pedidos.usuario_id indica como se relacionan ambas tablas.
          </p>
        </LessonSection>

        <LessonSection title="Segundo ejemplo SQL">
          <SqlExample
            code={
              "SELECT alumnos.nombre, cursos.titulo\nFROM alumnos\nJOIN cursos ON alumnos.curso_id = cursos.id;"
            }
          />
          <p>
            Este ejemplo muestra el nombre de cada alumno junto con el titulo del curso al que
            pertenece.
          </p>
        </LessonSection>

        <LessonSection title="No lo entiendo todavia">
          <p>Imagina dos hojas de calculo. Una tiene usuarios. Otra tiene pedidos.</p>
          <p>
            JOIN sirve para juntar la informacion relacionada, como si dijeras: muestrame cada
            usuario junto con sus pedidos.
          </p>
        </LessonSection>

        <PracticeBox
          exercise="Escribe una consulta para mostrar clientes.nombre y facturas.total, uniendo las tablas clientes y facturas. La relacion es clientes.id = facturas.cliente_id."
          answer={
            "SELECT clientes.nombre, facturas.total\nFROM clientes\nJOIN facturas ON clientes.id = facturas.cliente_id;"
          }
        />

        <CommonMistakes mistakes={mistakes} />

        <SoftActionPanel title="Siguientes acciones">
          <MarkStepButton stepSlug="join" />
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
