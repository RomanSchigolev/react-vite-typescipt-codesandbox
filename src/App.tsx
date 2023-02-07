import { useState, useEffect, useCallback, useRef } from "react";
import { useInput, useFetchUsers } from "hooks";
import { Button, List } from "components";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const users = useFetchUsers();
  const { query, renderInput } = useInput();

  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // const visibleRef = useRef<boolean | null>(null);
  // const handleVisible = useCallback(() => {
  //   visibleRef.current = !visibleRef.current;
  //   setIsVisible(visibleRef.current);
  // }, []);

  const handleVisible = useCallback(() => {
    setIsVisible((prev) => !prev);
  }, []);

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

  useEffect(() => {
    let timerId: number | undefined;

    if (isRunning) {
      return;
    }

    timerId = window.setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1_000);

    return () => clearInterval(timerId);
  }, [isRunning]);

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>React + Vite</h1>
      <h2>On CodeSandbox!</h2>
      <div className="card">
        <div>
          <p>{count}</p>
          <button onClick={handleRunTimer}>
            {isRunning ? "Start" : "Stop"}
          </button>
        </div>

        <div>
          <Button onClick={handleVisible} />
          {isVisible && <div>some Text</div>}
        </div>

        <div>{renderInput}</div>

        <div>
          <List users={users} query={query} />
        </div>
      </div>
    </div>
  );
}

export default App;
