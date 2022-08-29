import './App.css';
import { signInWithGoogle } from './Firebase';

function App() {
  return (
    <div className="App">
      <button className="btn btn-primary" onClick={signInWithGoogle}>Sign In</button>
      <h2>{localStorage.getItem('name')}</h2>
      <img src={localStorage.getItem('picture')} alt="pic" />
    </div>
  );
}

export default App;
