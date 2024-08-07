import { useState, useEffect } from "react";
import Icon from "src/icon/Icon";
import { FlexBox } from "src/layout";

//motion 적용 안함

export interface RadioProps {
  title: string;
  size: "L" | "M";
  state: "Enabled" | "Disabled" | "Readonly" | "Error" | "Warning";
  label?: string;
  alert?: string;
  checked?: boolean;
  onChange?: () => void;
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
  Enabled: isChecked ? "fill-support-info" : "fill-icon-primary",
  Disabled: "fill-icon-disabled",
  Readonly: "fill-icon-disabled",
  Warning: "fill-support-warning",
  Error: "fill-icon-error",
});

export default function Radio({
  title,
  size,
  state,
  label,
  alert,
  checked = false,
  onChange,
}: RadioProps) {
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleToggle = () => {
    if (state !== "Disabled" && state !== "Readonly") {
      if (onChange) {
        onChange();
      }
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
          {label}
        </span>
      )}
      <button onClick={handleToggle}>
        <div className="flex flex-row gap-spacing-02">
          <input
            type="radio"
            name="radio"
            checked={isChecked}
            onChange={handleToggle}
            hidden
          />
          {isChecked ? (
            <Icon
              icon={"radio_circle_filled"}
              size={sizeStyle.iconSize}
              className={`${stateStyle}`}
            />
          ) : (
            <Icon
              icon={"radio_circle_outlined"}
              size={sizeStyle.iconSize}
              className={`${stateStyle}`}
            />
          )}
          <span className={`flex pt-1 ${sizeStyle.titleDetail} ${titleColor}`}>
            {title}
          </span>
        </div>
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
          {alert}
        </FlexBox>
      )}
    </FlexBox>
  );
}
