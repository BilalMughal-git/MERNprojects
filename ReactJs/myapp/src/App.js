import React from 'react';
import Headers from './TodoApp/header';

// import Mount from './ClassComponent';
// import Fprop from './fuctionasProp';
// import App1 from './FunctionAndClassComponent';
// import Nav from './nav'
// import EventsHandler from './EventHandling.js'
// import Show from './HideandShow';
// import  StateComponent from "./state.js"
// import "./App.css";
// import Home from './FunctionAndClassComponent.js';

// import FormHandle from './FormHandling'
// import Conditional from './ConditionalRendring';
// import Task from './task';







// function App() {
//   return (
//     <div className='s1'>
//       <h1>Hello World</h1>
//       <Home text={{name : 'Click me to see Magic'}}  data ='Here you can show your data'/>
//     </div>
//   )
// }

// function App() {
// const stylee= {
//   backgroundColor:'red',
//   border:'1px solid black',
//   height:'100px',width:'100px'
// }
// const stylee2= {
//   backgroundColor:'yellow',
//   border:'1px solid black',
//   height:'100px',width:'100px'
// }
// const stylee3= {
//   backgroundColor:'black',
//   border:'1px solid black',
//   height:'100px',width:'100px'
// }
// const stylee4= {
//   backgroundColor:'blue',
//   border:'1px solid black',
//   height:'100px',width:'100px'
// }
//   return (
//     <div className='s1'>
//    <Task  stylee={stylee}  data='hello1'/>
//    <Task stylee={stylee2}  data='hello2'/>
//    <Task stylee={stylee3}  data='hello3'/>
//    <Task stylee={stylee4}  data='hello4'/>
//     </div>
//   )
// }



// function App() {
//   // function Alert(){
//   //   alert('hello')
//   // }

//   function Prompt() {
//     alert("You must be at least 18 years old to view this content.");

//     let name = prompt("What's your name?");
//     let ageString = prompt("What's your age?");

//     if (isNaN(ageString)) {
//         alert("Please enter a valid number for age.");
//         return;
//     }

//     let age = parseInt(ageString);

//     if (age >= 18) {
//         alert(`Welcome ${name}!`);
//     } else {
//         alert(`Sorry ${name}, you must be at least 18 years old to view this content.`);
//     }
// }


//   return (
//     <div>
//       <h1>I'm from App File</h1>
//       <Fprop data={Prompt} />
//     </div>
//   )
// }



function App(){
  return(
    <div>
<Headers/>
    </div>
  )
}


export default App;







