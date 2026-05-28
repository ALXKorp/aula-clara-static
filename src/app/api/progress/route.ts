import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { getUserProgress, isValidProgressStatus, setStepProgress } from "@/lib/progress";

export async function GET() {
  const user = await getCurrentUser();

  if (!user) {
    return NextResponse.json({ error: "Necesitas iniciar sesión." }, { status: 401 });
  }

  const progress = await getUserProgress(user.id);

  return NextResponse.json({
    progress: progress.map((item) => ({
      stepSlug: item.step.slug,
      stepTitle: item.step.title,
      status: item.status
    }))
  });
}

export async function POST(request: Request) {
  const user = await getCurrentUser();

  if (!user) {
    return NextResponse.json(
      { error: "Necesitas iniciar sesión para guardar tu progreso." },
      { status: 401 }
    );
  }

  const { stepSlug, status } = await request.json();
  const cleanStepSlug = typeof stepSlug === "string" ? stepSlug.trim() : "";

  if (!cleanStepSlug) {
    return NextResponse.json({ error: "Indica el paso que quieres guardar." }, { status: 400 });
  }

  if (!isValidProgressStatus(status)) {
    return NextResponse.json({ error: "Estado de progreso no válido." }, { status: 400 });
  }

  try {
    const progress = await setStepProgress(user.id, cleanStepSlug, status);

    return NextResponse.json({
      progress: {
        stepSlug: progress.step.slug,
        stepTitle: progress.step.title,
        status: progress.status
      }
    });
  } catch (error) {
    if (error instanceof Error && error.message === "STEP_NOT_FOUND") {
      return NextResponse.json({ error: "No se ha encontrado ese paso." }, { status: 404 });
    }

    return NextResponse.json({ error: "No se pudo guardar el progreso." }, { status: 500 });
  }
}
