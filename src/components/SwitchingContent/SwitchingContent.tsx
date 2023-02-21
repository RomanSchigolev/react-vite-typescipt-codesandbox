import { Button } from 'components';
import { memo, useCallback, useState } from 'react';

export const SwitchingContent = memo(() => {
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
});

SwitchingContent.displayName = 'MemoSwitchingContent';
