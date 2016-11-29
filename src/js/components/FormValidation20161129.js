import React from 'react';

export default class FormValidation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:{
                name: 'name',
                label: 'お名前',
                type: 'text',
                value: '',
                error: '15文字以内で入力してください。',
                required: true
            },
            email: {
                name: 'email',
                label: 'メールアドレス',
                type: 'email',
                value: '',
                error: 'メールアドレスを入力してください。',
                required: true
            },
            tel: {
                name: 'tel',
                label: '電話番号',
                type: 'tel',
                value: '',
                error: '電話番号を入力してください。',
                required: false
            },
            textarea: {
                name: 'textarea',
                label: '内容',
                type: 'text',
                value: '',
                error: '20文字以内で入力してください。',
                required: true
            }
        }
    }
    handleChange(name, value) {
        console.log(name);
        console.log(value);
        let key = name;
        console.log('key = ' + key);
        this.setState(function(previousState, currentProps) {
            return {name: {value: value}};
        });
    }
    render() {
        console.log(this.state);

        return(
            <ul>
                <li>
                    <InputName data={this.state.name} _handleChange={this.handleChange.bind(this)} />
                </li>
            </ul>
        );
    }
};
class InputName extends React.Component {
    ChangeFn(e) {
        let thisValue = e.target.value;
        let thisName = this.props.data.name;
        this.props._handleChange(thisName, e.target.value);
    }
    render() {
        return(
            <div>
                <label>{this.props.data.label}</label>
                <input type={this.props.data.type} value={this.props.data.value} onChange={this.ChangeFn.bind(this)} />
            </div>
        );
    }
}
class Input extends React.Component {
    changeEvent(e) {
        let thisId = e.target.id;
        let thisName = e.target.name;
        let thisValue = e.target.value;

        //console.log(this.props.data);
        this.props.data.value = thisValue;

        let array = this.props.data;

        this.props._handleChange(array);
    }

    render() {
        return(
            <li>
            <label>{this.props.data.label}</label>
            <input
            id={this.props.data.id}
            name={this.props.data.name}
            type={this.props.data.type}
            value={this.props.data.value}
            onChange={this.changeEvent.bind(this)}
            />
            </li>
        );
    }
}
