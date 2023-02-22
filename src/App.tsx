import { UsersSearchForm, CountDownTimer, SimpleTimer, SwitchingContent } from 'components';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React + Vite</h1>
      <div className="card">
        <CountDownTimer countDownTimestampMs={1677062400000} />
      </div>
      <div className="card">
        <div>
          <SimpleTimer />
        </div>

        <SwitchingContent />

        <UsersSearchForm />
      </div>
    </div>
  );
}

export default App;
