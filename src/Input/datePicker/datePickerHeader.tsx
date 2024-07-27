import dayjs from "dayjs";
import LeftArrowIcon from "../../icon/svg/navigation/chevron-left-outlined.svg";
import RightArrowIcon from "../../icon/svg/navigation/chevron-right-outlined.svg";
import React, { SetStateAction } from "react";
import { datePickerType } from "./datePanel";

interface DatePickerHeaderProps {
  onClickLeftIcon: () => void;
  onClickRightIcon: () => void;
  date: dayjs.Dayjs;
  mode: datePickerType;
  setMode: React.Dispatch<SetStateAction<datePickerType>>;
}

export default function DatePickerHeader({
  onClickLeftIcon,
  onClickRightIcon,
  date,
  mode,
  setMode,
}: DatePickerHeaderProps) {
  const onClickMonth = () => setMode("month");
  const onClickYear = () => setMode("year");

  const returnYearText = () => {
    const yearString = date.year().toString();
    const startYear = yearString.slice(0, yearString.length - 1) + "0";
    const endYear = yearString.slice(0, yearString.length - 1) + "9";
    return startYear + "년 - " + endYear + "년";
  };

  return (
    <div className="w-full px-spacing-04 flex justify-between items-center">
      <div onClick={onClickLeftIcon}>
        <LeftArrowIcon width={16} height={16} className="fill-icon-secondary" />
      </div>
      <div className="flex gap-spacing-01">
        {mode === "year" && (
          <div
            className={`text-text-primary cursor-pointer ${mode !== "year" && "hover:text-support-info"}`}
          >
            {returnYearText()}
          </div>
        )}
        {(mode === "month" || mode === "date") && (
          <div
            onClick={onClickYear}
            className="text-text-primary cursor-pointer hover:text-support-info"
          >
            {date.format("YYYY")}년
          </div>
        )}
        {mode === "date" && (
          <div
            onClick={onClickMonth}
            className="text-text-primary cursor-pointer hover:text-support-info"
          >
            {date.format("MM")}월
          </div>
        )}
      </div>
      <div onClick={onClickRightIcon}>
        <RightArrowIcon
          width={16}
          height={16}
          className="fill-icon-secondary"
        />
      </div>
    </div>
  );
}
