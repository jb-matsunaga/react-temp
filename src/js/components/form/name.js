import React from 'react';

export default class InputName extends React.Component {
    handleChange(e) {
        let name = e.target.name;
        let value = e.target.value;
        let error = null;
        let requeired = this.props.data.requeired;
        let flg = this.props.data.flg;

        if(value.length >= 10) {
            error = '10文字以内で入力してください。';
        }

        this.props._requiredCheck(name, value, error, requeired, flg);
    }
    render() {
        return(
            <div>
            <label>名前</label>
                <input type="text" name="name" placeholder="名前"
                value={this.props.data.value}
                onChange={this.handleChange.bind(this)}/>
                <div>{this.props.data.value}</div>
                <div>{this.props.data.error}</div>
            </div>
        );
    }
};
