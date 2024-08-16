import MinusIcon from "../../icon/svg/navigation/subtract.svg";
import PlusIcon from "../../icon/svg/navigation/add.svg";
import TrashIcon from "../../icon/svg/operation/delete.svg";
import { Suspense, useEffect, useState } from "react";
import WarnIcon from "../../icon/svg/status/warning-triangle-filled.svg";
import NumberStepperSkeleton from "./numberStepperSkeleton";
import { InputStateType } from "src/Input/type";

type NumberStepperProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  width: "short" | "long";
  size: "S" | "M";
  state?: InputStateType;
  description?: string;
  descriptionAlign: "left" | "right";
  onClickTrashIcon?: () => void;
  onClickMinusIcon?: () => void;
  onClickPlusIcon?: () => void;
};

const widthStyle = {
  short: {
    S: "w-[90px]",
    M: "w-[95px]",
  },
  long: {
    S: "w-full",
    M: "w-full",
  },
};

const sizeStyle = {
  S: {
    padding: "p-1.5",
  },
  M: {
    padding: "p-spacing-02",
  },
};

const stateStyle = {
  enable: {
    border: "border-border-subtle-01",
    textColor: "text-text-primary",
    iconColor: "fill-icon-primary",
  },
  warning: {
    border: "border-support-warning",
    textColor: "text-text-primary",
    iconColor: "fill-icon-primary",
  },
  error: {
    border: "border-border-error",
    textColor: "text-text-error",
    iconColor: "fill-icon-error",
  },
  disabled: {
    border: "border-border-disabled",
    textColor: "text-text-disabled",
    iconColor: "fill-icon-disabled",
  },
  readOnly: {
    border: "border-border-subtle-01",
    textColor: "text-text-secondary",
    iconColor: "fill-icon-disabled",
  },
};

export default function NumberStepper({
  count,
  setCount,
  width,
  size,
  state = "enable",
  description,
  descriptionAlign = "left",
  onClickTrashIcon,
  onClickMinusIcon,
  onClickPlusIcon,
}: NumberStepperProps) {
  const onClickLeftIcon = () => {
    if (count === 1) {
      if (width === "short") onClickTrashIcon && onClickTrashIcon();
    } else if (state === "readOnly" || state === "disabled") return;
    else {
      setCount(count - 1);
      onClickMinusIcon && onClickMinusIcon();
    }
  };

  const onClickRightIcon = () => {
    if (state === "readOnly" || state === "disabled") return;
    onClickPlusIcon && onClickPlusIcon();
    setCount(count + 1);
  };

  return (
    <Suspense fallback={<NumberStepperSkeleton size={size} width={width} />}>
      <div
        className={`
        flex flex-col gap-spacing-02 w-full 
        ${descriptionAlign === "right" ? "items-end" : "items-start"}
      `}
      >
        <div
          className={`
          bg-white rounded-radius-03 flex items-center justify-between gap-spacing-02 border 
          ${widthStyle[width][size]}
          ${sizeStyle[size]["padding"]} 
          ${stateStyle[state]["border"]}
        `}
        >
          <div className="flex gap-spacing-02 items-center">
            <div onClick={onClickLeftIcon}>
              {width === "short" && count === 1 ? (
                <TrashIcon
                  width={20}
                  height={20}
                  className={stateStyle[state]["iconColor"]}
                />
              ) : (
                <MinusIcon
                  width={20}
                  height={20}
                  className={stateStyle[state]["iconColor"]}
                />
              )}
            </div>
            {width === "long" && (
              <div className="w-[1px] h-4 bg-border-subtle-01 mr-spacing-02" />
            )}
          </div>
          <div
            className={`min-w-6 text-center text-label-02-regular text-primary ${stateStyle[state]["textColor"]}`}
          >
            {count}
          </div>
          <div className="flex gap-spacing-02 items-center">
            {width === "long" && (
              <div className="w-[1px] h-4 bg-border-subtle-01 mr-spacing-02" />
            )}
            <div onClick={onClickRightIcon}>
              <PlusIcon
                width={20}
                height={20}
                className={stateStyle[state]["iconColor"]}
              />
            </div>
          </div>
        </div>
        <>
          {state === "error" && (
            <div
              className={`
            w-full flex gap-spacing-02 items-center
            ${descriptionAlign === "right" && "flex-row-reverse"} 
          `}
            >
              <WarnIcon width={20} height={20} className="fill-support-error" />
              <div
                className={`
              text-helpertext-02-regular text-text-error 
              ${descriptionAlign === "right" ? "text-end" : "text-start"}
            `}
              >
                {description}
              </div>
            </div>
          )}
          {state === "warning" && (
            <div
              className={`
            w-full flex gap-spacing-02 items-center
            ${descriptionAlign === "right" && "flex-row-reverse"} 
          `}
            >
              <WarnIcon
                width={20}
                height={20}
                className="fill-support-warning"
              />
              <div
                className={`
              text-helpertext-02-regular text-support-warning 
              ${descriptionAlign === "right" ? "text-end" : "text-start"}
            `}
              >
                {description}
              </div>
            </div>
          )}
        </>
      </div>
    </Suspense>
  );
}
