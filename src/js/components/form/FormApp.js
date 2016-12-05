import React from 'react';
import ReactDOM from 'react-dom';
import InputName from './InputName.js';
import InputMail from './InputMail.js';
import SelectBox from './SelectBox.js';
import TextArea from './TextArea.js';

class SubmitButton extends React.Component {
    render() {
        return(
            <div>
            <button type="submit" value="送信" disabled={this.props.disabledFlg}>送信</button>
            </div>
        );
    }
}

class FormApp extends React.Component {
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
            select: {
                value: 'three'
            },
            textarea: {
                value: '',
                error: '',
                flg: true
            },
            disabled: true
        }
        this.ValidationCheck = this.ValidationCheck.bind(this);
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
                        <InputName key={this.props.name} data={this.state.name} _validationCheck={this.ValidationCheck} />
                    </li>
                    <li>
                        <InputMail key={this.props.email} data={this.state.email} _validationCheck={this.ValidationCheck} />
                    </li>
                    <li>
                        <SelectBox key={this.props.select} selected={this.state.select.value} _validationCheck={this.ValidationCheck}/>
                    </li>
                    <li>
                        <TextArea key={this.props.textarea} data={this.state.textarea} _validationCheck={this.ValidationCheck} />
                    </li>
                </ul>
                <SubmitButton key={this.props.submit} disabledFlg={disabled} />
                <div>
                    <button type="button" value="リセット" data={this.props.data} onClick={this.ResetFn.bind(this)}>リセット</button>
                </div>
            </form>
        );
    }
}

FormApp.defaultProps = {
    name: 'key-name',
    email: 'key-email',
    select: 'key-select',
    textarea: 'key-textarea',
    submit: 'key-submit'
}

module.exports = FormApp;
