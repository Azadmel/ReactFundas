import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'

function App() {
  return (
    <div className="App">
      {/* <Greet name="Mehul" heroName="Marvelous"/>
      <Greet name="Chris" heroName="Cutie"/>
      <Welcome name="Mehul" heroName="Mayflower"></Welcome> */}
      <Message></Message>
    </div>
  );
}

export default App;
