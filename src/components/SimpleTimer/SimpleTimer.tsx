import { Button } from 'components/Button';
import { useCallback, useRef, useState } from 'react';

export const SimpleTimer = () => {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof window.setInterval> | undefined>(undefined);

  const handleStartTimer = useCallback(() => {
    setIsActive(true);
    setIsPaused(true);
    timerRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  }, []);

  const handlePauseTimer = useCallback(() => {
    setIsPaused(false);
    clearInterval(timerRef.current);
  }, []);

  const handleResumeTimer = useCallback(() => {
    setIsPaused(true);
    timerRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  }, []);

  const handleResetTimer = useCallback(() => {
    setIsActive(false);
    setIsPaused(false);
    clearInterval(timerRef.current);
    setCount(0);
  }, []);

  return (
    <div>
      <p>{count}</p>
      {!isActive && !isPaused ? (
        <Button onClick={handleStartTimer}>Start</Button>
      ) : isPaused ? (
        <Button onClick={handlePauseTimer}>Pause</Button>
      ) : (
        <Button onClick={handleResumeTimer}>Resume</Button>
      )}
      <Button onClick={handleResetTimer}>Reset</Button>
    </div>
  );
};
