import React from "react";
import { useState } from "react";

function FormHandle() {

    const [name, setName] = useState('');
    const [interest, setInterest] = useState('');
    const [tcn, setTcn] = useState(false);


    function handle(e) {
        console.warn(name, interest, tcn);
        e.preventDefault();
    }

    function clearform() {
        console.log('hello from clear fotm')
        setName('');
        setInterest('');
        setTcn('')
    }
    return <div>
        <h1> React Form Handling</h1>
        <form onSubmit={handle}>
            <input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)} />
                <br/>
                <br/>
            <select
                value={setInterest}
                onChange={(e) => setInterest(e.target.value)}>
                <option>Select Option</option>
                <option>Marvel</option>
                <option>DC</option>
            </select>
            <br/>
            <br/>
            <input 
            type="checkbox" 
            value={setTcn} 
            onChange={(e) => setTcn(e.target.checked)}/> Accept Terms and policies
            <br/>
            <br/>
            <button type="submit">Submit</button>
            <br/>
            <br/>
            <button type="button" onClick={clearform}>clear</button>
        </form>

    </div>
}

export default FormHandle;







