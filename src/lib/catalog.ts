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
      "Aprende fundamentos, desarrollo web, backend y bases de datos paso a paso, con rutas claras y práctica guiada.",
    order: 1,
    icon: "code"
  }
];

export const catalogCategories: CatalogCategory[] = [
  {
    slug: "fundamentos",
    areaSlug: "programacion",
    title: "Fundamentos",
    description:
      "Empieza por las bases: lógica, estructuras básicas y forma de pensar como programador.",
    order: 1
  },
  {
    slug: "frontend",
    areaSlug: "programacion",
    title: "Frontend",
    description: "Aprende a construir la parte visible e interactiva de una web.",
    order: 2
  },
  {
    slug: "backend",
    areaSlug: "programacion",
    title: "Backend",
    description: "Aprende a crear la lógica interna de una aplicación y comunicarla con datos.",
    order: 3
  },
  {
    slug: "bases-de-datos",
    areaSlug: "programacion",
    title: "Bases de datos",
    description:
      "Aprende a guardar, consultar, relacionar y modificar información de forma organizada.",
    order: 4
  }
];

export const catalogTopics: CatalogTopic[] = [
  {
    slug: "logica-programacion",
    categorySlug: "fundamentos",
    title: "Lógica de programación",
    description: "Aprende a resolver problemas paso a paso antes de escribir código complejo.",
    level: "Inicial",
    estimatedTime: "Próximamente",
    status: "Próximamente"
  },
  {
    slug: "poo",
    categorySlug: "fundamentos",
    title: "Programación orientada a objetos",
    description: "Entiende clases, objetos, atributos y métodos con ejemplos sencillos.",
    level: "Inicial",
    estimatedTime: "Próximamente",
    status: "Próximamente"
  },
  {
    slug: "html",
    categorySlug: "frontend",
    title: "HTML desde cero",
    description: "Aprende la estructura básica de una página web.",
    level: "Inicial",
    estimatedTime: "Próximamente",
    status: "Próximamente"
  },
  {
    slug: "css",
    categorySlug: "frontend",
    title: "CSS sin miedo",
    description: "Aprende a dar estilo, ordenar elementos y crear diseños claros.",
    level: "Inicial",
    estimatedTime: "Próximamente",
    status: "Próximamente"
  },
  {
    slug: "javascript-practico",
    categorySlug: "frontend",
    title: "JavaScript práctico",
    description: "Aprende a dar comportamiento e interacción a tus páginas web.",
    level: "Inicial",
    estimatedTime: "Próximamente",
    status: "Próximamente"
  },
  {
    slug: "java-desde-cero",
    categorySlug: "backend",
    title: "Java desde cero",
    description: "Aprende las bases de Java, clases, métodos y estructuras principales.",
    level: "Inicial",
    estimatedTime: "Próximamente",
    status: "Próximamente"
  },
  {
    slug: "apis-rest",
    categorySlug: "backend",
    title: "APIs REST básicas",
    description: "Aprende cómo una aplicación frontend se comunica con un backend.",
    level: "Intermedio",
    estimatedTime: "Próximamente",
    status: "Próximamente"
  },
  {
    slug: "spring-boot-basico",
    categorySlug: "backend",
    title: "Spring Boot básico",
    description: "Aprende a crear aplicaciones backend en Java con una estructura guiada.",
    level: "Intermedio",
    estimatedTime: "Próximamente",
    status: "Próximamente"
  },
  {
    slug: "sql",
    categorySlug: "bases-de-datos",
    title: "SQL sin miedo",
    description:
      "Una ruta tranquila para entender tablas, consultas, filtros y relaciones paso a paso.",
    level: "Inicial",
    estimatedTime: "2-4 horas",
    status: "Disponible",
    href: "/topics/sql",
    routeHref: "/learn/sql"
  },
  {
    slug: "postgresql-basico",
    categorySlug: "bases-de-datos",
    title: "PostgreSQL básico",
    description: "Aprende a trabajar con PostgreSQL desde lo básico.",
    level: "Inicial",
    estimatedTime: "Próximamente",
    status: "Próximamente"
  },
  {
    slug: "modelado-relacional",
    categorySlug: "bases-de-datos",
    title: "Modelado relacional",
    description: "Aprende a diseñar tablas, relaciones y estructuras antes de escribir SQL.",
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
