import { quizData } from './quizData.js';
const { quizTitle, questionList } = quizData;

const quizTitleHeading = document.getElementById('quiz-title');
const questionDisplay = document.getElementById('question-display');
const choiceButtons = document.querySelectorAll('.choice-button');
const resultDisplay = document.getElementById('result-display');
const nextQuestionButton = document.getElementById('next-question');
const playAgainButton = document.getElementById('play-again');


let currentQuestionIndex = 0;
let score = 0;


quizTitleHeading.textContent = quizTitle;
runQuiz();

choiceButtons.forEach(button => {
    button.addEventListener('click', handleOptionClick)
})

nextQuestionButton.addEventListener('click', handleNextQuestionClick);
playAgainButton.addEventListener('click', runQuiz);

function renderQuestion() {
    const currentQuestion = questionList[currentQuestionIndex];
    questionDisplay.textContent = currentQuestion.question;
    choiceButtons.forEach((button, i) => {
        button.textContent = currentQuestion.options[i];
        button.disabled = false;
        button.style.display = 'block'
    });

    resultDisplay.textContent='';
    resultDisplay.style.display='none';
    nextQuestionButton.style.display='none';
}

function handleOptionClick(event) {
    const selectedButton = event.target;
    const currentQuestion = questionList[currentQuestionIndex];
    const isCorrect = selectedButton.textContent === 
       currentQuestion.options[currentQuestion.correctIndex];
       if (isCorrect) {
        score++;
       }
    resultDisplay.textContent = isCorrect
    ? 'Correct answer. Great Job!'
    : 'Sorry, that is not correct.';
    document.body.classList.remove('correct', 'incorrect');
    document.body.classList.add(isCorrect ? 'correct' : 'incorrect');
    choiceButtons.forEach(button => (button.disabled = true));
    resultDisplay.style.display='block';
    nextQuestionButton.style.display='block';
}

function handleNextQuestionClick() {
    currentQuestionIndex++;
    if(currentQuestionIndex === questionList.length) {
        questionDisplay.textContent = 'Quiz completed';
        resultDisplay.textContent = `Thank you for participating. You final score is: ${score}/${questionList.length}.`;
        choiceButtons.forEach(button => {
            button.style.display = 'none';
        })
            nextQuestionButton.style.display = 'none';
            playAgainButton.style.display = 'block';

    } else {
    renderQuestion();
   }
}

function runQuiz() {
    playAgainButton.style.display = 'none';
    currentQuestionIndex = 0;
    score = 0;
    renderQuestion();

}