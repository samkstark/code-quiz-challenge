const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const scoreText = document.querySelector('#score');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: 'Commonly used data types DO not include:',
        choice1: 'Strings',
        choice2: 'Booleans',
        choic3: 'Alerts',
        choice4: 'Numbers',
        answer: Alerts,
    },
    {
        question: 'The condition in an if/else statement is enclosed with ______',
        choice1: 'Quotes',
        choice2: 'Curly brackets',
        choice3: 'Parenthesis',
        choice4: 'Squared brackets',
        answer: Parenthesis, 
    },
    {
        question: 'Arrays in JavaScript can be used to store ______',
        choice1: 'Numbers and strings',
        choice2: 'Other arrays',
        choice3: 'Booleans',
        choice4: 'All of the above',
        answer: All of the above,
    },
    {
        question: 'String values must be enclosed within ______ when being assigned to vaiables.',
        choice1: 'Commas',
        choice2: 'Curly brackets',
        choice3: 'Quotes',
        choice4: 'Parenthesis',
        answer: Quotes,
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        choice1: 'JavaScript',
        choice2: 'Terminal/bash',
        choice3: 'For loops',
        choice4: 'Console.log',
        answer: JavaScript,
    }
]
