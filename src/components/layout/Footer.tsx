import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[#ede8de]">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-8 text-sm text-[var(--muted)] md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-semibold text-[var(--foreground)]">Aula Clara</p>
          <p className="mt-2 max-w-md">
            Una plataforma educativa gratuita, tranquila y sostenible para aprender sin
            comparaciones ni presion.
          </p>
        </div>
        <div>
          <p className="font-semibold text-[var(--foreground)]">Enlaces</p>
          <div className="mt-2 flex flex-col gap-2">
            <Link href="/topics">Temas</Link>
            <Link href="/support">Plan Apoyo</Link>
            <Link href="/sustainability">Cómo se mantiene Aula Clara</Link>
            <Link href="/support">Privacidad futura</Link>
            <Link href="/support">Contacto futuro</Link>
          </div>
        </div>
        <div>
          <p className="font-semibold text-[var(--foreground)]">Principio guia</p>
          <p className="mt-2">No pagas para aprender. Pagas para apoyar y mejorar la experiencia.</p>
        </div>
      </div>
    </footer>
  );
}
