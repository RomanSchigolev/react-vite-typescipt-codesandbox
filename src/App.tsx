import { UsersSearchForm, CountDownTimer, SimpleTimer, SwitchingContent, TagsForm } from 'components';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React + Vite</h1>
      <div className="card">
        <CountDownTimer countDownTimestampMs={0} />
      </div>
      <div className="card">
        <div>
          <SimpleTimer />
        </div>

        <SwitchingContent />
        <UsersSearchForm />

        <TagsForm />
      </div>
    </div>
  );
}

export default App;
