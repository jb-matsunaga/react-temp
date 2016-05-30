import React from 'react';

class Form extends React.Component {
    _filterVal() {
        // refsを通してinput要素に入力された値を取得
        const val = this.refs.myinput.value;
        // propsを通して受け取ったonFilterVal()メソッド（handleFilterVal()メソッド）を実行
        this.props.onFilterVal(val);
    }
    render() {
        return (
            <div>
            {/* 配列を絞り込むための値を入力するためのinput要素 */}
            <input
            type="text"
            ref="myinput"
            defaultValue=""
            onKeyUp={this._filterVal.bind(this)}
            />
            </div>
        );
    }
}

export default class FilterApp extends React.Component {
    // Appに渡された配列をpropで受け取り、初期state値として設定
    constructor(props) {
        super(props);
        this.state = {
            data: props.data
        };
    }
    handleFilterVal(val) {
        // JavaScriptのfilter()メソッドで絞り込み、絞り込んだ配列をline変数に格納
        const line = this.props.data.filter((item) => (
            // idまたはnameにキーワードが含まれていればtrueを返す
            item.id.toString().indexOf(val) >= 0
            || item.name.toLowerCase().indexOf(val) >= 0
        ));
        // setStateを実行
        this.setState({
            data: line
        });
    }
    render() {
        // stateを通して配列をmapして動的にVirtualDOMを作成し、list変数に格納
        let list = this.state.data.map((data) => (
            <li key={data.id}>
            {data.id}: {data.name}
            </li>
        ));
        return (
            <div>
            {/* Formコンポーネントを追加し、上記で定義したhandleFilterVal()メソッドを渡す */}
            <Form onFilterVal={this.handleFilterVal.bind(this)} />
            <ul>
            {/* list変数を展開 */}
            {list}
            </ul>
            </div>
        );
    }
}
// propの型を指定
FilterApp.propTypes = {
    data: React.PropTypes.array.isRequired
};
