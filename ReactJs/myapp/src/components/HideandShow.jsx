import React from 'react'

class Show extends React.Component {

    constructor() {
        super();
        this.state = {
            show: true
        }
    }
    render() {
        return (
            <div>
                { this.state.show ? <h2>If you want to hide me, click the button Below</h2> : null }
                        
                <button onClick={ () => {
                        // this.setState({show:false})
                       this.setState({ show: !this.state.show })
                    }
                } > Click me </button>
            </div>
        );
    }
}
export default Show;