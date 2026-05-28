import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const sqlSteps = [
  ["database-basics", "Que es una base de datos", "Una forma ordenada de guardar informacion.", "COMING_SOON"],
  ["tables", "Que es una tabla", "Filas, columnas y valores organizados.", "COMING_SOON"],
  ["queries", "Que es una consulta", "Una pregunta escrita para pedir datos.", "COMING_SOON"],
  ["select", "SELECT", "Elegir columnas concretas de una tabla.", "RECOMMENDED"],
  ["where", "WHERE", "Filtrar filas con una condicion.", "AVAILABLE"],
  ["order-by", "ORDER BY", "Ordenar resultados para leerlos mejor.", "AVAILABLE"],
  ["group-by", "GROUP BY", "Agrupar datos para obtener resumenes.", "AVAILABLE"],
  ["join", "JOIN", "Unir datos relacionados de varias tablas.", "AVAILABLE"],
  ["insert-update-delete", "INSERT, UPDATE y DELETE", "Crear, modificar y borrar datos con cuidado.", "COMING_SOON"],
  ["review", "Ejercicios de repaso", "Practicar lo aprendido con calma.", "AVAILABLE"],
  ["exam", "Simulacro de examen", "Repasar lo esencial sin presion.", "COMING_SOON"]
] as const;

const sqlResources = [
  {
    title: "Video introductorio de SQL",
    type: "VIDEO",
    description: "Recurso pendiente de anadir para presentar SQL desde cero.",
    whyUseful: "Servira como entrada visual para estudiantes que prefieren empezar con video."
  },
  {
    title: "Documentacion basica de SQL",
    type: "DOCUMENTATION",
    description: "Recurso pendiente de anadir con sintaxis basica revisada.",
    whyUseful: "Ayudara a consultar SELECT, WHERE y ORDER BY sin ruido."
  },
  {
    title: "Ejercicios de SELECT y WHERE",
    type: "EXERCISE",
    description: "Recurso pendiente de anadir con practica guiada.",
    whyUseful: "Permitira practicar consultas pequenas antes de avanzar."
  },
  {
    title: "Guia visual de JOIN",
    type: "ARTICLE",
    description: "Recurso pendiente de anadir para entender relaciones entre tablas.",
    whyUseful: "Ayudara a ver JOIN como union de informacion relacionada."
  },
  {
    title: "Repaso general de SQL",
    type: "PDF",
    description: "Recurso pendiente de anadir para repasar antes de examenes.",
    whyUseful: "Servira como resumen descargable cuando la plataforma lo permita."
  }
] as const;

async function main() {
  const adminPasswordHash = await bcrypt.hash("AulaClaraDemo2026!", 12);

  await prisma.user.upsert({
    where: { email: "admin@aulaclara.local" },
    update: {
      name: "Admin Aula Clara",
      passwordHash: adminPasswordHash,
      role: "ADMIN",
      plan: "SUPPORT"
    },
    create: {
      name: "Admin Aula Clara",
      email: "admin@aulaclara.local",
      passwordHash: adminPasswordHash,
      role: "ADMIN",
      plan: "SUPPORT"
    }
  });

  const topic = await prisma.topic.upsert({
    where: { slug: "sql" },
    update: {
      title: "SQL sin miedo",
      description:
        "Aprende a consultar, filtrar, ordenar, agrupar y unir datos paso a paso, sin presion y con ejemplos claros.",
      category: "Bases de datos",
      level: "Inicial",
      estimatedTime: "2-4 horas",
      isPublished: true
    },
    create: {
      slug: "sql",
      title: "SQL sin miedo",
      description:
        "Aprende a consultar, filtrar, ordenar, agrupar y unir datos paso a paso, sin presion y con ejemplos claros.",
      category: "Bases de datos",
      level: "Inicial",
      estimatedTime: "2-4 horas",
      isPublished: true
    }
  });

  const path = await prisma.learningPath.upsert({
    where: {
      topicId_title: {
        topicId: topic.id,
        title: "Ruta: SQL sin miedo"
      }
    },
    update: {
      description: "Una ruta tranquila para entender las bases de SQL desde cero.",
      level: "Inicial"
    },
    create: {
      topicId: topic.id,
      title: "Ruta: SQL sin miedo",
      level: "Inicial",
      description: "Una ruta tranquila para entender las bases de SQL desde cero."
    }
  });

  await prisma.userProgress.deleteMany({
    where: {
      step: {
        pathId: path.id
      }
    }
  });
  await prisma.learningStep.deleteMany({ where: { pathId: path.id } });
  await prisma.learningStep.createMany({
    data: sqlSteps.map(([slug, title, description, status], index) => ({
      pathId: path.id,
      slug,
      title,
      description,
      content: "Contenido inicial preparado para conectarse con las lecciones estaticas.",
      order: index + 1,
      status
    }))
  });

  await prisma.resource.deleteMany({ where: { topicId: topic.id } });
  await prisma.resource.createMany({
    data: sqlResources.map((resource) => ({
      topicId: topic.id,
      title: resource.title,
      type: resource.type,
      url: "#",
      author: "Aula Clara",
      platform: "Pendiente",
      language: "es",
      level: "Inicial",
      duration: "Pendiente",
      description: resource.description,
      whyUseful: resource.whyUseful,
      status: "PENDING_REVIEW"
    }))
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
