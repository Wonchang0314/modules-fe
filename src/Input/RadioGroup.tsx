import { useState } from "react";
import Radio, { RadioProps } from "./Radio";
import { InputStateType } from "src/Input/type";

export interface RadioGroupProps
  extends Omit<RadioProps, "title" | "checked" | "onChange"> {
  titles: string[];
  size: "L" | "M";
  state: InputStateType;
  direction?: "row" | "col";
}

export default function RadioGroup({
  titles,
  size,
  state,
  label,
  alert,
  direction = "col",
}: RadioGroupProps) {
  const [selectedRadio, setSelectedRadio] = useState<number>(-1);

  const handleGroupToggle = (index: number) => {
    setSelectedRadio(index);
  };

  return (
    <div
      className={`flex ${
        direction === "col"
          ? "flex-col gap-spacing-02"
          : direction === "row" &&
              label &&
              alert &&
              (state === "error" || state === "warning")
            ? "flex-row gap-spacing-04 items-center"
            : direction === "row" && label
              ? "flex-row gap-spacing-04 items-end"
              : direction === "row" && alert
                ? "flex-row gap-spacing-04 items-start"
                : "flex-row gap-spacing-04"
      }`}
    >
      {titles.map((title, index) => (
        <Radio
          checked={selectedRadio === index}
          onChange={() => handleGroupToggle(index)}
          key={index}
          title={title}
          size={size}
          state={state}
          label={label && index === 0 ? label : undefined}
          alert={
            (alert && direction === "col" && index === titles.length - 1) ||
            (alert && direction === "row" && index === 0)
              ? alert
              : undefined
          }
        />
      ))}
    </div>
  );
}
