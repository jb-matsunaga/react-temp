import React from 'react';
import ReactDOM from 'react-dom';


export default class FormApp1 extends React.Component {
    //インスタンス時に状態を初期化
    constructor(props) {
        super(props);
        this.state = {
            data: {
                mail: null,
                url: null
            },
            message: {
                mail: null,
                url: null
            },
            status: {
                mail: null,
                url: null
            }
        };
    }

    render() {
        let mail = {
            mail: this.state.data.mail,
            error: this.state.message.mail,
            checkValue: this.checkValue
        };
        let url = {
            url: this.state.data.url,
            error: this.state.message.url,
            checkValue: this.checkValue
        };
        let button = {
            mail: this.state.status.mail,
            url: this.state.status.url,
            sendData: this.sendData
        };
console.log(mail);
console.log(url);
console.log(button);
        return (
            <ul>
                <FormMail {...mail} />
                <li>test</li>
            </ul>
        );
    }
}

class FormMail extends React.Component {
    constructor(props) {
        super(props);
        this._onChange = this._onChange.bind(this);

    }

    _onChange(e) {
        let type = e.target.name;
        let val = e.target.value;
        console.log(e.target.value)
    }

    render() {
        return (
            <li>
                <input type="mail" name="mail" placeholder="Email"
                value={this.props.mail}
                onBlur={this._checkValue}
                onChange={this._onChange}
                required
                />
                <p>{this.props.error}</p>
            </li>
        );
    }
}

class FormUrl extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <li>
                <input type="url" name="url" placeholder="Url"
                value={this.props.url}
                />
                <p>{this.props.error}</p>
            </li>
        );
    }
}

    // class FormButton extends React.Component {
    //     constructor(props) {
    //         super(props);
    //
    //     }
    // }
