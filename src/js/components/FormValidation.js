import React from 'react';

export default class FormValidation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: '1',
                    name: 'name',
                    label: 'お名前',
                    type: 'text',
                    value: '',
                    error: '15文字以内で入力してください。',
                    required: true
                },
                {
                    id: '2',
                    name: 'email',
                    label: 'メールアドレス',
                    type: 'email',
                    value: '',
                    error: 'メールアドレスを入力してください。',
                    required: true
                },
                {
                    id: '3',
                    name: 'tel',
                    label: '電話番号',
                    type: 'tel',
                    value: '',
                    error: '電話番号を入力してください。',
                    required: false
                },
                {
                    id: '4',
                    name: 'text',
                    label: '内容',
                    type: 'text',
                    value: '',
                    error: '20文字以内で入力してください。',
                    required: true
                }
            ]
        }
    }
    handleChange(array) {
        console.log(this.state.data);
        console.log(array);
        const newArray = this.state.data.push(this.state.data, array);

        this.setState({
            data: newArray
        })
    }
    render() {
        console.log(this.state.data);
        let inputs = this.state.data.map((data) => {
            return <Input key={data.id} data={data} _handleChange={this.handleChange.bind(this)} />
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
