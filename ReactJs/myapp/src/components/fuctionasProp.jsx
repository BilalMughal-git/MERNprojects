import React from "react";
import App from "../myapp/src/App";

function Fprop(props){
    return(
        <div>
        <h1>Click the button below</h1>
        <button onClick={props.data}>Click</button>
        <div>

        </div>

        </div>
        )
}
export default Fprop;