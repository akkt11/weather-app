import dayjs from "dayjs";

export const dateToWeekDay = (date?: number) => {
  if (date) {
    const dt = dayjs(date * 1000).format("dddd");
    return dt;
  }
  return "";
};

export const dateToHour = (date?: number) => {
  if (date) {
    const dt = dayjs(date * 1000).format("H:mm");
    return dt;
  }
  return "";
};

export const dateToDMY = (date?: number) => {
  if (date) {
    const dt = dayjs(date * 1000).format("DD MMM YYYY");
    return dt;
  }
  return "";
};

export const dateToNow = (date?: number) => {
  if (date) {
    const today = dayjs(new Date().setMinutes(0)).format("H:mm");
    const dt = dayjs(date * 1000).format("H:mm");

    return today === dt ? "Now" : "";
  }
  return "";
};
