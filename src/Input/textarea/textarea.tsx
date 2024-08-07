import { ChangeEvent, Suspense, useEffect, useState } from "react";
import ErrorIcon from "../../icon/svg/status/warning-circle-filled.svg";
import WarnIcon from "../../icon/svg/status/warning-triangle-filled.svg";
import TextAreaSkeleton from "./textareaSkeleton";
import { InputStateType } from "../textfield/textfield";

type TextFieldProps = {
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  size: "S" | "M" | "L";
  state?: InputStateType;
  label?: string;
  /**
   * false일 때도 항상 글씨 크기만큼 공간 차지
   */
  description?: string;
  placeholder?: string;
};

const sizeStyle = {
  S: {
    label: "text-helpertext-01-regular",
    inputPY: "py-[7px]",
    inputFont: "text-body-02-regular",
    iconSize: 16,
    description: "text-helpertext-01-regular",
  },
  M: {
    label: "text-helpertext-02-regular",
    inputPY: "py-[13px]",
    inputFont: "text-label-03-medium",
    iconSize: 20,
    description: "text-helpertext-02-regular",
  },
  L: {
    label: "text-helpertext-02-regular",
    inputPY: "py-[17px]",
    inputFont: "text-label-04-medium",
    iconSize: 24,
    description: "text-helpertext-02-regular",
  },
};

const stateStyle = {
  active: {
    labelColor: "text-text-secondary",
    descriptionColor: "text-text-helper",
  },
  warning: {
    labelColor: "text-text-secondary",
    descriptionColor: "text-text-primary",
    iconColor: "fill-support-warning",
  },
  error: {
    labelColor: "text-text-secondary",
    descriptionColor: "text-text-error",
    iconColor: "fill-support-error",
  },
  disabled: {
    labelColor: "text-text-disabled",
    descriptionColor: "text-text-disabled",
  },
  readOnly: {
    labelColor: "text-text-secondary",
    descriptionColor: "text-text-helper",
  },
};

export default function TextArea({
  value,
  onChange,
  size,
  state = "active",
  label,
  description,
  placeholder,
}: TextFieldProps) {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [inputBorder, setInputBorder] = useState<string>("");

  const handleBorderStyle = () => {
    switch (state) {
      case "disabled":
        setInputBorder("border border-border-strong-01");
        break;
      case "readOnly":
        setInputBorder("border border-border-tile-01");
        break;
      case "error":
        setInputBorder("border-2 border-border-error");
        break;
      case "warning":
        setInputBorder("border-2 border-border-strong-01");
        break;
      default:
        if (isFocused) setInputBorder("border border-border-strong-01");
        else setInputBorder("border border-border-subtle-01");
        break;
    }
  };

  useEffect(() => {
    handleBorderStyle();
  }, [isFocused, state]);

  const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e);
  };

  return (
    <Suspense
      fallback={<TextAreaSkeleton size={size} label={label ? true : false} />}
    >
      <div className="flex flex-col gap-spacing-01 w-full">
        <div
          className={`
            pl-spacing-04
            ${sizeStyle[size]["label"]} 
            ${stateStyle[state]["labelColor"]} 
            ${!label && "hidden"}  
          `}
        >
          {label}
        </div>
        <div
          className={`
            w-full flex gap-spacing-04 bg-white px-spacing-04 rounded-radius-04
            ${inputBorder}
            ${sizeStyle[size]["inputPY"]} 
          `}
        >
          <textarea
            value={value}
            onChange={onChangeText}
            readOnly={state === "readOnly"}
            placeholder={placeholder}
            spellCheck={false}
            disabled={state === "disabled"}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`
              w-full outline-none resize-none
              placeholder:text-text-placeholder disabled:placeholder:text-text-disabled
              disabled:bg-white disabled:text-text-diasbled
              read-only:placeholder:text-text-secondary
              text-text-primary
              ${sizeStyle[size]["inputFont"]}
            `}
          />
          {state === "error" && (
            <ErrorIcon
              width={sizeStyle[size]["iconSize"]}
              height={sizeStyle[size]["iconSize"]}
              className={stateStyle[state]["iconColor"]}
            />
          )}
          {state === "warning" && (
            <WarnIcon
              width={sizeStyle[size]["iconSize"]}
              height={sizeStyle[size]["iconSize"]}
              className={stateStyle[state]["iconColor"]}
            />
          )}
        </div>
        <div
          className={`
            pl-spacing-04
            ${!description && "invisible"} 
            ${sizeStyle[size]["description"]} 
            ${stateStyle[state]["descriptionColor"]}
          `}
        >
          {description}
        </div>
      </div>
    </Suspense>
  );
}
