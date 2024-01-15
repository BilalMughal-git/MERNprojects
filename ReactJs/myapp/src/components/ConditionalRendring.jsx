import React from "react";
import { useState } from "react";


function Conditional() {
    const [isloggedin, setIsloggedin] = useState(false);
    return (
        <div>{
            isloggedin === 1 ?
                <h1>Welcome Bilal</h1>:
                 isloggedin === 2  ? 
                 <h1>Not Logged inn</h1> : <h1>hello 3</h1>
        }

        </div>
    )
}

export default Conditional;