import React from 'react';
import ReactDOM from 'react-dom';
import InputName from './name.js';
import InputMail from './email.js';
import InputTextArea from './textarea.js';

export default class FormApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: {
                value: '',
                error: '',
                flg: false
            },
            email: {
                value: '',
                error: '',
                flg: false
            },
            textarea: {
                value: '',
                error: '',
                flg: true
            },
            disabled: true
        }
    }
    ValidationCheck(name, value, error, flg) {
        console.log(name, value, error, flg);

        this.setState({
            [name]: {
                value: value,
                error: error,
                flg: flg
            }
        })
    }
    ResetFn() {
        ReactDOM.findDOMNode(this.refs.form).reset();
        console.log(this.refs.form);
    }
    render() {
        let disabled = this.state.disabled;
        if(this.state.name.flg === true && this.state.email.flg === true) {
            disabled = null;
        } else {
            disabled = true;
        }
        return(
            <form ref="form">
                <ul>
                    <li>
                        <InputName data={this.state.name} _validationCheck={this.ValidationCheck.bind(this)} />
                    </li>
                    <li>
                        <InputMail data={this.state.email} _validationCheck={this.ValidationCheck.bind(this)} />
                    </li>
                    <li>
                        <InputTextArea data={this.state.textarea} _validationCheck={this.ValidationCheck.bind(this)} />
                    </li>
                </ul>
                <SubmitButton disabledFlg={disabled} />
                <div>
                    <button type="button" value="リセット" data={this.props.data} onClick={this.ResetFn.bind(this)}>リセット</button>
                </div>
            </form>
        );
    }
}

class SubmitButton extends React.Component {
    render() {
        return(
            <div>
            <button type="submit" value="送信" disabled={this.props.disabledFlg}>送信</button>
            </div>
        );
    }
}
