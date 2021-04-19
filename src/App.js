import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import NameList from './components/NameList'

function App() {
  return (
    <div className="App">
      {/* <Greet name="Mehul" heroName="Marvelous"/>
      <Welcome name="Mehul" heroName="Mayflower"></Welcome>
      <Message></Message>
      <Counter></Counter>
      <FunctionClick/>
      <ClassClick/> 
      <EventBind/> 
      <ParentComponent/>*/}

      <NameList/>
    </div>
  );
}

export default App;
