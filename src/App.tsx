import { useInput } from 'hooks';
import { List, CountDownTimer, SimpleTimer, SwitchingContent } from 'components';
import './App.css';

function App() {
  const { query, renderInput } = useInput();

  return (
    <div className="App">
      <h1>React + Vite</h1>
      <div className="card">
        <CountDownTimer countDownTimestampMs={1676965680000} />
      </div>
      <div className="card">
        <div>
          <SimpleTimer />
        </div>

        <SwitchingContent />

        <div>{renderInput}</div>

        <div>
          <List query={query} />
        </div>
      </div>
    </div>
  );
}

export default App;
