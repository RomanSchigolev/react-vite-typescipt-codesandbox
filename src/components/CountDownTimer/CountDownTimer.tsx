import { FC, useEffect, useState } from "react";
import { getRemainingTimeUntilMsTimestamp } from "helpers";
import { RemainingTime } from "models";

const DEFAULT_REMAINING_TIME: RemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};

interface CountDownTimerProps {
  countDownTimestampMs: number;
}

export const CountDownTimer: FC<CountDownTimerProps> = ({
  countDownTimestampMs,
}) => {
  const [remainingTime, setRemainingTime] = useState<RemainingTime>(
    () => DEFAULT_REMAINING_TIME
  );

  const updateRemeiningTime = (countDownTimestampMs: number) => {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countDownTimestampMs));
  };

  useEffect(() => {
    const timerId = window.setTimeout(() => {
      updateRemeiningTime(countDownTimestampMs);
    }, 1000);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <div className="countDownTimer-container">
      <span>{remainingTime.days}</span>
      <span>days</span>
      <span className="two-numbers">{remainingTime.hours}</span>
      <span>hours</span>
      <span className="two-numbers">{remainingTime.minutes}</span>
      <span>minutes</span>
      <span className="two-numbers">{remainingTime.seconds}</span>
      <span>seconds</span>
    </div>
  );
};
