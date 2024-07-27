interface DayCellProps {
  date?: number;
  selected?: boolean;
  state: "today" | "thisMonth" | "otherMonth" | "no";
}

export default function DayCell({ date, selected, state }: DayCellProps) {
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
    no: {
      fontColor: "text-transparent",
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
