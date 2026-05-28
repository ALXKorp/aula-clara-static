type UserRole = "USER" | "SUPPORTER" | "ADMIN";

type AdSlotProps = {
  userRole?: UserRole;
  label?: string;
};

export function AdSlot({ userRole = "USER", label = "Espacio de apoyo" }: AdSlotProps) {
  if (userRole === "SUPPORTER") {
    return null;
  }

  return (
    <aside className="rounded-lg border border-dashed border-[#b7c8bd] bg-[#eef6f1] px-5 py-4 text-sm text-[#4d615b]">
      <p className="font-semibold text-[#314d47]">{label}</p>
      <p className="mt-1">
        Publicidad discreta para mantener Aula Clara gratis. Sin ventanas emergentes ni
        interrupciones.
      </p>
    </aside>
  );
}
