
import './App.css';
import Header from './Components/Header';
import List from './Components/List';
import Button from './Components/Button'
import './style.css'
import Counter from './Components/Counter';
import { useState } from "react";

function App() {
  const [isVisible, setVisible] = useState(true)
  return (
    <div className='Main-Div'>
      {isVisible ? <div className='todo-Div'>
        <Header />
        <Counter />
        <List data='Eat' />
        <List data='Code' />
        <List data='Sleep' />
        <List data='Repeat' />
        <Button />
      </div> : alert('Data cleared')
      }
      <button onClick={
        () => {
          setVisible(!isVisible)
        }
      }>Toogle</button>
    </div>

  );
}

export default App;
