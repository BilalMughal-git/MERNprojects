import React from "react";
import { useState, useEffect } from "react";

function Counter() {
    const [counter, setCounter] = useState(2);
    // const [value, setValue] = useState();

    useEffect(() => {
        console.log(`Counter value is ${counter}`);
    }, [counter])


    return (
        <div>
            <p> Counter :{counter}</p>
            <h6>Your Counter Value is :{counter % 2 === 0 ? 'Even' : 'Odd'}</h6>

            <button onClick={
                () => {
                    setCounter(counter + 1)
                }}>Increment</button>
            <button onClick={
                () => {
                    setCounter(counter - 1)
                }}>Decrement</button>
        </div>
    )
}

export default Counter;