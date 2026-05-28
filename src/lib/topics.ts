import { prisma } from "@/lib/prisma";

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

export const fallbackTopics: TopicSummary[] = [
  {
    slug: "sql",
    title: "SQL sin miedo",
    category: "Bases de datos",
    level: "Inicial",
    description:
      "Una ruta tranquila para entender tablas, consultas, filtros y relaciones paso a paso.",
    estimatedTime: "2-4 horas",
    status: "Tema inicial del MVP",
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

export const fallbackSqlTopic: TopicDetail = {
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

function canUseDatabase() {
  return Boolean(process.env.DATABASE_URL);
}

function logDatabaseFallback(error: unknown) {
  if (process.env.NODE_ENV !== "production") {
    console.warn("Aula Clara: usando fallback estatico porque Prisma no pudo leer la base de datos.", error);
  }
}

export async function getPublishedTopics(): Promise<TopicSummary[]> {
  if (!canUseDatabase()) {
    return fallbackTopics;
  }

  try {
    const topics = await prisma.topic.findMany({
      where: { isPublished: true },
      orderBy: { createdAt: "asc" },
      select: {
        slug: true,
        title: true,
        category: true,
        level: true,
        description: true,
        estimatedTime: true
      }
    });

    if (topics.length === 0) {
      return fallbackTopics;
    }

    return topics.map((topic) => ({
      ...topic,
      status: topic.slug === "sql" ? "Tema inicial del MVP" : "Publicado",
      href: `/topics/${topic.slug}`,
      action: "Abrir tema"
    }));
  } catch (error) {
    logDatabaseFallback(error);
    return fallbackTopics;
  }
}

export async function getSqlTopic(): Promise<TopicDetail> {
  if (!canUseDatabase()) {
    return fallbackSqlTopic;
  }

  try {
    const topic = await prisma.topic.findUnique({
      where: { slug: "sql" },
      select: {
        slug: true,
        title: true,
        description: true,
        category: true,
        level: true,
        estimatedTime: true
      }
    });

    if (!topic) {
      return fallbackSqlTopic;
    }

    return {
      ...topic,
      subtitle:
        "Una ruta inicial para entender bases de datos poco a poco, con explicaciones claras y practica sin presion."
    };
  } catch (error) {
    logDatabaseFallback(error);
    return fallbackSqlTopic;
  }
}
