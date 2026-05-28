import { prisma } from "@/lib/prisma";
import { getCompletedStepSlugs } from "@/lib/progress";

export type RouteStepStatus = "Completado" | "Disponible" | "Recomendado" | "Proximamente";

export type SqlRouteStep = {
  slug: string;
  title: string;
  description: string;
  status: RouteStepStatus;
  href?: string;
};

export type SqlNextStep = {
  title: string;
  href: string;
};

export const fallbackSqlRouteSteps: SqlRouteStep[] = [
  {
    slug: "database-basics",
    title: "Que es una base de datos",
    description: "Una forma ordenada de guardar informacion para poder encontrarla despues.",
    status: "Proximamente"
  },
  {
    slug: "tables",
    title: "Que es una tabla",
    description: "La estructura donde los datos se organizan en filas y columnas.",
    status: "Proximamente"
  },
  {
    slug: "queries",
    title: "Que es una consulta",
    description: "Una pregunta escrita para pedir datos concretos a la base de datos.",
    status: "Proximamente"
  },
  {
    slug: "select",
    title: "SELECT",
    description: "El paso recomendado para aprender a pedir columnas concretas de una tabla.",
    status: "Recomendado",
    href: "/learn/sql/step/select"
  },
  {
    slug: "where",
    title: "WHERE",
    description: "Filtra los resultados para quedarte con los datos que necesitas.",
    status: "Disponible",
    href: "/learn/sql/step/where"
  },
  {
    slug: "order-by",
    title: "ORDER BY",
    description: "Ordena los datos para leerlos con mas claridad.",
    status: "Disponible",
    href: "/learn/sql/step/order-by"
  },
  {
    slug: "group-by",
    title: "GROUP BY",
    description: "Agrupa informacion para resumir y comparar datos.",
    status: "Disponible",
    href: "/learn/sql/step/group-by"
  },
  {
    slug: "join",
    title: "JOIN",
    description: "Une informacion de varias tablas paso a paso.",
    status: "Disponible",
    href: "/learn/sql/step/join"
  },
  {
    slug: "insert-update-delete",
    title: "INSERT, UPDATE y DELETE",
    description: "Crea, modifica y elimina datos con cuidado.",
    status: "Proximamente"
  },
  {
    slug: "review",
    title: "Ejercicios de repaso",
    description: "Practica lo aprendido con ejercicios pequenos.",
    status: "Disponible",
    href: "/learn/sql/step/review"
  },
  {
    slug: "exam",
    title: "Simulacro de examen",
    description: "Repasa conceptos esenciales con una practica guiada.",
    status: "Proximamente"
  }
];

const stepLinks: Record<string, string> = {
  select: "/learn/sql/step/select",
  where: "/learn/sql/step/where",
  "order-by": "/learn/sql/step/order-by",
  "group-by": "/learn/sql/step/group-by",
  join: "/learn/sql/step/join",
  review: "/learn/sql/step/review"
};

const continuableSlugs = ["select", "where", "order-by", "group-by", "join", "review"];

function mapStepStatus(status: string): RouteStepStatus {
  if (status === "RECOMMENDED") return "Recomendado";
  if (status === "AVAILABLE") return "Disponible";
  return "Proximamente";
}

export async function getSqlRouteForUser(userId?: string | null) {
  try {
    const [path, completedSlugs] = await Promise.all([
      prisma.learningPath.findFirst({
        where: {
          topic: { slug: "sql" }
        },
        include: {
          steps: {
            orderBy: { order: "asc" },
            select: {
              slug: true,
              title: true,
              description: true,
              status: true
            }
          }
        }
      }),
      userId ? getCompletedStepSlugs(userId) : Promise.resolve([])
    ]);

    if (!path) {
      const nextStep = getNextSqlStep(fallbackSqlRouteSteps, []);

      return {
        steps: fallbackSqlRouteSteps,
        completedCount: 0,
        nextStep,
        allContinuableCompleted: false
      };
    }

    const completedSet = new Set(completedSlugs);
    const steps = path.steps.map((step) => ({
      slug: step.slug,
      title: step.title,
      description: step.description,
      status: completedSet.has(step.slug) ? "Completado" : mapStepStatus(step.status),
      href: stepLinks[step.slug]
    })) satisfies SqlRouteStep[];
    const nextStep = getNextSqlStep(steps, completedSlugs);

    return {
      steps,
      completedCount: completedSlugs.length,
      nextStep,
      allContinuableCompleted: !nextStep
    };
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("Aula Clara: usando fallback de ruta SQL por error al leer Prisma.", error);
    }

    const nextStep = getNextSqlStep(fallbackSqlRouteSteps, []);

    return {
      steps: fallbackSqlRouteSteps,
      completedCount: 0,
      nextStep,
      allContinuableCompleted: false
    };
  }
}

function getNextSqlStep(steps: SqlRouteStep[], completedSlugs: string[]): SqlNextStep | null {
  const completedSet = new Set(completedSlugs);

  for (const slug of continuableSlugs) {
    if (completedSet.has(slug)) {
      continue;
    }

    const step = steps.find((item) => item.slug === slug);
    const href = stepLinks[slug];

    if (step && href) {
      return {
        title: step.title,
        href
      };
    }
  }

  return null;
}
