import type { TopicStatus } from "@/lib/catalog";

type StatusBadgeProps = {
  status: TopicStatus | string;
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const isAvailable = status === "Disponible";

  return (
    <span
      className={[
        "inline-flex items-center rounded-md px-3 py-1 text-xs font-semibold",
        isAvailable ? "bg-[#dbece6] text-[#2f5149]" : "bg-[#f3efe6] text-[#716657]"
      ].join(" ")}
    >
      {status}
    </span>
  );
}
