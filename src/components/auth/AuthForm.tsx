"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";

type AuthMode = "login" | "register";

type AuthFormProps = {
  mode: AuthMode;
};

export function AuthForm({ mode }: AuthFormProps) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const payload =
      mode === "register"
        ? {
            name: String(formData.get("name") ?? ""),
            email: String(formData.get("email") ?? ""),
            password: String(formData.get("password") ?? "")
          }
        : {
            email: String(formData.get("email") ?? ""),
            password: String(formData.get("password") ?? "")
          };

    const response = await fetch(`/api/auth/${mode}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    setIsLoading(false);

    if (!response.ok) {
      setError(data.error ?? "No se pudo completar la accion.");
      return;
    }

    router.push("/dashboard");
    router.refresh();
  }

  const isRegister = mode === "register";

  return (
    <form className="mt-8 grid gap-4" onSubmit={onSubmit}>
      {isRegister ? (
        <label className="grid gap-2 text-sm font-medium">
          Nombre
          <input
            className="min-h-11 rounded-md border border-[var(--line)] bg-white px-3 outline-none focus:border-[var(--primary)]"
            name="name"
            placeholder="Tu nombre"
            required
          />
        </label>
      ) : null}

      <label className="grid gap-2 text-sm font-medium">
        Email
        <input
          className="min-h-11 rounded-md border border-[var(--line)] bg-white px-3 outline-none focus:border-[var(--primary)]"
          name="email"
          placeholder="tu@email.com"
          required
          type="email"
        />
      </label>

      <label className="grid gap-2 text-sm font-medium">
        Contraseña
        <input
          className="min-h-11 rounded-md border border-[var(--line)] bg-white px-3 outline-none focus:border-[var(--primary)]"
          minLength={8}
          name="password"
          placeholder="Al menos 8 caracteres"
          required
          type="password"
        />
      </label>

      {error ? (
        <p className="rounded-md border border-[#e3c9bd] bg-[#fff4ee] px-4 py-3 text-sm text-[#7a4632]">
          {error}
        </p>
      ) : null}

      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Un momento..." : isRegister ? "Crear cuenta" : "Entrar"}
      </Button>

      <p className="text-sm text-[var(--muted)]">
        {isRegister ? "¿Ya tienes cuenta? " : "¿No tienes cuenta? "}
        <Link className="font-semibold text-[var(--primary-dark)]" href={isRegister ? "/login" : "/register"}>
          {isRegister ? "Inicia sesión" : "Crea una cuenta gratis"}
        </Link>
      </p>
    </form>
  );
}
