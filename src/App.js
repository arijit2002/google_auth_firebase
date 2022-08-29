import './App.css';
import { signInWithGoogle } from './Firebase';

function App() {
  return (
    <div className="App">
      <button className="btn btn-primary" onClick={signInWithGoogle}>Sign In</button>
    </div>
  );
}

export default App;
