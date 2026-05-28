export type TopicSummary = {
  slug: string;
  title: string;
  category: string;
  level: string;
  description: string;
  estimatedTime?: string;
  status: string;
  href: string;
  action: string;
};

export type TopicDetail = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  level: string;
  estimatedTime: string;
};

export const staticTopics: TopicSummary[] = [
  {
    slug: "sql",
    title: "SQL sin miedo",
    category: "Bases de datos",
    level: "Inicial",
    description:
      "Una ruta tranquila para entender tablas, consultas, filtros y relaciones paso a paso.",
    estimatedTime: "2-4 horas",
    status: "Tema inicial",
    href: "/topics/sql",
    action: "Abrir tema"
  },
  {
    slug: "html-css",
    title: "HTML y CSS claros",
    category: "Frontend",
    level: "Proximamente",
    description:
      "Fundamentos de estructura y estilo web con ejemplos visuales y ejercicios cortos.",
    status: "En preparacion",
    href: "/topics",
    action: "Ver detalles pronto"
  },
  {
    slug: "javascript",
    title: "JavaScript practico",
    category: "Programacion",
    level: "Proximamente",
    description:
      "Conceptos esenciales de JavaScript explicados con calma y practica guiada.",
    status: "En preparacion",
    href: "/topics",
    action: "Ver detalles pronto"
  }
];

export const staticSqlTopic: TopicDetail = {
  slug: "sql",
  title: "SQL sin miedo",
  subtitle:
    "Una ruta inicial para entender bases de datos poco a poco, con explicaciones claras y practica sin presion.",
  description:
    "SQL es un lenguaje para trabajar con datos. Sirve para consultar informacion, filtrarla, ordenarla, agruparla y modificarla cuando hace falta. En esta ruta empezamos desde las ideas mas basicas para que puedas construir seguridad paso a paso.",
  category: "Bases de datos",
  level: "Inicial",
  estimatedTime: "2-4 horas"
};

export async function getPublishedTopics() {
  return staticTopics;
}

export async function getSqlTopic() {
  return staticSqlTopic;
}
