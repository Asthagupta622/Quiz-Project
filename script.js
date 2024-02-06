const quizData =[
    {
        question:"Who is the father of HTML?",
        a:"Rasmus Lerdrof",
        b:"Tim Berners-Lee",
        c:"Brendan Eich",
        d:"Sergey Brin",
        correct: "b",

    },
    {
        question:"What does HTML stand for?",
        a:"Hypertext Markup Language",
        b:"Hypertext Markdown Language",
        c:"Hyperloop Markup Language",
        d:"Helicopters Terminals Motoroboats Lamborginis",
        correct:"a",

    },
    { 
        question: "What does  CSS stand for ?",
        a:"Central Style Sheets ",
        b:"Cascading Style Sheets",
        c:"Cascading Simple Sheets",
        d:"None of the Above",
        correct:"b",

    },
    {
        question:"What year was JavaScript launched?",
        a:"1995",
        b:"1996",
        c:"1997",
        d:"5000",
        correct:"a"
    },
];
const quiz = document .getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById('question');
const a_text = document.getElementById("a_text");
const b_text =document.getElementById("b_text");
const c_text =document.getElementById("c_text");
const d_text =document.getElementById("d_text");
const submitButton =document.getElementById("submit");
let currentQuiz =0;
let score =0;
const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
};
const getSelected = () => {
    let answer = null; // Initialize with null to handle cases where no answer is selected
    answerElements.forEach((answerElement) => {
        if (answerElement.checked) {
            answer = answerElement.id;
        }
    });
    return answer;
};


const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData =quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

};
loadQuiz();
submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer !== null) { // Check if an answer is selected
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="history.go(0)">Play Again</button>`;
        }
    }
});
