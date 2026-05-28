import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import type { CatalogArea } from "@/lib/catalog";

type AreaCardProps = {
  area: CatalogArea;
  href: string;
};

export function AreaCard({ area, href }: AreaCardProps) {
  return (
    <Card className="bg-[#fbfaf6]">
      <span className="inline-flex rounded-md bg-[#dbece6] px-3 py-1 text-xs font-semibold text-[#2f5149]">
        Área
      </span>
      <h2 className="mt-5 text-3xl font-bold">{area.title}</h2>
      <p className="mt-4 max-w-2xl leading-8 text-[var(--muted)]">
        Aprende fundamentos, frontend, backend y bases de datos paso a paso.
      </p>
      <p className="mt-3 leading-8 text-[var(--muted)]">{area.description}</p>
      <Button href={href} className="mt-6">
        Entrar en {area.title}
      </Button>
    </Card>
  );
}
