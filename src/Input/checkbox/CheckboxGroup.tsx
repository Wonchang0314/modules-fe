import { InputStateType } from "src/utils/type";
import Checkbox, { CheckboxProps } from "./Checkbox";

export interface CheckboxGroupProps extends Omit<CheckboxProps, "title"> {
  titles: string[];
  size: "L" | "M";
  state: InputStateType;
  direction?: "row" | "col";
}

export default function CheckboxGroup({
  titles,
  size,
  state,
  label,
  alert,
  direction = "col",
}: CheckboxGroupProps) {
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
        <Checkbox
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
