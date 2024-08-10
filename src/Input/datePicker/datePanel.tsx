import React, { SetStateAction, useEffect, useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import {
  getCalendarDates,
  getCalendarMonth,
  getCalendarYear,
} from "src/utils/datepicker";
import CalendarCell from "./calendarCell";
import DatePickerHeader from "./datePickerHeader";
import { InputStateType } from "../textfield/textfield";

export type datePickerType = "date" | "month" | "year";

interface DatePanelProps {
  state: InputStateType;
  selectedDate: string;
  setSelectedDate: React.Dispatch<SetStateAction<string>>;
  setShowPanel: React.Dispatch<SetStateAction<boolean>>;
}

const stateStyle = {
  enable: {
    borderColor: "border-focus-default",
  },
  warning: {
    borderColor: "border-strong-01",
  },
  error: {
    borderColor: "border-border-error",
  },
  disabled: {
    borderColor: "border-border-disabled",
  },
  readOnly: {
    borderColor: "border-subtle-01",
  },
};
export default function DatePanel({
  state,
  selectedDate,
  setSelectedDate,
  setShowPanel,
}: DatePanelProps) {
  const [date, setDate] = useState<dayjs.Dayjs>(dayjs()); // header 기준이 되는 날짜
  const [mode, setMode] = useState<datePickerType>("date");

  const days = ["일", "월", "화", "수", "목", "금", "토"];

  const onClickLeftIcon = () => {
    switch (mode) {
      case "date":
        if (date.month() === 0) {
          const newDate = date.subtract(1, "year").set("month", 11);
          setDate(newDate);
        } else setDate(date.subtract(1, "month"));
        break;
      case "month":
        setDate(date.subtract(1, "year"));
        break;
      case "year":
        setDate(date.subtract(10, "year"));
        break;
    }
  };
  const onClickRightIcon = () => {
    switch (mode) {
      case "date":
        if (date.month() === 11) {
          const newDate = date.add(1, "year").set("month", 0);
          setDate(newDate);
        } else setDate(date.add(1, "month"));
        break;
      case "month":
        setDate(date.add(1, "year"));
        break;
      case "year":
        setDate(date.add(10, "year"));
        break;
    }
  };

  const onClickDayCell = (value: string) => {
    setSelectedDate(value);
    setShowPanel(false);
  };

  const onClickMonthCell = (month: number) => {
    setMode("date");
    setDate(date.set("month", month - 1));
  };

  const onClickYearCell = (year: number) => {
    setMode("month");
    setDate(date.set("year", year));
  };

  useEffect(() => {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    regex.test(selectedDate) && setDate(dayjs(selectedDate));
  }, [selectedDate]);

  const returnBorderColor = () => {
    switch (state) {
      case "enable":
        return "border-focus-default";
      case "warning":
        return "border-border-strong-01";
      case "error":
        return "border-border-error";
    }
  };

  useEffect(() => {
    returnBorderColor();
  }, [state]);

  return (
    <div
      className={`w-full bg-white p-spacing-03 flex flex-col rounded-b-radius-04
      ${state === "enable" ? "border-b-[3px] border-x-[3px]" : "border-b-2 border-x-2"}
      ${returnBorderColor()}
      gap-spacing-${mode === "date" ? "01" : "02"}`}
    >
      <DatePickerHeader
        onClickLeftIcon={onClickLeftIcon}
        onClickRightIcon={onClickRightIcon}
        date={date}
        mode={mode}
        setMode={setMode}
      />
      {mode === "date" && (
        <div className="w-full grid grid-cols-7 text-center">
          {days.map(day => (
            <div className="text-text-primary w-11 h-11 flex items-center justify-center label-03-medium">
              {day}
            </div>
          ))}
        </div>
      )}
      {mode === "date" && (
        <div className="w-full grid grid-cols-7">
          {getCalendarDates(date.year(), date.month() + 1).map(date => (
            <CalendarCell
              cellType="date"
              state={date.state}
              date={date.label}
              onClick={() => onClickDayCell(date.value)}
              selected={date.value === selectedDate}
            />
          ))}
        </div>
      )}
      {mode === "month" && (
        <div className="w-full grid grid-cols-3">
          {getCalendarMonth().map(month => (
            <CalendarCell
              date={`${month}월`}
              onClick={() => onClickMonthCell(month)}
              cellType="month"
              state="inPeriod"
            />
          ))}
        </div>
      )}
      {mode === "year" && (
        <div className="w-full grid grid-cols-3">
          {getCalendarYear(date.year()).map(year => (
            <CalendarCell
              date={`${year.value}년`}
              state={year.state}
              onClick={() => onClickYearCell(year.value)}
              cellType="year"
            />
          ))}
        </div>
      )}
    </div>
  );
}
