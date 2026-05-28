import { AdSlot } from "@/components/ads/AdSlot";
import { CommonMistakes } from "@/components/lessons/CommonMistakes";
import { LessonSection } from "@/components/lessons/LessonSection";
import { PracticeBox } from "@/components/lessons/PracticeBox";
import { SoftActionPanel } from "@/components/lessons/SoftActionPanel";
import { DemoAccessNotice } from "@/components/learning/DemoAccessNotice";
import { MarkStepButton } from "@/components/learning/MarkStepButton";
import { Button } from "@/components/ui/Button";

const mistakes = [
  "Pensar que una base de datos es lo mismo que una tabla.",
  "Pensar que solo sirve para programadores.",
  "Pensar que siempre se ve directamente.",
  "Confundir guardar datos con mostrarlos en pantalla."
];

export default function DatabaseBasicsLessonPage() {
  return (
    <article className="mx-auto max-w-4xl px-5 py-14">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
        Lección SQL
      </p>
      <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">
        Qué es una base de datos
      </h1>
      <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
        Una base de datos sirve para guardar información de forma organizada, para que después
        podamos encontrarla, consultarla y modificarla con más facilidad.
      </p>
      <div className="mt-6">
        <DemoAccessNotice />
      </div>

      <div className="mt-10 grid gap-6">
        <LessonSection title="Explicación sencilla">
          <p>
            Una base de datos no es solo un archivo grande. Es una forma ordenada de guardar
            información para poder trabajar con ella sin perderse.
          </p>
          <p>
            Se usa en tiendas online, bancos, redes sociales, videojuegos, centros educativos y
            muchas aplicaciones que consultan datos cada día.
          </p>
        </LessonSection>

        <LessonSection title="Una analogía tranquila">
          <p>
            Puedes imaginar una base de datos como un archivador ordenado o una biblioteca. Cada
            cosa tiene su sitio, y por eso es más fácil encontrarla cuando la necesitas.
          </p>
        </LessonSection>

        <LessonSection title="Ejemplo sencillo">
          <p>Una tienda puede guardar información sobre clientes, productos, pedidos y pagos.</p>
          <p>
            Cada grupo de información se organiza para que la tienda pueda saber qué se vendió, a
            quién, cuándo y por cuánto.
          </p>
        </LessonSection>

        <LessonSection title="No lo entiendo todavía">
          <p>
            Una base de datos no es magia. Simplemente es una forma ordenada de guardar
            información para poder buscarla después sin tener que revisar todo a mano.
          </p>
        </LessonSection>

        <PracticeBox
          exercise="Piensa en una aplicación que uses. ¿Qué datos crees que necesita guardar?"
          answer="Una app de comida puede guardar usuarios, restaurantes, pedidos, direcciones y pagos."
        />

        <CommonMistakes mistakes={mistakes} />

        <SoftActionPanel title="Siguientes acciones">
          <MarkStepButton stepSlug="database-basics" />
          <Button href="/learn/sql/step/tables" variant="secondary">
            Siguiente paso: Qué es una tabla
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
