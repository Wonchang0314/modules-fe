import { ChangeEvent, useEffect, useRef, useState } from "react";
import dayjs from "dayjs";
import { InputStateType } from "../textfield/textfield";
dayjs.locale("ko-kr");
import ErrorIcon from "../../icon/svg/status/warning-circle-filled.svg";
import WarnIcon from "../../icon/svg/status/warning-triangle-filled.svg";
import CalendarIcon from "../../icon/svg/time/calendar.svg";
import DatePanel from "./datePanel";
import { f } from "@storybook/theming/dist/create-e8afafc2";

type CustomDatePickerProps = {
  state: InputStateType;
};

const stateStyle = {
  active: {
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

export default function DatePicker({ state }: CustomDatePickerProps) {
  const [showPanel, setShowPanel] = useState<boolean>(true);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [borderStyle, setBorderStyle] = useState<string>("");
  const [dividerStyle, setDividerStyle] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) =>
    setIsFocused(true);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
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

  const onClickInput = () => {
    if (!(state === "disabled" || state === "readOnly")) {
      setShowPanel(!showPanel);
      setIsFocused(!isFocused);
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
      case "active":
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

  useEffect(() => {
    console.log(isFocused);
  }, [isFocused]);

  return (
    <div className="flex flex-col justify-center gap-spacing-02 w-[332px]">
      <div className={`pl-4 ${stateStyle[state]["labelColor"]}`}>label</div>
      <div
        className={`bg-white cursor-pointer rounded-radius-04 w-full ${borderStyle}`}
      >
        <div
          className={`
            w-full flex item-center justify-between gap-spacing-04 
            ${showPanel && dividerStyle} 
            ${showPanel ? "rounded-t-radius-04" : "rounded-radius-04"}
            ${!(state === "disabled" || state === "readOnly") && "hover:bg-background-hover"}
          `}
        >
          <input
            ref={inputRef}
            type="text"
            placeholder="yyyy - mm - dd"
            value={selectedDate}
            onChange={onChangeInput}
            onFocus={handleFocus}
            onBlur={handleBlur}
            readOnly={state === "readOnly"}
            disabled={state === "disabled"}
            onClick={onClickInput}
            className={`
              w-full outline-none p-spacing-04 rounded-l-radius-04 cursor-pointer bg-transparent
              ${stateStyle[state]["inputColor"]}
            `}
          />
          {state === "error" && (
            <div
              className="p-spacing-04"
              onClick={() => setShowPanel(!showPanel)}
            >
              <ErrorIcon
                width={26}
                height={26}
                className={stateStyle[state]["iconColor"]}
              />
            </div>
          )}
          {state === "warning" && (
            <div
              className="p-spacing-04"
              onClick={() => setShowPanel(!showPanel)}
            >
              <WarnIcon
                width={26}
                height={26}
                className={stateStyle[state]["iconColor"]}
              />
            </div>
          )}
          {!(state === "error" || state === "warning") && (
            <div
              className="p-spacing-04"
              onClick={() => setShowPanel(!showPanel)}
            >
              <CalendarIcon
                width={26}
                height={26}
                className={stateStyle[state]["iconColor"]}
              />
            </div>
          )}
        </div>
        {showPanel && (
          <div ref={panelRef} onMouseDown={handlePanelMouseDown}>
            <DatePanel
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              setShowPanel={setShowPanel}
            />
          </div>
        )}
      </div>
      <div className={`pl-4 ${stateStyle[state]["descriptionColor"]}`}>
        Helper text
      </div>
    </div>
  );
}
