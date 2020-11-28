const beginButton = document.getElementbyId('beginButton')
const nextButton = document.getElementbyId('nextButton')
const questionContainerElement = document.getElementbyId('questionContainer')
let shuffledQuestions, currentQuestionIndex
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answerButtons')
beginButton.addEventListener('click', beginQuiz)
nextButton.addEventListener('click', () => {
currentQuestionIndex++
getNext()
})


function beginQuiz() {
    beginButton.classList.add('hide')
    shuffledQuestions= questions.sort(()=> Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    getNext()

}

function getNext() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionsIndex])

}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
const button = document.createElement('button')
button.innerText = answer.text
button.classList.add('button')
if (answer.correct){
button.dataset.correct = answer.correct

}
button.addEventListener('click', selectAnswer)
answerButtonsElement.appendChild(button)

    })


}

function resetState() {
nextButton.classList.add('hide')
while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
}

function selectAnswer(e) {
    const selectedButton =e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button =>{
        setStatusClass(button, button.dataset.correct)

    })
    if (shuffledQuestions.length > currentQuestionIndex + 1){
    nextButton.classList.remove('hide')
} else {
    beginButton.innerText ='Restart'
    beginButton.classList.remove('hide')
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')

    }

    }

}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: "What is an API?",
        answers:[
            { text: "Application Programming Interface", correct: true}
            { text: "Auntee Parent Igloo", correct: false}

        ]
    },

    {question: "Are JavaSccript and Java the same?",
    answers:[
        { text: "NO", correct: true}
        { text: "YES", correct: false}

    ]},

{question: "HTML is an example of.....",
answers:[
    { text: "Front end web development", correct: true}
    { text: "Back end web development", correct: false}

]},

{question: "JavaScript allows your webpage to be....",
answers:[
    { text: "Interactive", correct: true}
    { text: "Responsive", correct: false}

]},

{question: "What does an API allow you to do?",
answers:[
    { text: "Access specific portions of external datasets", correct: true}
    { text: "Allows for complex processing of data", correct: false}

]}