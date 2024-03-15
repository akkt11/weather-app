import dayjs from "dayjs";

export const dateToWeekDay = (date?: number) => {
  if (date) {
    let dt = dayjs(date * 1000).format("dddd");
    return dt;
  }
  return "";
};

export const dateToDMY = (date?: number) => {
  if (date) {
    let dt = dayjs(date * 1000).format("DD MMM YYYY");
    return dt;
  }
  return "";
};
