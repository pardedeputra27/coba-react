import logo from './logo.svg';
import './App.css';
import ToogleFunction from './components/HandleEvent';
import ToogleClass from './components/HandleEvent2';
import FormSubmit from './components/HandleEvent3';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ToogleFunction />
        <ToogleClass />
        <FormSubmit />

      </header>
    </div>
  );
}

export default App;
