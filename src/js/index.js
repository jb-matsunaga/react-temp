import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.js';
import FormApp1 from './components/FormApp1.js';
import FormApp from './components/FormApp.js';
// import AnswerMultipleChoiceQuestion from './components/answer_multiple_choice_question.js';

var arrayOfChoices = [
    {id: '1', choice: 'test'}
];

ReactDOM.render(
    <FormApp />,
    // <AnswerMultipleChoiceQuestion choice={arrayOfChoices} />,
    document.getElementById('fn-selectBox')
);
