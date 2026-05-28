"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { isSqlStepCompleted, markSqlStepCompleted } from "@/lib/local-progress";

type MarkStepButtonProps = {
  stepSlug: string;
};

export function MarkStepButton({ stepSlug }: MarkStepButtonProps) {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsCompleted(isSqlStepCompleted(stepSlug));
  }, [stepSlug]);

  function markAsUnderstood() {
    setIsLoading(true);
    markSqlStepCompleted(stepSlug);
    setIsCompleted(true);
    setIsLoading(false);
  }

  return (
    <div className="grid gap-3">
      <Button type="button" onClick={markAsUnderstood} disabled={isLoading || isCompleted}>
        {isLoading ? "Guardando..." : isCompleted ? "Entendido" : "Marcar como entendido"}
      </Button>
      <p className="text-sm text-[#4d615b]">
        {isCompleted
          ? "Guardado en este navegador."
          : "No necesitas cuenta: este progreso se guarda localmente."}
      </p>
    </div>
  );
}
