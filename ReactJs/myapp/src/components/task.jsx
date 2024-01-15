import React from "react";
import App from "../App";

function Task({data,stylee,height}){
   
return(
    <div> 
    <p style={stylee} >{data}</p>    
    </div>
)
}

export default Task;