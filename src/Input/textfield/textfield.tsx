import { ChangeEvent, Suspense, useEffect, useState } from "react";
import ErrorIcon from "../../icon/svg/status/warning-circle-filled.svg";
import WarnIcon from "../../icon/svg/status/warning-triangle-filled.svg";
import TextFieldSkeleton from "./textfieldSkeleton";

export type InputStateType =
  | "active"
  | "warning"
  | "error"
  | "disabled"
  | "readOnly";

type TextFieldProps = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  size: "S" | "M" | "L";
  style: "outlined" | "underlined";
  state?: InputStateType;
  label?: string;
  /**
   * false일 때도 항상 글씨 크기만큼 공간 차지
   */
  description?: string;
  placeholder?: string;
};

const lineStyle = {
  outlined: {
    inputPX: "px-spacing-04",
  },
  underlined: {
    inputPX: "pr-spacing-04",
  },
};

const sizeStyle = {
  S: {
    label: "helpertext-01-regular",
    inputPY: "py-[11px]",
    inputFont: "label-02-medium",
    iconSize: 16,
    description: "helpertext-01-regular",
  },
  M: {
    label: "helpertext-02-regular",
    inputPY: "py-[13px]",
    inputFont: "label-03-medium",
    iconSize: 16,
    description: "helpertext-01-regular",
  },
  L: {
    label: "helpertext-02-regular",
    inputPY: "py-[15px]",
    inputFont: "label-04-medium",
    iconSize: 24,
    description: "helpertext-02-regular",
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

export default function TextField({
  value,
  onChange,
  size,
  style = "outlined",
  state = "active",
  label,
  description,
  placeholder,
}: TextFieldProps) {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [inputBorder, setInputBorder] = useState<string>("");

  const handleBorderStyle = () => {
    if (style === "outlined") {
      let radiusStyle;
      radiusStyle = size === "S" ? " rounded-radius-03" : " rounded-radius-04";
      switch (state) {
        case "disabled":
          setInputBorder("border border-border-strong-01" + radiusStyle);
          break;
        case "readOnly":
          setInputBorder("border border-border-tile-01" + radiusStyle);
          break;
        case "error":
          setInputBorder("border-2 border-border-error" + radiusStyle);
          break;
        case "warning":
          setInputBorder("border-2 border-border-strong-01" + radiusStyle);
          break;
        default:
          if (isFocused)
            setInputBorder("border border-strong-01" + radiusStyle);
          else setInputBorder("border border-border-subtle-01" + radiusStyle);
          break;
      }
    } else {
      switch (state) {
        case "disabled":
          setInputBorder("border-b border-b-border-strong-01");
          break;
        case "readOnly":
          setInputBorder("border-b border-b-border-tile-01");
          break;
        case "error":
          setInputBorder("border-b-2 border-b-border-error");
          break;
        case "warning":
          setInputBorder("border-b-2 border-b-border-strong-01");
          break;
        default:
          if (isFocused) setInputBorder("border-b border-b-border-strong-01");
          else setInputBorder("border-b border-b-border-subtle-01");
          break;
      }
    }
  };

  useEffect(() => {
    handleBorderStyle();
  }, [isFocused, style, state, size]);

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  return (
    <Suspense
      fallback={
        <TextFieldSkeleton
          size={size}
          style={style}
          label={label ? true : false}
        />
      }
    >
      <div className="flex flex-col gap-spacing-01 w-full">
        <div
          className={`
            ${style === "outlined" && "pl-spacing-04"}
            ${sizeStyle[size]["label"]} 
            ${stateStyle[state]["labelColor"]} 
            ${!label && "hidden"}  
          `}
        >
          {label}
        </div>
        <div
          className={`
            w-full flex gap-spacing-04 bg-white
            ${inputBorder}
            ${lineStyle[style]["inputPX"]}
            ${sizeStyle[size]["inputPY"]} 
          `}
        >
          <input
            value={value}
            onChange={onChangeText}
            type="text"
            readOnly={state === "readOnly"}
            spellCheck={false}
            placeholder={placeholder}
            disabled={state === "disabled"}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`
              w-full outline-none
              placeholder:text-text-placeholder disabled:placeholder:text-text-disabled
              disabled:bg-white disabled:text-text-disabled
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
            ${style === "outlined" && "pl-spacing-04"}
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
