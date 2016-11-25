import React from 'react';

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
    handleChange(value) {
        console.log(value);
        this.setState({
            data: value
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
    changeEvent(e) {
        console.log(e.target.id);
        let thisId = e.target.id;
        let thisValue = e.target.value;
        console.log('test');
        this.props._handleChange({
            id: thisId,
            value: thisValue
        });
    }

    render() {
        return(
            <li>
                <label>{this.props.data.label}</label>
                <input
                id={this.props.data.id}
                type={this.props.data.type}
                value={this.props.data.value}
                onChange={this.changeEvent.bind(this)}
                />
            </li>
        );
    }
}
