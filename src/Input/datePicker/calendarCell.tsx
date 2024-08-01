import { SetStateAction } from "react";

interface DayCellProps {
  date?: number | string;
  selected?: boolean;
  state: "today" | "inPeriod" | "outPeriod";
  onClick: () => void;
  cellType: "date" | "month" | "year";
}

export default function CalendarCell({
  date,
  selected,
  state,
  onClick,
  cellType,
}: DayCellProps) {
  const selectedStyle = "bg-button-primary border-button-primary";
  const stateStyle = {
    today: {
      fontColor: `${selected ? "text-text-on-color" : "text-support-info"} hover:text-support-info`,
    },
    inPeriod: {
      fontColor: `${selected ? "text-text-on-color" : "text-text-primary"} hover:text-text-primary`,
    },
    outPeriod: {
      fontColor: `${selected ? "text-text-on-color" : "text-text-secondary"} hover:text-text-secondary`,
    },
  };

  return (
    <>
      {cellType === "date" ? (
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
      ) : (
        <div
          className={`flex flex-col items-center justify-center w-[100px] h-[66px] hover:bg-layer-01-hover ${state === "inPeriod" ? "text-text-primary" : "text-text-secondary"}`}
          onClick={onClick}
        >
          {date}
        </div>
      )}
    </>
  );
}
