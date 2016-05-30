//B：多岐選択の機能を提供

//1.基本構成を作成
//AnswerMultipleChoiceQuestionコンポーネントの子ノードは、AnswerRadioInputコンポーネントの配列

//2.プロパティを定義
//この配列は、choiceプロパティの配列が元になっている

//3.stateの初期値を定義

//4.ヘルパー関数を定義
//配列のそれぞれの要素からAnswerRadioInputコンポーネントを作成する

//このコンポーネントを表示するには書きのように記述する
//<AnswerMultipleChoiceQuestion choices={arrayOfChoices} ... />

var React = require("react");
var AnswerRadioInput = require('./answer_radio_input');

var AnswerMultipleChoiceQuestion = React.createClass({
    propTypes: {
        value: React.PropTypes.string,
        choice: React.PropTypes.array.isRequired,
        onCompleted: React.PropTypes.func.isRequired
    },
    getInitialState: function() {
        return(
            id: uniqueId('multiple-choice-'),
            value: this.props.value
        );
    },
    renderChoices: function() {
        return this.props.choices.map(function (choice, i) {
            return <AnswerRadioInput
                key={"choice-" + i}
                name={this.state.id}
                label={choice}
                value={choice}
                checked={this.state.value === choice} />
        }.bind(this));
    },
    render: function() {
        return(
            <div className="form-group">
                <label className="survey-item-label" htmlFor={this.state.id}>
                    {this.props.label}
                </label>
                <div className="survey-item-content">
                    {this.renderChoices()}
                </div>
            </div>
        );
    },
});

module.exports = AnswerMultipleChoiceQuestion;
