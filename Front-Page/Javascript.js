var timeEl = document.getElementById('time');
var time = 60;
var timeId;
var questionEl = document.getElementById('question');
var choices = document.getElementById('choices');
var button = document.getElementById('button');
var intials = document.getElementById('intials');
var submit = document.getElementById('submit');
var index = 0;


let questions = [
    {
        question: "What kind of dream car does Anh want to buy one day?",
   
        choices: ["Toyota Supra", "Telsa", "Porsche 911 Turbo", "4Runner"],
        answer: "Porsche 911 turbo"
        
    },

    {
        question: "What was the reason Anh decided to get into tech?",
    
        Choices: ["Money", "Opportunites", "Family", "Fear of being a failure"],
        answer: "Fear of being a failure"
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
function startquiz() {
var home = document.getElementById('home');
home.setAttribute('class', 'hide');
questionEl.removeAttribute('class');
//Start timer 
question()
}
function question() {
var currentQuestion = questions[index];
var title = document.getElementById('title');
title.textContent = currentQuestion.question
choices.innerHTML = ""
currentQuestion.choices.forEach(function (choice, i){
var choicebutton = document.createElement('button');
choicebutton.setAttribute('class', 'choice');
choicebutton.setAttribute('value', choices);
choicebutton.textContent = choice;
choices.appendChild(choicebutton)
})
}
button.onclick = startquiz;


startGame = () => {
    score = 0;
    avaliableQuestions = [...questions];
    console.log(avaliableQuestions);
    getNewQuestion();
};

getNewQuestion = () => {

    if(avaliableQuestions.length === 0 || questionCounter > MAX_QUESTION) {
        //END OF THE PAGE
        return window.location.assign("./end.html");
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

        acceptingAnswer = true;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        getNewQuestion();
    });
});

startGame();

