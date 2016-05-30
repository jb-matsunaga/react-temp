//A：まずは汎用的なinput要素から始まり、ラジオボタンにカスタマイズ

//1.基本的なコードの枠組みを作成する

//2.親コンポーネントから渡されるプロパティを定義する
//・この選択肢が表現する値：value(必須)
//・この選択肢の表示文字列：label(必須)
//・この選択肢が属する多岐選択の名前：name(必須)
//・ラジオボタンのid：id(オプション)
//・ラジオボタンの初期選択状態：checked(オプション)
// → クラス定義にpropTypesオブジェクトを追加する

//3.オプションのものはデフォルト値が必要なので、getDefaultPropsメソッドで定義する
//※これらのデフォルト値が親コンポーネントが値を指定しなかった場合にのみ使用される
//getDefaultPropsはクラスごとに一度しか呼び出されないのでユニークなidをここで決定することはできない。
//idは後でstateとして定義される(インスタンスごとにユニークだから)
//checkedはユーザーの操作により、常に値が変更される可能性があるためstateとして保持される

//4.stateの初期値を定義する

var React = require("react");

var AnswerRadioInput = React.createClass({
    propTypes: {
        id: React.PropTypes.string,
        name: React.PropTypes.string.isRequired,
        label: React.PropTypes.string.isRequired,
        value: React.PropTypes.string.isRequired,
        checked: React.PropTypes.bool
    },
    getDefaultProps: function() {
        return(
            id: null,
            checked: false
        );
    },
    getInitialState: function() {
        return(
            checked: !!this.props.checked,
            id: this.props.id ? this.props.id : uniqueId('radio-')
        );
    },
    render: function() {
        return(
            <div className="radio">
                <label>
                    <input type="radio" />
                </label>
            </div>
        );
    }
});

module.exports = AnswerRadioInput;
