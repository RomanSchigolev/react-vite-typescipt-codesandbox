import { FC, useEffect, useMemo, useState } from 'react';
import { calculateTimestampMs, convertTimestampMsToReadableFormat } from 'helpers';

interface CountDownTimerProps {
  countDownTimestampMs: number;
}

export const CountDownTimer: FC<CountDownTimerProps> = ({ countDownTimestampMs }) => {
  const [timestampMs, setTimestampMs] = useState(() => (Date.now() > countDownTimestampMs ? 0 : countDownTimestampMs));

  useEffect(() => {
    let timerId: ReturnType<typeof window.setTimeout>;

    if (timestampMs > 0) {
      timerId = window.setTimeout(() => {
        setTimestampMs(calculateTimestampMs(countDownTimestampMs));
      }, 1_000);
    }

    return () => window.clearTimeout(timerId);
  }, [countDownTimestampMs, timestampMs]);

  const convertedTimestampMsToReadableFormat = useMemo(
    () => convertTimestampMsToReadableFormat(timestampMs),
    [timestampMs]
  );

  return (
    <div className="countDownTimer-container">
      <span>{convertedTimestampMsToReadableFormat}</span>
    </div>
  );
};
