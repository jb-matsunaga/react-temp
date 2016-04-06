import React from 'react';

export default class FormApp extends React.Component {
    constructor(props) {
        super(props);
        //初期値設定：入力値によって変動する
        this.state = {
            email: {
                value: '',
                error: '',
                status: null
            },
            tel: {
                value: '',
                error: '',
                status: null
            }
        }
    }
    handleChange(data) {
        this.setState(data);
    }
    render() {
        return(
            <form>
                <InputTell
                tel={this.state.tel.value}
                error={this.state.tel.error}
                status={this.state.tel.status}
                handleChange={this.handleChange.bind(this)}
                />
                <p>{this.state.tel.value}</p>
                <p>{this.state.tel.error}</p>

                <InputEmail
                email={this.state.email.value}
                error={this.state.email.error} handleChange={this.handleChange.bind(this)}
                />
                <p>{this.state.email.value}</p>
                <p>{this.state.email.error}</p>

                <input type="submit" value="送信"/>
            </form>
        );
    }
}

FormApp.propTypes = {
    status: React.PropTypes.bool.isRequired
};
//電話番号フォーム
class InputTell extends React.Component {
    constructor() {
        super();
    }
    _handleChange(e) {
        if(e.target.value.match(/^[-]?[0-9]+(¥.[0-9]+)?$/)) {
            let telData = {
                tel: {
                    value: e.target.value,
                    error: '',
                    status: 'true'
                }
            };
            this.props.handleChange(telData);
        } else if(this.state.tel.status === null) {
            let telData = {
                tel: {
                    value: e.target.value,
                    error: '必須項目です。',
                    status: ''
                }
            };
            this.props.handleChange(telData);
        }else {
            let telData = {
                tel: {
                    value: e.target.value,
                    error: '半角英数字で入力してください。',
                    status: ''
                }
            };
            this.props.handleChange(telData);
        }
    }
    render() {
        return(
            <input
            type="tel"
            name="tel"
            id="tel"
            placeholder="Tel"
            tel={this.props.tel}
            onChange={this._handleChange.bind(this)}
            onBlur={this._handleChange.bind(this)}
            required
            />
        );
    }
}
//メールフォーム
class InputEmail extends React.Component {
    constructor(props) {
        super(props);

    }
    _handleChange(e) {
        let emailData = {
            email: {
                value: e.target.value,
                error: e.target.validationMessage
            }
        };
        this.props.handleChange(emailData);
    }
    render() {
        return(
            <input type="email"
            name="email"
            id="email"
            placeholder="Email"
            email={this.props.email}
            onChange={this._handleChange.bind(this)}
            required
            />
        );
    }
}
