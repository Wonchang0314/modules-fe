interface monthCellProps {
  date?: string;
  onClick?: () => void;
  state?: "current" | "other";
}

export default function MonthCell({
  date,
  onClick,
  state = "current",
}: monthCellProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center w-[100px] h-[66px] hover:bg-layer-01-hover ${state === "current" ? "text-text-primary" : "text-text-secondary"}`}
      onClick={onClick}
    >
      {date}
    </div>
  );
}
