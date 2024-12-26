import { Button } from 'components';
import { useCallback, useState } from 'react';

export const SwitchingContent = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleSwitching = useCallback(() => {
    setIsVisible((prev) => !prev);
  }, []);

  return (
    <div data-testid="switchingContent">
      <Button onClick={handleSwitching}>Click me</Button>
      {isVisible && <div>some Text</div>}
    </div>
  );
};
