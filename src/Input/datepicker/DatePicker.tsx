import {
  ChangeEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import ErrorIcon from "../../icon/svg/status/warning-circle-filled.svg";
import WarnIcon from "../../icon/svg/status/warning-triangle-filled.svg";
import CalendarIcon from "../../icon/svg/time/calendar.svg";
import DatePanel from "./DatePanel";
import { InputStateType } from "src/utils/type";

type CustomDatePickerProps = {
  state: InputStateType;
  label?: string;
  description?: string;
  value: string;
  setValue: React.Dispatch<SetStateAction<string>>;
};

const stateStyle = {
  enable: {
    labelColor: "text-text-secondary",
    inputColor: "text-text-primary",
    descriptionColor: "text-text-secondary",
    iconColor: "fill-icon-secondary",
  },
  warning: {
    labelColor: "text-text-secondary",
    inputColor: "text-text-primary",
    descriptionColor: "text-text-primary",
    iconColor: "fill-support-warning",
  },
  error: {
    labelColor: "text-text-secondary",
    inputColor: "text-text-primary",
    descriptionColor: "text-text-error",
    iconColor: "fill-support-error",
  },
  disabled: {
    labelColor: "text-text-disabled",
    inputColor: "text-text-disabled",
    descriptionColor: "text-text-disabled",
    iconColor: "fill-icon-disabled",
  },
  readOnly: {
    labelColor: "text-text-secondary",
    inputColor: "text-text-secondary",
    descriptionColor: "text-text-secondary",
    iconColor: "fill-icon-secondary",
  },
};

export default function DatePicker({
  state = "enable",
  label,
  description,
  value,
  setValue,
}: CustomDatePickerProps) {
  const [showPanel, setShowPanel] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [borderStyle, setBorderStyle] = useState<string>("");
  const [dividerStyle, setDividerStyle] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!showPanel) setIsFocused(false);

    if (
      panelRef.current &&
      !panelRef.current.contains(document.activeElement)
    ) {
      setShowPanel(false);
      setIsFocused(true);
    }
  };

  const handlePanelMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      panelRef.current &&
      !panelRef.current.contains(event.target as Node) &&
      inputRef.current &&
      !inputRef.current.contains(event.target as Node)
    ) {
      setShowPanel(false);
      setIsFocused(false);
    }
  };

  const onClickIcon = () => {
    if (!(state === "disabled" || state === "readOnly")) {
      setIsFocused(true);
      setShowPanel(!showPanel);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const returnBorderColor = () => {
    switch (state) {
      case "enable":
        if (isFocused) {
          setDividerStyle("border-b-[3px] border-b-focus-default");
          setBorderStyle("border-[3px] border-focus-default");
        } else {
          setDividerStyle("border-b-2 border-b-border-subtle-01");
          setBorderStyle("border-2 border-border-subtle-01");
        }
        break;
      case "warning":
        setDividerStyle("border-b-2 border-b-border-strong-01");
        setBorderStyle("border-2 border-border-strong-01");
        break;
      case "error":
        setDividerStyle("border-b-2 border-b-border-error");
        setBorderStyle("border-2 border-border-error");
        break;
      case "disabled":
        setDividerStyle("border-b-2 border-b-border-disabled");
        setBorderStyle("border-2 border-border-disabled");
        break;
      case "readOnly":
        setDividerStyle("border-b-2 border-b-subtle-01");
        setBorderStyle("border-2 border-subtle-01");
        break;
    }
  };

  useEffect(() => {
    returnBorderColor();
  }, [state, isFocused]);

  return (
    <div className="flex flex-col justify-center gap-spacing-02 w-[332px]">
      <div
        className={`pl-4 label-03-regular ${stateStyle[state]["labelColor"]}`}
      >
        {label}
      </div>
      <div
        className={`
          bg-white cursor-pointer rounded-radius-04 w-full relative 
          ${showPanel ? "rounded-t-radius-04" : "rounded-radius-04"}`}
      >
        <div
          className={`absolute inset-0 pointer-events-none
          ${borderStyle} 
          ${showPanel ? "rounded-t-radius-04" : "rounded-radius-04"}`}
        />
        <div
          className={`
            w-full flex item-center justify-between
            ${!(state === "disabled" || state === "readOnly") && "hover:bg-background-hover"}
          `}
        >
          <input
            ref={inputRef}
            type="text"
            placeholder="yyyy - mm - dd"
            value={value}
            onChange={onChangeInput}
            onFocus={handleFocus}
            onBlur={handleBlur}
            readOnly={state === "readOnly"}
            disabled={state === "disabled"}
            className={`
              w-full outline-none p-spacing-04 rounded-l-radius-04 cursor-pointer bg-transparent labe-04-medium
              ${stateStyle[state]["inputColor"]}
            `}
          />
          {state === "error" && (
            <div className="p-spacing-04" onClick={onClickIcon}>
              <ErrorIcon
                width={26}
                height={26}
                className={stateStyle[state]["iconColor"]}
              />
            </div>
          )}
          {state === "warning" && (
            <div className="p-spacing-04" onClick={onClickIcon}>
              <WarnIcon
                width={26}
                height={26}
                className={stateStyle[state]["iconColor"]}
              />
            </div>
          )}
          {!(state === "error" || state === "warning") && (
            <div className="p-spacing-04" onClick={onClickIcon}>
              <CalendarIcon
                width={26}
                height={26}
                className={stateStyle[state]["iconColor"]}
              />
            </div>
          )}
        </div>
        {showPanel && (
          <div
            ref={panelRef}
            onMouseDown={handlePanelMouseDown}
            className="absolute bottom-0 translate-y-full"
          >
            <DatePanel
              state={state}
              selectedDate={value}
              setSelectedDate={setValue}
              setShowPanel={setShowPanel}
            />
          </div>
        )}
      </div>
      <div
        className={`pl-4 label-03-regular ${stateStyle[state]["descriptionColor"]}`}
      >
        {description}
      </div>
    </div>
  );
}
