import React from 'react';

export default class InputEmail extends React.Component {
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
        let error = null;
        let flg = null;

        if(!value.match(/.+@.+\..+/)){
            error = '正式なメールアドレスを入力してください。';
            flg = false;
        } else {
            flg = true;
        }

        this.props._validationCheck(name, value, error, flg);
    }
    render() {
        return(
            <div>
                <label>メールアドレス</label>
                <input type="email" name="email" placeholder="メール"
                value={this.props.data.value}
                onChange={this.handleChange.bind(this)}/>
                <div>{this.props.data.value}</div>
                <div>{this.props.data.error}</div>
            </div>
        );
    }
};
