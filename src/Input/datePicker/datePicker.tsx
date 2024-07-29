import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Button, ConfigProvider, DatePicker as CustomDatePicker } from "antd";
import locale from "antd/locale/ko_KR";
import dayjs from "dayjs";
import { InputStateType } from "../textfield/textfield";
dayjs.locale("ko-kr");
import ErrorIcon from "../../icon/svg/status/warning-circle-filled.svg";
import WarnIcon from "../../icon/svg/status/warning-triangle-filled.svg";
import CalendarIcon from "../../icon/svg/time/calendar.svg";
import DatePanel from "./datePanel";

type CustomDatePickerProps = {
  state: InputStateType;
};

const stateStyle = {
  active: {
    labelColor: "text-text-secondary",
    descriptionColor: "text-text-helper",
    iconName: "CalendarIcon",
    iconColor: "fill-icon-secondary",
  },
  warning: {
    labelColor: "text-text-secondary",
    descriptionColor: "text-text-primary",
    iconName: "WarnIcon",
    iconColor: "fill-support-warning",
  },
  error: {
    labelColor: "text-text-secondary",
    descriptionColor: "text-text-error",
    iconName: "ErrorIcon",
    iconColor: "fill-support-error",
  },
  disabled: {
    labelColor: "text-text-disabled",
    descriptionColor: "text-text-disabled",
    iconName: "CalendarIcon",
    iconColor: "fill-icon-disabled",
  },
  readOnly: {
    labelColor: "text-text-secondary",
    descriptionColor: "text-text-helper",
    iconName: "CalendarIcon",
    iconColor: "fill-icon-secondary",
  },
};

export default function DatePicker({ state }: CustomDatePickerProps) {
  const [showPanel, setShowPanel] = useState<boolean>(true);
  const [selectedDate, setSelectedDate] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (
      panelRef.current &&
      !panelRef.current.contains(document.activeElement)
    ) {
      setShowPanel(false);
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
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col gap-spacing-02 w-[332px]">
      <div className={`pl-4 ${stateStyle[state]["labelColor"]}`}>label</div>
      <div
        className={`border-2 flex items-center justify-between bg-white cursor-pointer relative ${showPanel ? "rounded-t-radius-04" : "rounded-radius-04"}`}
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="yyyy - mm - dd"
          className="w-full text-text-primary outline-none p-spacing-04 rounded-l-radius-04 cursor-pointer mr-spacing-04"
          value={selectedDate}
          onChange={onChangeInput}
          onBlur={handleBlur}
          onClick={() => setShowPanel(!showPanel)}
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
      {/* <CustomDatePicker /> */}
    </div>
  );
}
