import { useState, useCallback } from 'react';
import { useInput } from 'hooks';
import { Button, List, CountDownTimer, SimpleTimer } from 'components';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const { query, renderInput } = useInput();
  const [isVisible, setIsVisible] = useState(false);

  // const visibleRef = useRef<boolean | null>(null);
  // const handleVisible = useCallback(() => {
  //   visibleRef.current = !visibleRef.current;
  //   setIsVisible(visibleRef.current);
  // }, []);

  const handleVisible = useCallback(() => {
    setIsVisible((prev) => !prev);
  }, []);

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" rel="noreferrer" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://vitejs.dev" rel="noreferrer" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>React + Vite</h1>
      <h2>On CodeSandbox!</h2>
      <div className="card">
        <CountDownTimer countDownTimestampMs={1676965680000} />
      </div>
      <div className="card">
        <div>
          <SimpleTimer />
        </div>

        <div>
          <Button onClick={handleVisible} />
          {isVisible && <div>some Text</div>}
        </div>

        <div>{renderInput}</div>

        <div>
          <List query={query} />
        </div>
      </div>
    </div>
  );
}

export default App;
