"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

type MarkStepButtonProps = {
  stepSlug: string;
  initialStatus?: string | null;
  isLoggedIn: boolean;
};

export function MarkStepButton({ stepSlug, initialStatus, isLoggedIn }: MarkStepButtonProps) {
  const [status, setStatus] = useState(initialStatus ?? null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const isCompleted = status === "COMPLETED";

  async function markAsUnderstood() {
    setError("");

    if (!isLoggedIn) {
      setError("Necesitas iniciar sesión para guardar tu progreso.");
      return;
    }

    setIsLoading(true);
    const response = await fetch("/api/progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ stepSlug, status: "COMPLETED" })
    });
    const data = await response.json();
    setIsLoading(false);

    if (!response.ok) {
      setError(data.error ?? "No se pudo guardar el progreso.");
      return;
    }

    setStatus(data.progress.status);
  }

  return (
    <div className="grid gap-3">
      <Button type="button" onClick={markAsUnderstood} disabled={isLoading || isCompleted}>
        {isLoading ? "Guardando..." : isCompleted ? "Entendido" : "Marcar como entendido"}
      </Button>
      {error ? (
        <p className="rounded-md border border-[#d6e2db] bg-white px-4 py-3 text-sm text-[#4d615b]">
          {error}{" "}
          <Link className="font-semibold text-[var(--primary-dark)]" href="/login">
            Ir a login
          </Link>
        </p>
      ) : null}
    </div>
  );
}
