import logo from './logo.svg';
import './App.css';

import FormSubmit from './components/TodoList';


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FormSubmit />
      </header>
    </div>
  );
}

export default App;
