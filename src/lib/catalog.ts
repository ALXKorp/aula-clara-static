export type CatalogArea = {
  slug: string;
  title: string;
  description: string;
  order: number;
  icon?: string;
};

export type CatalogCategory = {
  slug: string;
  areaSlug: string;
  title: string;
  description: string;
  order: number;
};

export type TopicLevel = "Inicial" | "Intermedio" | "Avanzado";
export type TopicStatus = "Disponible" | "Próximamente";

export type CatalogTopic = {
  slug: string;
  categorySlug: string;
  title: string;
  description: string;
  level: TopicLevel;
  estimatedTime: string;
  status: TopicStatus;
  href?: string;
  routeHref?: string;
};

export const catalogAreas: CatalogArea[] = [
  {
    slug: "programacion",
    title: "Programación",
    description:
      "Aprende desarrollo web, bases de datos, lógica de programación y herramientas técnicas paso a paso.",
    order: 1,
    icon: "code"
  }
];

export const catalogCategories: CatalogCategory[] = [
  {
    slug: "bases-de-datos",
    areaSlug: "programacion",
    title: "Bases de datos",
    description: "Aprende a guardar, consultar y relacionar información de forma organizada.",
    order: 1
  },
  {
    slug: "desarrollo-web",
    areaSlug: "programacion",
    title: "Desarrollo web",
    description: "Aprende a construir páginas y aplicaciones web desde sus fundamentos.",
    order: 2
  },
  {
    slug: "javascript",
    areaSlug: "programacion",
    title: "JavaScript",
    description: "Aprende a dar comportamiento e interacción a tus páginas web.",
    order: 3
  },
  {
    slug: "java",
    areaSlug: "programacion",
    title: "Java",
    description: "Aprende programación orientada a objetos y bases de desarrollo backend.",
    order: 4
  }
];

export const catalogTopics: CatalogTopic[] = [
  {
    slug: "sql",
    categorySlug: "bases-de-datos",
    title: "SQL sin miedo",
    description:
      "Aprende a consultar, filtrar, ordenar, agrupar, unir y modificar datos paso a paso.",
    level: "Inicial",
    estimatedTime: "2-4 horas",
    status: "Disponible",
    href: "/topics/sql",
    routeHref: "/learn/sql"
  },
  {
    slug: "html",
    categorySlug: "desarrollo-web",
    title: "HTML desde cero",
    description: "Estructura páginas web con etiquetas claras y ejemplos tranquilos.",
    level: "Inicial",
    estimatedTime: "Próximamente",
    status: "Próximamente"
  },
  {
    slug: "css",
    categorySlug: "desarrollo-web",
    title: "CSS sin miedo",
    description: "Da estilo a tus páginas entendiendo cajas, colores, espaciado y responsive.",
    level: "Inicial",
    estimatedTime: "Próximamente",
    status: "Próximamente"
  },
  {
    slug: "javascript-basico",
    categorySlug: "javascript",
    title: "JavaScript básico",
    description: "Aprende a dar comportamiento e interacción a tus páginas web.",
    level: "Inicial",
    estimatedTime: "Próximamente",
    status: "Próximamente"
  },
  {
    slug: "java-desde-cero",
    categorySlug: "java",
    title: "Java desde cero",
    description: "Empieza con programación orientada a objetos y bases de desarrollo backend.",
    level: "Inicial",
    estimatedTime: "Próximamente",
    status: "Próximamente"
  }
];

export function getCatalogAreas() {
  return [...catalogAreas].sort((a, b) => a.order - b.order);
}

export function getCategoriesByArea(areaSlug: string) {
  return catalogCategories
    .filter((category) => category.areaSlug === areaSlug)
    .sort((a, b) => a.order - b.order);
}

export function getTopicsByCategory(categorySlug: string) {
  return catalogTopics.filter((topic) => topic.categorySlug === categorySlug);
}

export function getCatalogTopic(slug: string) {
  return catalogTopics.find((topic) => topic.slug === slug) ?? null;
}

export function getCatalogContextForTopic(slug: string) {
  const topic = getCatalogTopic(slug);
  const category = topic
    ? catalogCategories.find((item) => item.slug === topic.categorySlug) ?? null
    : null;
  const area = category
    ? catalogAreas.find((item) => item.slug === category.areaSlug) ?? null
    : null;

  return { area, category, topic };
}
