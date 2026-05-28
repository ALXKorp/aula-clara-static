type LevelBadgeProps = {
  level: string;
};

export function LevelBadge({ level }: LevelBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-md bg-[#edf5f1] px-3 py-1 text-xs font-semibold text-[#38564f]">
      {level}
    </span>
  );
}
