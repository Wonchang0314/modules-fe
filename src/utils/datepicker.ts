import dayjs from "dayjs";

export const getCalendarDates = (year: number, month: number) => {
  const result = [];

  const startOfMonth = dayjs(`${year}-${month}-01`);
  const startDate = startOfMonth.startOf("week");
  const endOfMonth = startOfMonth.endOf("month");
  const endDate = endOfMonth.endOf("week");

  let currentDate = startDate;
  while (currentDate.isBefore(endDate) || currentDate.isSame(endDate, "day")) {
    const value = currentDate.format("YYYY-MM-DD");
    const label = currentDate.date();

    let state: "today" | "inPeriod" | "outPeriod";
    if (currentDate.isSame(dayjs(), "day")) state = "today";
    else if (currentDate.month() + 1 === month) state = "inPeriod";
    else state = "outPeriod";

    result.push({ value, label, state });

    currentDate = currentDate.add(1, "day");
  }

  return result;
};

export const getCalendarMonth = () => {
  return Array.from({ length: 12 }).map((_, i) => i + 1);
};

export const getCalendarYear = (year: number) => {
  const startYear = Math.floor(year / 10) * 10 - 1;

  const yearList: { state: "inPeriod" | "outPeriod"; value: number }[] =
    Array.from({
      length: 12,
    }).map((_, i) => {
      return { state: "inPeriod", value: startYear + i };
    });
  yearList[0]["state"] = "outPeriod";
  yearList[yearList.length - 1]["state"] = "outPeriod";

  return yearList;
};
