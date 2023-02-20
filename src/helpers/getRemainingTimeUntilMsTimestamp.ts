import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/ru';
import { RemainingTime } from 'models';

export const getRemainingTimeUntilMsTimestamp = (timestampMs: number): RemainingTime => {
  const timestampDayjs = dayjs(timestampMs);
  const nowDayjs = dayjs();

  if (timestampDayjs.isBefore(nowDayjs)) {
    return {
      seconds: '00',
      minutes: '00',
      hours: '00',
      days: '00',
    };
  }

  return {
    seconds: getRemainingSecondsCustom(nowDayjs, timestampDayjs),
    minutes: getRemainingMinutesCustom(nowDayjs, timestampDayjs),
    hours: getRemainingHoursCustom(nowDayjs, timestampDayjs),
    days: getRemainingDaysCustom(nowDayjs, timestampDayjs),
  };
};

const getRemainingSecondsCustom = (nowDayjs: Dayjs, timestampDayjs: Dayjs): string => {
  const seconds = timestampDayjs.diff(nowDayjs, 'seconds') % 60;
  return padWithZeroes(seconds);
};

const getRemainingMinutesCustom = (nowDayjs: Dayjs, timestampDayjs: Dayjs): string => {
  const minutes = timestampDayjs.diff(nowDayjs, 'minutes') % 60;
  return padWithZeroes(minutes);
};

const getRemainingHoursCustom = (nowDayjs: Dayjs, timestampDayjs: Dayjs): string => {
  const hours = timestampDayjs.diff(nowDayjs, 'hours') % 24;
  return padWithZeroes(hours);
};

const getRemainingDaysCustom = (nowDayjs: Dayjs, timestampDayjs: Dayjs): string => {
  const days = timestampDayjs.diff(nowDayjs, 'days');
  return String(days);
};

const padWithZeroes = (value: number): string => {
  return String(value).length === 1 ? `0${value}` : `${value}`;
};

export const calculateTimestampMs = (expiryTimestamp: number) => {
  return Math.floor(expiryTimestamp - Date.now());
};

export const convertTimestampMsToReadableFormat = (timestampMs: number): string => {
  if (timestampMs < 0) {
    return '00:00';
  }

  const seconds = getRemainingSeconds(timestampMs);
  const minutes = getRemainingMinutes(timestampMs);

  return `${minutes}:${seconds}`;
};

const getRemainingSeconds = (timestampMs: number): string => {
  const seconds = Math.floor((timestampMs % (60 * 1000)) / 1000);
  return padWithZeroes(seconds);
};

const getRemainingMinutes = (timestampMs: number): string => {
  const minutes = Math.floor((timestampMs % (60 * 60 * 1000)) / (1000 * 60));
  return padWithZeroes(minutes);
};

const getRemainingHours = (timestampMs: number): string => {
  const hours = Math.floor((timestampMs % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
  return padWithZeroes(hours);
};

const getRemainingDays = (timestampMs: number): string => {
  const days = Math.floor(timestampMs / (24 * 60 * 60 * 1000));
  return String(days);
};
