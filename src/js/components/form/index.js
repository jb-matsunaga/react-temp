import React from 'react';
import InputName from './name.js';
import InputMail from './email.js';

export default class FormApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: true
        }
    }
    RequiredCheck(name, value) {
        console.log(name, value);
    }
    render() {
        return(
            <form>
                <ul>
                    <li><InputName _requiredCheck={this.RequiredCheck.bind(this)} /></li>
                    <li><InputMail _requiredCheck={this.RequiredCheck.bind(this)} /></li>
                </ul>
                <SubmitButton disabledFlg={this.state.disabled} />
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
