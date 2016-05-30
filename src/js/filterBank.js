import React from 'react';
import ReactDOM from 'react-dom';

import FilterBankApp from './components/FilterBank.js';
import FilterBankOneApp from './components/FilterBankOne.js';

// idとnameを持ったオブジェクトの配列を作成
let data = [
    {
        code: '0001',
        name: 'みずほ銀行',
        kana: 'みずほぎんこう'
    },
    {
        code: '0005',
        name: '三菱東京UFJ銀行',
        kana: 'みつびしとうきょうユーエフジェイぎんこう'
    },
    {
        code: '0009',
        name: '三井住友銀行',
        kana: 'みついすみともぎんこう'
    },
    {
        code: '0010',
        name: 'りそな銀行',
        kana: 'りそなぎんこう'
    },
    {
        code: '0117',
        name: '北海道銀行',
        kana: 'ほっかいどうぎんこう'
    }
];

let kanaArrayOne = [
    'あ','い','う','え','お',
    'か','き','く','け','こ'
];

ReactDOM.render(
  <FilterBankOneApp data={data} kanaArrayOne={kanaArrayOne} />,
  document.querySelector('.contentOne')
);
