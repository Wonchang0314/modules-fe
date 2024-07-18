import MinusIcon from "../icon/svg/navigation/subtract.svg";
import PlusIcon from "../icon/svg/navigation/add.svg";
import TrashIcon from "../icon/svg/operation/delete.svg";
import { Suspense, useEffect, useState } from "react";
import ErrorIcon from "../icon/svg/status/warning-circle-filled.svg";
import WarnIcon from "../icon/svg/status/warning-triangle-filled.svg";
import { InputStateType } from "src/textfield/textfield";
import NumberStepperSkeleton from "./numberStepperSkeleton";

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
  active: {
    border: "border-[#C6C6C6]",
    textColor: "text-[#161616]",
    iconColor: "fill-[#262626]",
    // border: 'border-subtle-01'
    // textColor: 'text-primary'
    // iconColor: 'fill-icon-primary'
  },
  warning: {
    border: "border-[#F1C21B]",
    textColor: "text-[#161616]",
    iconColor: "fill-[#262626]",
    // border: 'border-support-warning'
    // textColor: 'text-primary'
    // iconColor: 'fill-icon-primary'
  },
  error: {
    border: "border-[#DA1E28]",
    textColor: "text-[#DA1E28]",
    iconColor: "fill-[#DA1E28]",
    // border: 'border-error'
    // textColor: 'text-error'
    // iconColor: 'fill-icon-error'
  },
  disabled: {
    border: "border-[#C6C6C6]",
    textColor: "text-[#161616]/25",
    iconColor: "fill-[#161616]/25",
    // border: 'border-disabled'
    // textColor: 'text-disabled'
    // iconColor: 'fill-icon-disabled'
  },
  readOnly: {
    border: "border-[#C6C6C6]",
    textColor: "text-[#C6C6C6]",
    iconColor: "fill-[#161616]/25",
    // border: 'border-subtle-01'
    // textColor: 'text-secondary',
    // iconColor: 'fill-icon-disabled'
  },
};

export default function NumberStepper({
  count,
  setCount,
  width,
  size,
  state = "active",
  description,
  descriptionAlign = "left",
  onClickTrashIcon,
  onClickMinusIcon,
  onClickPlusIcon,
}: NumberStepperProps) {
  const onClickLeftIcon = () => {
    if (count === 1) {
      if (width === "short") onClickTrashIcon && onClickTrashIcon();
    } else {
      setCount(count - 1);
      onClickMinusIcon && onClickMinusIcon();
    }
  };

  const onClickRightIcon = () => {
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
          bg-[#fff] w-full rounded-radius-03 flex items-center justify-between gap-spacing-02 border 
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
              <div className="w-[1px] h-4 bg-[#C6C6C6] mr-spacing-02" />
            )}
          </div>
          <div
            className={`min-w-6 text-center text-label-02-regular text-[#161616] ${stateStyle[state]["textColor"]}`}
          >
            {count}
          </div>
          {/* <div className={`min-w-6 text-center text-label-02-regular text-primary ${stateStyle[state]['textColor']}`}>{value}</div> */}
          <div className="flex gap-spacing-02 items-center">
            {width === "long" && (
              <div className="w-[1px] h-4 bg-[#C6C6C6] mr-spacing-02" />
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
              text-helpertext-02-regular text-[#DA1E28] 
              ${descriptionAlign === "right" ? "text-end" : "text-start"}
            `}
              >
                {description}
              </div>
              {/* <div className='text-helpertext-02-regular text-error'>{description}</div> */}
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
              text-helpertext-02-regular text-[#F1C21B] 
              ${descriptionAlign === "right" ? "text-end" : "text-start"}
            `}
              >
                {description}
              </div>
              {/* <div className='text-helpertext-02-regular text-support-warning'>{description}</div> */}
            </div>
          )}
        </>
      </div>
    </Suspense>
  );
}
