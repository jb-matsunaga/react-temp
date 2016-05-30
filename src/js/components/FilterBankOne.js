import React from 'react';

class Select extends React.Component {
    _filterVal(e) {
        let value = e.target.value;
        console.log(value);
        // propsを通して受け取ったonFilterVal()メソッド（handleFilterVal()メソッド）を実行
        this.props.onFilterVal(value);
    }
    render() {

        let kanaArrayList = this.props.kanaArrayOne.map((kanaArrayOne) => (
            <li key={kanaArrayOne}>
                <button
                value={kanaArrayOne}
                onClick={this._filterVal.bind(this)}
                >
                {kanaArrayOne}
                </button>
            </li>
        ));
        console.log(this.props.kanaArrayOne);
        return (
            <div>
                <ul>
                    {kanaArrayList}
                </ul>
            </div>
        );
    }
}

export default class FilterBankOneApp extends React.Component {
    // Appに渡された配列をpropで受け取り、初期state値として設定
    constructor(props) {
        console.log(props);
        super(props);
        this.state = {
            data: props.data
        };
    }
    handleFilterVal(val) {
        // JavaScriptのfilter()メソッドで絞り込み、絞り込んだ配列をline変数に格納
        const line = this.props.data.filter((item) => (
            // codeまたはnameにキーワードが含まれていればtrueを返す
            item.kana.toString().indexOf(val) >= 0
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
            {data.code}: {data.name}
            </li>
        ));
        return (
            <div>
            {/* Selectコンポーネントを追加し、上記で定義したhandleFilterVal()メソッドを渡す */}
            <Select
                kanaArrayOne={this.props.kanaArrayOne} onFilterVal={this.handleFilterVal.bind(this)}
            />
            <ul>
            {/* list変数を展開 */}
            {list}
            </ul>
            </div>
        );
    }
}
// propの型を指定
FilterBankOneApp.propTypes = {
    data: React.PropTypes.array.isRequired
};
