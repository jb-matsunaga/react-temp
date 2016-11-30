import React from 'react';
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
    RequiredCheck(name, value, error, flg) {
        console.log(name, value, error, flg);

        if(value) {
            flg = true;
        }

        this.setState({
            [name]: {
                value: value,
                error: error,
                flg: flg
            }
        })
    }
    render() {
        let disabled = this.state.disabled;
        if(this.state.name.flg === true && this.state.email.flg === true) {
            disabled = null;
        }
        return(
            <form>
                <ul>
                    <li>
                        <InputName data={this.state.name} _requiredCheck={this.RequiredCheck.bind(this)} />
                    </li>
                    <li>
                        <InputMail data={this.state.email} _requiredCheck={this.RequiredCheck.bind(this)} />
                    </li>
                    <li>
                        <InputTextArea data={this.state.textarea} _requiredCheck={this.RequiredCheck.bind(this)} />
                    </li>
                </ul>
                <SubmitButton disabledFlg={disabled} />
            </form>
        );
    }
}

class SubmitButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <button type="submit" value="送信" disabled={this.props.disabledFlg}>送信</button>
        );
    }
}
