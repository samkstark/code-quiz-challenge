
var timerEl = document.querySelector("#timer")
var introcontainerEl = document.getElementById("start-container")
var questionScreenEl = document.getElementById("question-screen")
var questionEl = document.getElementById("question")
var choiceButtonsEl = document.getElementById("#choice-buttons")
var initialsFormEl = document.getElementById("initials-form")
var scoreContainerEl = document.getElementById("score-container")
var scoreListEl = document.getElementById("score-list")
var correctEl = document.getElementById("correct")
var incorrectEl = document.getElementById("incorrect")


var scoreButtonEl = document.querySelector("view-highscores")
var startButtonEl = document.querySelector("#start-game")
var submitButtonEl = document.querySelector("#submit-score")
var backButtonEl = document.querySelector("return")

var score = 0;
var timeleft;
var endgame;
timerEl.innerText = 0;

var highscores = []

var randomQuestions
var questionIndex = 0;

var questions = [
    {
        question: 'Commonly used data types DO not include:',
        choice1: 'Strings',
        choice2: 'Booleans',
        choic3: 'Alerts',
        choice4: 'Numbers',
        answer: 3,
    },
    {
        question: 'The condition in an if/else statement is enclosed with ______',
        choice1: 'Quotes',
        choice2: 'Curly brackets',
        choice3: 'Parenthesis',
        choice4: 'Squared brackets',
        answer: 3, 
    },
    {
        question: 'Arrays in JavaScript can be used to store ______',
        choice1: 'Numbers and strings',
        choice2: 'Other arrays',
        choice3: 'Booleans',
        choice4: 'All of the above',
        answer: 4,
    },
    {
        question: 'String values must be enclosed within ______ when being assigned to vaiables.',
        choice1: 'Commas',
        choice2: 'Curly brackets',
        choice3: 'Quotes',
        choice4: 'Parenthesis',
        answer: 3,
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        choice1: 'JavaScript',
        choice2: 'Terminal/bash',
        choice3: 'For loops',
        choice4: 'Console.log',
        answer: 1,
    }
];

var returnToStart = function () {
    scoreContainerEl.classList.add("hide")
    scoreContainerEl.classList.remove("show")
    introcontainerEl.classList.add("show")
    introcontainerEl.classList.remove("hide")
    scoreContainerEl.removeChild(scoreContainerEl.lastChild)
    QuestionIndex = 0
    endgame ""
    timerEl.textContent = 0

    if (correctEl.className = "show") {
        correctEl.classList.add("hide")
        correctEl.classList.remove("show")
    }
    if (incorrectEl.className = "show") {
        incorrectEl.classList.add("hide")
        incorrectEl.classList.remove("show")
    }
}

var setTime = function () {
    timeleft = 60;

var timecheck = setInterval(function ()) {
    timerEl.innerText = timeleft
    timeleft--

    if (endgame) {
        clearInterval(timecheck)
        }

    if (timeleft < 0) {
        displayScore();
    }
    
}

var displayScore = function () {
contai


const SCORE_POINTS = 100
const MAX_QUESTIONS = 5

startGame = () => {
    questionCounter = 0
    score = 0
availableQuestions = [...questions]
getNewQuestion()
}

getNewQuestion = () => {
if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    localStorage.setItem('mostRececntScore', score)

    return window.location.assign('/end.html')
}

const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
currentQuestion = availableQuestions[questionsIndex]
questions.innerText = currentQuestion.question

choices.forEach(choice => {
    const number = choice.dataset['number']
    choice.innerText = currentQuestion['choice' + number]
})


availableQuestions.splice(questionIndex, 1)

acceptingAnswers = true

}

