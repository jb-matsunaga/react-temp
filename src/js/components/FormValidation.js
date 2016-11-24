import React from 'react';
import update from 'react-addons-update';

export default class FormValidation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: '1',
                    label: 'お名前',
                    type: 'text',
                    value: '',
                    error: '15文字以内で入力してください。',
                    required: true
                },
                {
                    id: '2',
                    label: 'メールアドレス',
                    type: 'email',
                    value: '',
                    error: 'メールアドレスを入力してください。',
                    required: true
                },
                {
                    id: '3',
                    label: '電話番号',
                    type: 'tel',
                    value: '',
                    error: '電話番号を入力してください。',
                    required: false
                },
                {
                    id: '4',
                    label: '内容',
                    type: 'text',
                    value: '',
                    error: '20文字以内で入力してください。',
                    required: true
                }
            ]
        }
    }
    handleChange(e) {
        console.log(e);
        this.setState({
            data: update(this.state.data, {1: {value: e.target.value}})
        })
    }
    render() {
        console.log(this.state.data);
        let inputs = this.state.data.map((data) => {
            return <Input key={data.id} data={data} _handleChange={this.handleChange} />
        })
        return(
            <ul>
                {inputs}
            </ul>
        );
    }
};

class Input extends React.Component {

    render() {
        return(
            <li>
                <label>{this.props.data.label}</label>
                <input
                type={this.props.data.type}
                name={this.props.data.id}
                value={this.props.data.value}
                onChange={this.props._handleChange.bind(this)}
                />
            </li>
        );
    }
}
