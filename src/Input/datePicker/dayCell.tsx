import { SetStateAction } from "react";

interface DayCellProps {
  date?: number;
  selected?: boolean;
  state: "today" | "thisMonth" | "otherMonth";
  onClick: () => void;
}

export default function DayCell({
  date,
  selected,
  state,
  onClick,
}: DayCellProps) {
  const selectedStyle = "bg-button-primary border-button-primary";
  const stateStyle = {
    today: {
      fontColor: `${selected ? "text-text-on-color" : "text-support-info"} hover:text-support-info`,
    },
    thisMonth: {
      fontColor: `${selected ? "text-text-on-color" : "text-text-primary"} hover:text-text-primary`,
    },
    otherMonth: {
      fontColor: `${selected ? "text-text-on-color" : "text-text-secondary"} hover:text-text-secondary`,
    },
  };

  return (
    <div
      className={`
        ${stateStyle[state]["fontColor"]}
        ${selected && selectedStyle}
        flex flex-col items-center justify-center w-11 h-11 relative border-2 
        hover:bg-layer-01-hover hover:border-layer-01-hover border-transparent group
      `}
      onClick={onClick}
    >
      {date}
      {state === "today" && (
        <div
          className={`w-1 h-1 rounded-full absolute bottom-[5px] group-hover:bg-support-info ${selected ? "bg-text-on-color" : "bg-support-info"} `}
        />
      )}
    </div>
  );
}
