const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
console.log(choices);

let currentQuestion = {};
let acceptingAnswer = false;
let score = 0;
let questionCounter = 0;
let avaliableQuestions = [];

let questions = [
    {
        question: "What kind of dream car does Anh want to buy one day?",
        choice1: "Toyota Supra",
        choice2: "Tesla",
        choice3: "Mini-Van",
        choice4: "4Runner",
        answer: 1
    },

    {
        question: "What was the reason Anh decided to get into tech?",
        choice1: "Money",
        choice2: "Opportunities",
        choice3: "Family",
        choice4: "The fear of being a failure",
        answer: 2
    },

    {
        question: "How many kids does he want one day?",
        choice1: "0",
        choice2: "4",
        choice3: "5",
        choice4: "8",
        answer: 3
    },

    {
        question: "Where did Anh grow up?",
        choice1: "Kentucky",
        choice2: "Seattle",
        choice3: "Canada",
        choice4: "Vietnam",
        answer: 2
    },

    {
        question: "What are his long term goals?",
        choice1: "Web designer",
        choice2: "Data analyst",
        choice3: "Continue with Macadons",
        choice4: "Software Engineer",
        answer: 4
    },

]
//Constants
const CORRECT_BONUS = 10;
const MAX_QUESTION = 5;

    startGame = () => {
        score = 0;
        avaliableQuestions = [...questions];
        console.log(avaliableQuestions);
        getNewQuestion();
    };

    getNewQuestion = () => {

        if(avaliableQuestions.length === 0 || questionCounter > MAX_QUESTION) {
            //END OF THE PAGE
            return window.location.assign("/end.html");
        }

        questionCounter++;
        const questionIndex =  Math.floor(Math.random() * avaliableQuestions.length);
        currentQuestion = avaliableQuestions[questionIndex];
        question.innerText = currentQuestion.question;

        choices.forEach( choice => {
            const number = choice.dataset['number'];
            choice.innerText = currentQuestion['choice' + number];
        })
    };

    avaliableQuestions.splice("questionIndex", 1);

    acceptingAnswer = true;

    choices.forEach(choice => {
        choice.addEventListener("click", e => {
            if(!acceptingAnswer) return;

            acceptingAnswer = false;
            const selectedChoice = e.target;
            const selectedAnswer = selectedChoice.dataset["number"];
            getNewQuestion();
        });
    });

    startGame();



