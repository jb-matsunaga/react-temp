import React from 'react';

export default class InputName extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        let name = e.target.name;
        let value = e.target.value;
        let error = null;
        let flg = this.props.data.flg;

        if(value) {
            flg = true;
        }
        if(value.length > 10) {
            error = '10文字以内で入力してください。';
            flg = false;
        }

        this.props._validationCheck(name, value, error, flg);
    }
    render() {
        return(
            <div>
            <label>名前</label>
                <input type="text" name="name" placeholder="名前"
                value={this.props.data.value}
                onChange={this.handleChange}/>
                <div>{this.props.data.value}</div>
                <div>{this.props.data.error}</div>
            </div>
        );
    }
};
