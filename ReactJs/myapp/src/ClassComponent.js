
import React from 'react';

class Mount extends React.Component {
    state = {
        name: 'bilal',
        email: 'e@email.com'
    }

componentDidMount() {
    this.setState({ name: 'BilalMirza' })
    console.warn('Component Did Mount');
}

componentDidUpdate(preProp,preState,snapshot) {
    console.warn('componentDidUpdate',preState);
    // if (this.setState == null) {
    //     this.setState({ who:'Bilal'});
    // }
}

    render() {

        console.warn('I am from render', this.state.name, this.state.email, this.props);

        return (
            <div>
                <h3>Name: {this.state.name}</h3>
                <h3>Email:{this.state.email}</h3>
                <h4>Click the bitton below For changings</h4>
                <button onClick={
                    () => {
                        this.setState({
                            name: 'Bilal Mughal',
                            email: 'bilalmughalmk14@gmail.com'
                        })
                    }
                }> Click Me</button>
            </div>
        )
    }
}



export default Mount ; 