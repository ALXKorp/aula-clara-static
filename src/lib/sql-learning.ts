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

export const stepLinks: Record<string, string> = {
  select: "/learn/sql/step/select",
  where: "/learn/sql/step/where",
  "order-by": "/learn/sql/step/order-by",
  "group-by": "/learn/sql/step/group-by",
  join: "/learn/sql/step/join",
  review: "/learn/sql/step/review"
};

export const continuableSlugs = ["select", "where", "order-by", "group-by", "join", "review"];

export function getSqlRouteWithProgress(completedSlugs: string[]) {
  const completedSet = new Set(completedSlugs);

  return sqlRouteSteps.map((step) => ({
    ...step,
    status: completedSet.has(step.slug) ? "Completado" : step.status
  }));
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
