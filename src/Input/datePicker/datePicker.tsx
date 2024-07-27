import { useRef, useState } from "react";
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

  return (
    <div className="flex flex-col gap-spacing-02 w-[332px]">
      <div className={`pl-4 ${stateStyle[state]["labelColor"]}`}>label</div>
      <div className="border-2 rounded-radius-04 flex items-center gap-spacing-02 bg-white cursor-pointer relative">
        <input
          type="text"
          placeholder="yyyy - mm - dd"
          className="w-full text-text-primary outline-none p-spacing-04 rounded-l-radius-04 cursor-pointer"
          value={selectedDate}
          onClick={() => setShowPanel(!showPanel)}
        />
        {state === "error" && (
          <ErrorIcon
            width={26}
            height={26}
            className={stateStyle[state]["iconColor"]}
          />
        )}
        {state === "warning" && (
          <WarnIcon
            width={26}
            height={26}
            className={stateStyle[state]["iconColor"]}
          />
        )}
        {!(state === "error" || state === "warning") && (
          <div className="p-spacing-04">
            <CalendarIcon
              width={26}
              height={26}
              className={stateStyle[state]["iconColor"]}
            />
          </div>
        )}
        {showPanel && (
          <DatePanel
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            setShowPanel={setShowPanel}
          />
        )}
      </div>
      <div className={`pl-4 ${stateStyle[state]["descriptionColor"]}`}>
        Helper text
      </div>
      {/* <CustomDatePicker /> */}
    </div>
  );
}
