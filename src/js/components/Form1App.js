import React from 'react';

export default class Form1App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'initial state'
        }
    }
    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }
    render() {
        return(
            <div>
                <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} />
            </div>
        );
    }
}
