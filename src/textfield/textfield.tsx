import { ChangeEvent, Suspense, useEffect, useState } from "react";
import ErrorIcon from "../icon/svg/status/warning-circle-filled.svg";
import WarnIcon from "../icon/svg/status/warning-triangle-filled.svg";
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
  label: boolean;
  labelText?: string;
  /**
   * false일 때도 항상 글씨 크기만큼 공간 차지
   */
  description: boolean;
  descriptionText?: string;
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
    label: "text-helpertext-01-regular",
    inputPY: "py-[11px]",
    inputFont: "text-label-02-medium",
    iconSize: 16,
    description: "text-helpertext-01-regular",
  },
  M: {
    label: "text-helpertext-02-regular",
    inputPY: "py-[13px]",
    inputFont: "text-label-03-medium",
    iconSize: 16,
    description: "text-helpertext-01-regular",
  },
  L: {
    label: "text-helpertext-02-regular",
    inputPY: "py-[15px]",
    inputFont: "text-label-04-medium",
    iconSize: 24,
    description: "text-helpertext-02-regular",
  },
};

const stateStyle = {
  active: {
    labelColor: "text-[#6F6F6F]",
    descriptionColor: "text-[#6F6F6F]",
    // labelColor: "text-secondary",
    // descriptionColor: "text-helper",
  },
  warning: {
    labelColor: "text-[#6F6F6F]",
    descriptionColor: "text-[#161616]",
    iconColor: "#F1C21B",
    // labelColor: "text-secondary",
    // descriptionColor: "text-primary",
  },
  error: {
    labelColor: "text-[#6F6F6F]",
    descriptionColor: "text-[#DA1E28]",
    iconColor: "#DA1E28",
    // labelColor: "text-secondary",
    // descriptionColor: "text-error",
  },
  disabled: {
    labelColor: "text-[#161616]/25",
    descriptionColor: "text-[#161616]/25",
    // labelColor: "text-disabled",
    // descriptionColor: "text-disabled",
  },
  readOnly: {
    labelColor: "text-[#6F6F6F]",
    descriptionColor: "text-[#6F6F6F]",
    // labelColor: "text-secondary",
    // descriptionColor: "text-helper",
  },
};

export default function TextField({
  value,
  onChange,
  size,
  style = "outlined",
  state = "active",
  label,
  labelText,
  description,
  descriptionText,
  placeholder,
}: TextFieldProps) {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [inputBorder, setInputBorder] = useState<string>("");

  const handleBorderStyle = () => {
    if (style === "outlined") {
      switch (state) {
        case "disabled":
          setInputBorder("border border-[#8D8D8D] rounded-radius-04");
          // border border-strong-01 rounded-radius-04,
          break;
        case "readOnly":
          setInputBorder("border border-[#E0E0E0] rounded-radius-04");
          // border border-tile-01 rounded-radius-04,
          break;
        case "error":
          setInputBorder("border-2 border-[#DA1E28] rounded-radius-04");
          // border-2 border-error rounded-radius-04,
          break;
        case "warning":
          setInputBorder("border-2 border-[#8D8D8D] rounded-radius-04");
          // border-2 border-strong-01 rounded-radius-04,
          break;
        default:
          if (isFocused)
            setInputBorder("border-2 border-[#131313] rounded-radius-04");
          else setInputBorder("border border-[#C6C6C6] rounded-radius-04");
          // border border-focus-default rounded-radius-04,
          // border border-subtle-01 rounded-radius-04,
          break;
      }
    } else {
      switch (state) {
        case "disabled":
          setInputBorder("border-b border-b-[#8D8D8D]");
          // border-b border-b-strong-01,
          break;
        case "readOnly":
          setInputBorder("border-b border-b-[#E0E0E0]");
          // border-b border-b-tile-01,
          break;
        case "error":
          setInputBorder("border-b-2 border-b-[#DA1E28]");
          // border-b-2 border-b-error,
          break;
        case "warning":
          setInputBorder("border-b-2 border-b-[#8D8D8D]");
          // border-b-2 border-b-strong-01,
          break;
        default:
          if (isFocused) setInputBorder("border-b-2 border-b-[#131313]");
          else setInputBorder("border-b border-b-[#C6C6C6]");
          // border border-focus-default,
          // border-b border-b-subtle-01,
          break;
      }
    }
  };

  useEffect(() => {
    handleBorderStyle();
  }, [isFocused, style]);

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  return (
    <Suspense
      fallback={<TextFieldSkeleton size={size} style={style} label={label} />}
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
          {labelText}
        </div>
        <div
          className={`
            w-full flex gap-spacing-04 bg-[#fff] 
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
            placeholder={placeholder}
            disabled={state === "disabled"}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`
              w-full outline-none
              placeholder:text-[#A8A8A8] disabled:placeholder:text-[#161616]/25
              disabled:bg-[#fff] disabled:text-[#161616]/25
              text-[#161616]
              ${sizeStyle[size]["inputFont"]}
            `}
          />
          {state === "error" && (
            <ErrorIcon
              width={sizeStyle[size]["iconSize"]}
              height={sizeStyle[size]["iconSize"]}
              color={stateStyle[state]["iconColor"]}
            />
          )}
          {state === "warning" && (
            <WarnIcon
              width={sizeStyle[size]["iconSize"]}
              height={sizeStyle[size]["iconSize"]}
              color={stateStyle[state]["iconColor"]}
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
          {descriptionText}
        </div>
      </div>
    </Suspense>
  );
}
