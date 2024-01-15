import React from 'react';

class StateComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            name: 'Bilal',
            email: 'bilal@test.com',
            counter: 0
        }
    };
    Updatestate() {
        this.setState ({
            counter: this.state.counter+1
        })
    }
    UpdateName() {
        this.setState ({
            name :'Adeel',
            email: 'adeel@test.com',
        })
    }
    render() {
        return <div>
            <h1> hello {this.state.name}</h1>
            <h1> Your email is :  {this.state.email}</h1>
            <h1>  Counter : {this.state.counter}</h1>
            <button onClick={() => {this.UpdateName()}}>Name Change</button>
            <button onClick={() => { this.Updatestate() }}> Click me </button>
        </div>
    }
}

export default StateComponent;