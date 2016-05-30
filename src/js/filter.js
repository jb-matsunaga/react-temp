import React from 'react';
import ReactDOM from 'react-dom';

import FilterBankApp from './components/FilterBank.js';

// idとnameを持ったオブジェクトの配列を作成
let data = [
  { id: 1, name: 'foo' },
  { id: 2, name: 'bar' },
  { id: 3, name: 'baz' },
  { id: 4, name: 'qux' },
  { id: 5, name: 'quux' },
  { id: 6, name: 'foobar' }
];

ReactDOM.render(
  // 配列をAppコンポーネントに渡す
  <FilterBankApp data={data} />, document.querySelector('.content')
);
