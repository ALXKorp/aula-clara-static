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

export const sqlRouteSteps: SqlRouteStep[] = [
  {
    slug: "database-basics",
    title: "Qué es una base de datos",
    description: "Una forma ordenada de guardar información para poder encontrarla después.",
    status: "Recomendado",
    href: "/learn/sql/step/database-basics"
  },
  {
    slug: "tables",
    title: "Qué es una tabla",
    description: "La estructura donde los datos se organizan en filas y columnas.",
    status: "Disponible",
    href: "/learn/sql/step/tables"
  },
  {
    slug: "queries",
    title: "Qué es una consulta",
    description: "Una pregunta escrita para pedir datos concretos a la base de datos.",
    status: "Disponible",
    href: "/learn/sql/step/queries"
  },
  {
    slug: "select",
    title: "SELECT",
    description: "Aprende a pedir columnas concretas de una tabla.",
    status: "Disponible",
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
    status: "Disponible",
    href: "/learn/sql/step/insert-update-delete"
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
    status: "Disponible",
    href: "/learn/sql/step/exam"
  }
];

export const stepLinks: Record<string, string> = {
  "database-basics": "/learn/sql/step/database-basics",
  tables: "/learn/sql/step/tables",
  queries: "/learn/sql/step/queries",
  select: "/learn/sql/step/select",
  where: "/learn/sql/step/where",
  "order-by": "/learn/sql/step/order-by",
  "group-by": "/learn/sql/step/group-by",
  join: "/learn/sql/step/join",
  "insert-update-delete": "/learn/sql/step/insert-update-delete",
  review: "/learn/sql/step/review",
  exam: "/learn/sql/step/exam"
};

export const continuableSlugs = [
  "database-basics",
  "tables",
  "queries",
  "select",
  "where",
  "order-by",
  "group-by",
  "join",
  "insert-update-delete",
  "review",
  "exam"
];

export function getSqlRouteWithProgress(completedSlugs: string[]) {
  const completedSet = new Set(completedSlugs);
  const nextStep = getNextSqlStep(completedSlugs);

  return sqlRouteSteps.map((step) => {
    const status: RouteStepStatus = completedSet.has(step.slug)
      ? "Completado"
      : nextStep?.href === step.href
        ? "Recomendado"
        : step.status === "Recomendado"
          ? "Disponible"
          : step.status;

    return {
      ...step,
      status
    };
  });
}

export function getNextSqlStep(completedSlugs: string[]): SqlNextStep | null {
  const completedSet = new Set(completedSlugs);

  for (const slug of continuableSlugs) {
    if (completedSet.has(slug)) {
      continue;
    }

    const step = sqlRouteSteps.find((item) => item.slug === slug);
    const href = stepLinks[slug];

    if (step && href) {
      return { title: step.title, href };
    }
  }

  return null;
}
