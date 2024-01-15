import React, { useState } from "react";


// //Class 
// class EventsHandler extends React.Component {
//     testFun(){
// alert('testfun');
//     }

//     render() {
//         return (
//             <div>           
//                 <button onClick={ () => { this.testFun()}
//                 } > Click me </button>
//             </div>
//         );
//     }
// }


//function 
function EventsHandler () {

    const tesFun = ()=>{ alert ('hello g')}
        return (
            <div>           
                <button onClick={tesFun} > Click me </button>
            </div>
        );
    }


export default EventsHandler;