import { FC, memo, useEffect, useState } from 'react';

export const SimpleTimer: FC = memo(() => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const handleRunTimer = () => {
    setIsRunning((prev) => !prev);
  };

  // useEffect(() => {
  //   const timerId = setTimeout(() => {
  //     setCount(count + 1);
  //   }, 1000);
  //   return () => clearTimeout(timerId);
  // }, [count]);

  // useEffect(() => {
  //   const timerId = setInterval(() => {
  //     setCount((prev) => prev + 1);
  //   }, 1000);
  //   return () => clearInterval(timerId);
  // }, []);

  //   useEffect(() => {
  //     const timerId = window.setInterval(() => {
  //       setCount((prev) => prev + 1);
  //     }, 1_000);

  //     return () => window.clearInterval(timerId);
  //   }, []);

  useEffect(() => {
    let timerId: ReturnType<typeof window.setInterval>;

    if (isRunning) {
      return;
    }

    timerId = window.setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1_000);

    return () => window.clearInterval(timerId);
  }, [isRunning]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleRunTimer}>{isRunning ? 'Start' : 'Stop'}</button>
    </div>
  );
});

SimpleTimer.displayName = 'MemoSimpleTimer';
