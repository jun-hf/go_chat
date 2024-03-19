import './App.css';
import { connect, sendMsg } from './socket';

function App() {
  connect()
  const send = () => {
    sendMsg("Hello")
  }
  return (
    <div className="App">
      <button onClick={send}>Send msg</button>
    </div>
  );
}

export default App;
