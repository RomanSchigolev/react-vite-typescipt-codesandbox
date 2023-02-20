import { FC, memo, useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { calculateTimestampMs, convertTimestampMsToReadableFormat } from 'helpers';

interface CountDownTimerProps {
  countDownTimestampMs: number;
}

export const CountDownTimer: FC<CountDownTimerProps> = memo(({ countDownTimestampMs }) => {
  const [timestampMs, setTimestampMs] = useState(countDownTimestampMs);

  useLayoutEffect(() => {
    if (Date.now() > countDownTimestampMs) {
      setTimestampMs(0);
    }
  }, [countDownTimestampMs]);

  useEffect(() => {
    let timerId: ReturnType<typeof window.setTimeout>;

    if (timestampMs > 0) {
      timerId = window.setTimeout(() => {
        setTimestampMs(calculateTimestampMs(countDownTimestampMs));
      }, 1000);
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
});

CountDownTimer.displayName = 'MemoCountDownTimer';
