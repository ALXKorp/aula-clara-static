import Link from "next/link";
import { Button } from "@/components/ui/Button";

const navItems = [
  { href: "/topics", label: "Temas" },
  { href: "/support", label: "Apoyar" }
];

export function Header() {
  return (
    <header className="border-b border-[var(--line)] bg-[rgba(255,253,248,0.86)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="group inline-flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#dbece6] text-lg font-bold text-[var(--primary-dark)]">
            AC
          </span>
          <span>
            <span className="block text-lg font-bold">Aula Clara</span>
            <span className="block text-xs text-[var(--muted)]">Aprende a tu ritmo</span>
          </span>
        </Link>

        <nav className="flex flex-wrap items-center gap-2 text-sm text-[var(--muted)]">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 font-medium transition hover:bg-[#edf5f1] hover:text-[var(--primary-dark)]"
            >
              {item.label}
            </Link>
          ))}
          <Button href="/dashboard" variant="secondary" className="ml-0 sm:ml-2">
            Mi progreso
          </Button>
        </nav>
      </div>
    </header>
  );
}
