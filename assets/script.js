var ViewHighScoreEl = document.getElementById("view-highscores")
var timerEl = document.getElementById("timer")
var introcontainerEl = document.getElementById("start-container")
var questionScreenEl = document.getElementById("question-screen")
var questionEl = document.getElementById("question")
var choiceButtonsEl = document.getElementById("#choice-buttons")
var initialsFormEl = document.getElementById("initials-form")
var scoreContainerEl = document.getElementById("score-container")

var startButtonEl = document.querySelector("#start-game")
var submitButtonEl = document.querySelector("#submit-score")

let questions = [
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
]

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

choices.forEach(choice => {
    choice.addEventListener('click', event => {
        if(!acceptingAnswers) return 

        acceptingAnswers = false 
        const selectedChoice = event.target 
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect' 

        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }
    
        selectedChoice.parentElement.classList.add(classToApply)

    setTimeout(() => {
        selectedChoice.parentElement.classList.remove(classToApply)
        getNewQuestion()
    }, 1000)
})


incrementScore = num => {
    score += num
    scoreText.innerText = score
}

startGame()
