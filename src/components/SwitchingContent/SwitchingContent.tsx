import { Button } from 'components';
import { useCallback, useState } from 'react';

export const SwitchingContent = () => {
  const [isVisible, setIsVisible] = useState(false);

  // const visibleRef = useRef<boolean | null>(null);
  // const handleVisible = useCallback(() => {
  //   visibleRef.current = !visibleRef.current;
  //   setIsVisible(visibleRef.current);
  // }, []);

  const handleSwitching = useCallback(() => {
    setIsVisible((prev) => !prev);
  }, []);

  return (
    <div>
      <Button onClick={handleSwitching} />
      {isVisible && <div>some Text</div>}
    </div>
  );
};
