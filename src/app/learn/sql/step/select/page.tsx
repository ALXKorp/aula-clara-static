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
  "Olvidar la coma entre columnas.",
  "Escribir mal el nombre de la tabla.",
  "Olvidar FROM.",
  "Usar SELECT * siempre por costumbre."
];

export default async function SelectLessonPage() {
  const user = await getCurrentUser();
  const progressStatus = user ? await getStepProgress(user.id, "select") : null;

  return (
    <article className="mx-auto max-w-4xl px-5 py-14">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
        Leccion SQL
      </p>
      <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">
        SELECT: como pedir datos a una tabla
      </h1>
      <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
        SELECT es una de las primeras palabras que conviene conocer en SQL. Sirve para pedir
        datos a una tabla, eligiendo que columnas quieres ver.
      </p>
      <div className="mt-6">
        <DemoAccessNotice isLoggedIn={Boolean(user)} />
      </div>

      <div className="mt-10 grid gap-6">
        <LessonSection title="Explicacion sencilla">
          <p>
            En SQL, SELECT se usa para consultar informacion. Puedes imaginarlo como una forma
            de decir: quiero ver estos datos concretos.
          </p>
          <p>
            Normalmente escribimos SELECT seguido de las columnas que queremos mostrar. Luego
            usamos FROM para indicar de que tabla salen esos datos.
          </p>
          <p>
            No hace falta memorizar todo a la vez. Primero entiende la idea: SELECT pide
            columnas y FROM dice de donde salen.
          </p>
        </LessonSection>

        <LessonSection title="Primer ejemplo SQL">
          <SqlExample code={"SELECT nombre, email\nFROM usuarios;"} />
          <p>
            SELECT nombre, email indica que queremos ver las columnas nombre y email.
          </p>
          <p>FROM usuarios indica que esos datos salen de la tabla usuarios.</p>
        </LessonSection>

        <LessonSection title="Segundo ejemplo SQL">
          <SqlExample code={"SELECT *\nFROM usuarios;"} />
          <p>
            El asterisco significa todas las columnas. Es util para aprender o revisar rapido
            que datos tiene una tabla.
          </p>
          <p>
            En proyectos reales no siempre es lo ideal, porque puede traer mas datos de los
            necesarios. Aun asi, al empezar ayuda a ver la tabla completa.
          </p>
        </LessonSection>

        <LessonSection title="No lo entiendo todavia">
          <p>
            Imagina que una tabla es como una hoja de calculo. Las columnas son cosas como
            nombre, email o fecha.
          </p>
          <p>
            SELECT sirve para decir que columnas quieres ver. FROM sirve para decir de que hoja
            o tabla salen esos datos.
          </p>
        </LessonSection>

        <PracticeBox
          exercise="Escribe una consulta para mostrar las columnas titulo y autor de una tabla llamada libros."
          answer={"SELECT titulo, autor\nFROM libros;"}
        />

        <CommonMistakes mistakes={mistakes} />

        <SoftActionPanel title="Siguientes acciones">
          <MarkStepButton stepSlug="select" initialStatus={progressStatus} isLoggedIn={Boolean(user)} />
          <Button href="/learn/sql/step/where" variant="secondary">
            Siguiente paso: WHERE
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
