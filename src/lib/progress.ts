import type { ProgressStatus } from "@prisma/client";
import { prisma } from "@/lib/prisma";

const validStatuses: ProgressStatus[] = [
  "NOT_STARTED",
  "IN_PROGRESS",
  "COMPLETED",
  "NEEDS_REVIEW"
];

export function isValidProgressStatus(status: unknown): status is ProgressStatus {
  return typeof status === "string" && validStatuses.includes(status as ProgressStatus);
}

export async function getUserProgress(userId: string) {
  return prisma.userProgress.findMany({
    where: { userId },
    include: {
      step: {
        select: {
          slug: true,
          title: true
        }
      }
    },
    orderBy: { updatedAt: "desc" }
  });
}

export async function getCompletedStepSlugs(userId: string) {
  const progress = await prisma.userProgress.findMany({
    where: {
      userId,
      status: "COMPLETED"
    },
    select: {
      step: {
        select: { slug: true }
      }
    }
  });

  return progress.map((item) => item.step.slug);
}

export async function getStepProgress(userId: string, stepSlug: string) {
  const progress = await prisma.userProgress.findFirst({
    where: {
      userId,
      step: {
        slug: stepSlug,
        path: {
          topic: {
            slug: "sql"
          }
        }
      }
    },
    select: { status: true }
  });

  return progress?.status ?? null;
}

export async function setStepProgress(userId: string, stepSlug: string, status: ProgressStatus) {
  const step = await prisma.learningStep.findFirst({
    where: {
      slug: stepSlug,
      path: {
        topic: {
          slug: "sql"
        }
      }
    },
    select: { id: true, slug: true, title: true }
  });

  if (!step) {
    throw new Error("STEP_NOT_FOUND");
  }

  return prisma.userProgress.upsert({
    where: {
      userId_stepId: {
        userId,
        stepId: step.id
      }
    },
    update: { status },
    create: {
      userId,
      stepId: step.id,
      status
    },
    include: {
      step: {
        select: {
          slug: true,
          title: true
        }
      }
    }
  });
}
