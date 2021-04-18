import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet'
import Welcome from './components/Welcome'

function App() {
  return (
    <div className="App">
      <Greet name="Mehul" heroName="Marvelous"/>
      <Greet name="Chris" heroName="Cutie"/>
      <Welcome name="Mehul" heroName="Mayflower"></Welcome>
    </div>
  );
}

export default App;
