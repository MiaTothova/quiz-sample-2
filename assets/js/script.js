const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarfull = document.querySelector('#progressBarfull');


let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestion = []

let questions = [
    {
        question: 'What is 2 + 2?',
        choice1: '2',
        choice2: '4',
        choice3: '6',
        answer: '2',
    },
    {
        question: 'What is 5 + 5?',
        choice1: '2',
        choice2: '10',
        choice3: '6',
        answer: '2',
    },
    {
        question: 'What is 1 + 1?',
        choice1: '2',
        choice2: '4',
        choice3: '6',
        answer: '1',
    },
    {
        question: 'What is 3 + 2?',
        choice1: '5',
        choice2: '4',
        choice3: '6',
        answer: '1',
    },
    {
        question: 'What is 5 + 2?',
        choice1: '7',
        choice2: '4',
        choice3: '6',
        answer: '1',
    }
]


const SCORE_POINTS = 100
const MAX_QUESTIONS = 5

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestions()
}

getNewQuestions = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }
/** question 10f4, 20f4 ect... */
    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarfull.style.width = `${(questionCounter/Max_Questions) *100}%`

    const questionsIndex = Math.floor(Math.random() = availableQuestions.lenght)
    currentQuestion = availableQuestions[questionIndex]
    question.innerText = currentQuestion.question

choices.forEach(choice => {
    const number = choice.dataset ['number']
    choice.innerText = currentQuestion['choice' + number]
})

availableQuestions.splice(questionsIndex, 1)

acceptingAnswers = true

}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout( () => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()