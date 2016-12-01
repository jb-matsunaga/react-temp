import React from 'react';

export default class InputTextArea extends React.Component {
    handleChange(e) {
        let name = e.target.name;
        let value = e.target.value;
        let error = null;
        let flg = this.props.data.flg;

        if(value.length >= 10) {
            error = '10文字以内で入力してください。';
        }

        this.props._validationCheck(name, value, error, flg);
    }
    render() {
        return(
            <div>
            <label>内容</label>
                <textarea name="textarea" placeholder="内容" rows="20"
                value={this.props.data.value}
                onChange={this.handleChange.bind(this)}></textarea>
                <div>{this.props.data.value}</div>
                <div>{this.props.data.error}</div>
            </div>
        );
    }
};
