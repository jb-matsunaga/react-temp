import React from 'react';

export default class FormApp extends React.Component {
    constructor(props) {
        super(props);
        //初期値設定：入力値によって変動する
        this.state = {
            data: {
                url: null,
                email: null
            },
            message: {
                url: null,
                email: null
            },
            status: {
                url: false,
                email: false
            }
        }
    }
    checkValue(type, value, e) {
        let data = {
            url: this.state.data.url,
            email: this.state.data.email
        };
        let message = {
            url: this.state.message.url,
            email: this.state.message.email
        };
        let status = {
            url: this.state.status.url,
            email: this.state.status.email
        };

        switch (type) {
            case 'url':
                data.url = value;
                if(e.target.validationMessage) {
                    message.url = e.target.validationMessage;
                    status.url = false;
                } else {
                    message.url = null;
                    status.url = true;
                }
                break;
            case 'email':
                data.email = value;
                if(e.target.validationMessage) {
                    message.email = e.target.validationMessage;
                    status.email = false;
                } else {
                    message.email = null;
                    status.email = true;
                }
                break;
        }
        console.log(data)

        this.setState({
            data: data,
            message: message,
            status: status
        })
    }

    sendData(e) {
        alert(this.state.data.url + ',' + this.state.data.email);
    }

    render() {
        let url = {
            url: this.state.data.url,
            error: this.state.message.url,
            checkValue: this.checkValue.bind(this)
        }
        let email = {
            email: this.state.data.email,
            error: this.state.message.email,
            checkValue: this.checkValue.bind(this)
        }
        let button = {
            url: this.state.status.url,
            email: this.state.status.email,
            sendData: this.sendData.bind(this)
        }
        return(
            <ul>
                <FormUrl {...url} />
                <FormEmail {...email} />
                <FormButton {...button} />
            </ul>
        );
    }
}

class FormUrl extends React.Component {
    constructor(props) {
        super(props);

    }
    _checkValue(e) {
        let type = e.target.name;
        let val = e.target.value;
        this.props.checkValue(type, val, e);
    }
    render() {
        return(
            <li>
                <input type="url" name="url" placeholder="Url"
                value={this.props.url}
                onChange={this._checkValue.bind(this)}
                onBlur={this._checkValue.bind(this)}
                required
                />
                <p>{this.props.error}</p>
                <p>{this.props.url}</p>
            </li>
        );
    }
}

class FormEmail extends React.Component {
    constructor(props) {
        super(props);

    }
    _checkValue(e) {
        let type = e.target.name;
        let val = e.target.value;
        this.props.checkValue(type, val, e);
    }
    render() {
        return(
            <li>
                <input type="email" name="email" placeholder="Email"
                value={this.props.email}
                onChange={this._checkValue.bind(this)}
                onBlur={this._checkValue.bind(this)}
                required
                />
                <p>{this.props.error}</p>
                <p>{this.props.email}</p>
            </li>
        );
    }
}

class FormButton extends React.Component {
    constructor() {
        super();

    }
    _sendData(e) {
        console.log('clicking')
        this.props.sendData(e)
    }
    render() {
        console.log(this.props.sendData)
        return(
            <li>
                <button
                disabled={this.props.email === false || this.props.url === false}
                onClick={this._sendData.bind(this)}
                >
                送信する
                </button>
            </li>
        );
    }
}
