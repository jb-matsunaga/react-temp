import React from 'react';

export default class InputName extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            error: ''
        }
    }
    handleChange(e) {
        let name = e.target.name;
        let value = e.target.value;
        let error = '';

        if(value.length >= 10) {
            error = '10文字以内で入力してください。';
        }
        this.setState({
            value: value,
            error: error
        })

        this.props._requiredCheck(name, value);
    }
    render() {
        return(
            <div>
            <label>名前</label>
            <input type="text" value={this.state.value} name="name" placeholder="名前" onChange={this.handleChange.bind(this)}/>
            <div>{this.state.value}</div>
            <div>{this.state.error}</div>
            </div>
        );
    }
};
