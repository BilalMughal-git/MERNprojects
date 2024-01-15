import React from 'react';
import { useState } from 'react';

// //Function Component with props
// function App(prop) {

//     const red = () => {
//         alert('Fuck you Bitch');
//     }   

//     return <div>
//     <h1>React Function Components</h1>
//         <h2>{prop.data}</h2>
//     </div>
// }



function App1() {
  let [data, setData] = useState(0);
  let [name, setName] = useState('bilal');

  function updateData() {
    setName('Bilal Mughal');
  }

  function counterFun() {
    setData(data + 1);
  }

  return (
    <div>
    <img src='logo192.png' alt='mango'/>
      <h1>Using Function Components</h1>
      <h3>Name: {name}</h3>
      <button onClick={updateData}>Change Name</button>
      <p>Counter:{data}</p>
      <button onClick={counterFun}>Counter</button>
      <h1>Using Class Components</h1>
    </div>
  );
}




export default App1;
