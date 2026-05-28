import { continuableSlugs, getNextSqlStep, getSqlRouteWithProgress } from "@/lib/sql-learning";

const STORAGE_KEY = "aula_clara_sql_progress";

function readRawProgress() {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter((item) => typeof item === "string") : [];
  } catch {
    return [];
  }
}

function writeRawProgress(slugs: string[]) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(new Set(slugs))));
  window.dispatchEvent(new Event("aula-clara-progress-changed"));
}

export function getCompletedSqlSteps() {
  return readRawProgress();
}

export function isSqlStepCompleted(stepSlug: string) {
  return getCompletedSqlSteps().includes(stepSlug);
}

export function markSqlStepCompleted(stepSlug: string) {
  const current = getCompletedSqlSteps();
  writeRawProgress([...current, stepSlug]);
}

export function clearSqlProgress() {
  writeRawProgress([]);
}

export function getLocalSqlRouteState() {
  const completedSlugs = getCompletedSqlSteps();
  return {
    completedSlugs,
    completedCount: completedSlugs.filter((slug) => continuableSlugs.includes(slug)).length,
    steps: getSqlRouteWithProgress(completedSlugs),
    nextStep: getNextSqlStep(completedSlugs)
  };
}
