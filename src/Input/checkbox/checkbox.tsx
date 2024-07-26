import { useState } from "react";
import Icon from "src/icon/Icon";
import { FlexBox } from "src/layout";

//motion 적용 안함

export interface CheckboxProps {
  title: string;
  size: "L" | "M";
  state: "Enabled" | "Disabled" | "Readonly" | "Error" | "Warning";
  label: boolean;
  labelText?: string;
  alert: boolean;
  alertText?: string;
}

const sizeStyles = {
  L: {
    iconSize: 24,
    labelDetail: "label-02-regular",
    titleDetail: "label-03-regular",
    alertSize: 20,
    alertDetail: "helpertext-02-regular",
    alertgap: "gap-spacing-02",
  },
  M: {
    iconSize: 20,
    labelDetail: "label-01-regular",
    titleDetail: "label-02-regular",
    alertSize: 16,
    alertDetail: "helpertext-01-regular",
    alertgap: "gap-spacing-01",
  },
};

const stateStyles = (isChecked: boolean) => ({
  Enabled: isChecked ? "support-info" : "icon-primary",
  Disabled: "fill-icon-disabled",
  Readonly: "fill-icon-disabled",
  Warning: "fill-support-warning",
  Error: "fill-icon-error",
});

export default function Checkbox({
  title,
  size,
  state,
  label,
  labelText,
  alert,
  alertText,
}: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    if (state !== "Disabled" && state !== "Readonly") {
      setIsChecked(!isChecked);
    }
  };

  const sizeStyle = sizeStyles[size];
  const stateStyle = stateStyles(isChecked)[state];

  const labelColor =
    state === "Disabled" ? "text-text-disabled" : "text-text-secondary";

  const titleColor =
    state === "Disabled" ? "text-text-disabled" : "text-text-primary";

  return (
    <FlexBox direction="col" className="gap-spacing-02 items-start">
      {label && (
        <span className={`${labelColor} ${sizeStyle.labelDetail}`}>
          {labelText}
        </span>
      )}
      <button onClick={handleToggle}>
        <FlexBox direction="row" className="gap-spacing-02">
          {isChecked ? (
            <Icon
              icon={"checkmark_square_filled"}
              size={sizeStyle.iconSize}
              className={`${stateStyle}`}
            />
          ) : (
            <Icon
              icon={"square"}
              size={sizeStyle.iconSize}
              className={`${stateStyle}`}
            />
          )}
          <span className={`flex pt-1 ${sizeStyle.titleDetail} ${titleColor}`}>
            {title}
          </span>
        </FlexBox>
      </button>
      {alert && (state === "Error" || state === "Warning") && (
        <FlexBox
          direction="row"
          className={`${sizeStyle.alertgap} ${
            sizeStyle.alertDetail
          } ${stateStyle} ${
            state === "Error" ? "text-text-error" : "text-support-warning"
          }`}
        >
          <Icon
            icon={
              state === "Error"
                ? "warning_circle_filled"
                : state === "Warning"
                ? "warning_triangle_filled"
                : "eye_slash"
            }
            size={sizeStyle.alertSize}
            className={`${stateStyle}`}
          />
          {alertText}
        </FlexBox>
      )}
    </FlexBox>
  );
}
