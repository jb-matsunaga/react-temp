import React from 'react';

export default class FormValidation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 'name',
                    label: 'お名前',
                    type: 'text',
                    value: '',
                    error: '15文字以内で入力してください。',
                    required: true
                },
                {
                    id: 'mail',
                    label: 'メールアドレス',
                    type: 'email',
                    value: '',
                    error: 'メールアドレスを入力してください。',
                    required: true
                },
                {
                    id: 'tell',
                    label: '電話番号',
                    type: 'tel',
                    value: '',
                    error: '電話番号を入力してください。',
                    required: false
                },
                {
                    id: 'content',
                    label: '内容',
                    type: 'text',
                    value: '',
                    error: '20文字以内で入力してください。',
                    required: true
                }
            ]
        }
    }
    render() {
        console.log(this.state.data);
        let inputs = this.state.data.map((data) => {
            return <Input key={data.id} data={data} />
        })
        return(
            <ul>
                {inputs}
            </ul>
        );
    }
};

class Input extends React.Component {
    handleChange(e) {
        console.log(e);
        console.log(e.target.value);
        console.log(this.state);
    }
    render() {
        return(
            <li>
                <label>{this.props.data.label}</label>
                <input
                type={this.props.data.type}
                name={this.props.data.id}
                value={this.props.data.value}
                onChange={this.handleChange.bind(this)}
                />
            </li>
        );
    }
}
