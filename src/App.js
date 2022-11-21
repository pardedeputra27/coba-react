import logo from './logo.svg';
import './App.css';

import API from './components/CobaAPI';
import NoInternetConnection from './components/NoInternetConnection';


const App = () => {
  return (
    <NoInternetConnection>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <API />
      </header>
    </div>
    </NoInternetConnection>
  );
}

export default App;
