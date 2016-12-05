import React from 'react';

class SelectBox extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.props._validationCheck(name, value);
    }
    render() {
        const options = this.props.select.map((option) => {
            return <option key={option} value={option}>{option}</option>;
        });
        return(
            <select name='select' value={this.props.selected} onChange={this.handleChange}>
                {options}
            </select>
        );
    }
}

SelectBox.defaultProps = {
    select: ['one', 'two', 'three', 'four', 'five']
};

module.exports = SelectBox;
