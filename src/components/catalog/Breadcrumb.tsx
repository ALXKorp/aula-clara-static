import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Migas de pan" className="flex flex-wrap items-center gap-2 text-sm">
      {items.map((item, index) => (
        <span key={`${item.label}-${index}`} className="inline-flex items-center gap-2">
          {index > 0 ? <span className="text-[var(--muted)]">/</span> : null}
          {item.href ? (
            <Link className="font-semibold text-[var(--primary-dark)] hover:underline" href={item.href}>
              {item.label}
            </Link>
          ) : (
            <span className="font-semibold text-[var(--muted)]">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
