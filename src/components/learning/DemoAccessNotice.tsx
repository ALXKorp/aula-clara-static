type DemoAccessNoticeProps = {
  isLoggedIn?: boolean;
};

export function DemoAccessNotice({ isLoggedIn = false }: DemoAccessNoticeProps) {
  return (
    <aside className="rounded-lg border border-[#d6e2db] bg-[#f2f7f4] px-5 py-4 text-sm leading-6 text-[#4d615b]">
      {isLoggedIn
        ? "Tu cuenta ya puede guardar pasos entendidos en esta ruta. Puedes continuar cuando quieras."
        : "Crea una cuenta gratis para guardar tu progreso. De momento esta ruta está abierta como demo."}
    </aside>
  );
}
