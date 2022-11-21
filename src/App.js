import logo from './logo.svg';
import './App.css';

import API from './components/CobaAPI';


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <API />
      </header>
    </div>
  );
}

export default App;
