import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/ru";
import { RemainingTime } from "models";

export const getRemainingTimeUntilMsTimestamp = (
  timestampMs: number
): RemainingTime => {
  const timestampDayjs = dayjs(timestampMs);
  const nowDayjs = dayjs();

  if (timestampDayjs.isBefore(nowDayjs)) {
    return {
      seconds: "00",
      minutes: "00",
      hours: "00",
      days: "00",
    };
  }

  return {
    seconds: getRemainingSeconds(nowDayjs, timestampDayjs),
    minutes: getRemainingMinutes(nowDayjs, timestampDayjs),
    hours: getRemainingHours(nowDayjs, timestampDayjs),
    days: getRemainingDays(nowDayjs, timestampDayjs),
  };
};

const getRemainingSeconds = (
  nowDayjs: Dayjs,
  timestampDayjs: Dayjs
): string => {
  const seconds = timestampDayjs.diff(nowDayjs, "seconds") % 60;
  return padWithZeroes(seconds);
};

const getRemainingMinutes = (
  nowDayjs: Dayjs,
  timestampDayjs: Dayjs
): string => {
  const minutes = timestampDayjs.diff(nowDayjs, "minutes") % 60;
  return padWithZeroes(minutes);
};

const getRemainingHours = (nowDayjs: Dayjs, timestampDayjs: Dayjs): string => {
  const hours = timestampDayjs.diff(nowDayjs, "hours") % 24;
  return padWithZeroes(hours);
};

const getRemainingDays = (nowDayjs: Dayjs, timestampDayjs: Dayjs): string => {
  const days = timestampDayjs.diff(nowDayjs, "days");
  return String(days);
};

const padWithZeroes = (value: number): string => {
  return String(value).length === 1 ? `0${value}` : `${value}`;
};

export const calculateTimestampMs = (expiryTimestamp: number) => {
  return Math.floor(expiryTimestamp - Date.now());
};
