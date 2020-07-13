var timeEl = document.getElementById('time'); 

var time = 60; 

var timeId; 

var questionEl = document.getElementById('question'); 

var button = document.getElementById('button'); 

var intials = document.getElementById('intials'); 

var submit = document.getElementById('submit'); 

var index = 0; 

let questionCounter = 0; 

 
 
 

let questions = [ 

    { 

        question: "What kind of dream car does Anh want to buy one day?", 

 
 

        choices: ["Toyota Supra", "Telsa", "Porsche 911 Turbo", "4Runner"], 

        answer: "Porsche 911 Turbo" 

 
 

    }, 

 
 

    { 

        question: "What was the reason Anh decided to get into tech?", 

 
 

        choices: ["Money", "Opportunites", "Family", "Fear of being a failure"], 

        answer: "Fear of being a failure" 

    }, 

 
 

    { 

        question: "How many kids does he want one day?", 

         

        choices: ["0", "2", "5", "3"], 

        answer: "3" 

    }, 

 
 

    { 

        question: "Where did Anh grow up?", 

 
 

        choices: ["Vietnam", "Seattle", "Kentucky", "Canada"], 

        answer: "2" 

    }, 

 
 

    { 

        question: "What are his long term goals?", 

         

        choices: ["Web desgin", "Data science", "Macadon", "Software Engineer"], 

        answer: 4 

    }, 

 
 

] 

console.log(questions[0].answer, "this is my array") 

var MAX_QUESTION = questions.length; 

 
 

function startquiz() { 

    var home = document.getElementById('home'); 

    home.setAttribute('class', 'hide'); 

    questionEl.removeAttribute('class'); 

    //Start timer  

    question() 

} 

function question() { 

    var currentQuestion = questions[questionCounter]; 

    console.log(currentQuestion, "the current question"); 

    var title = document.getElementById('title'); 

    title.textContent = currentQuestion.question 

    choices.innerHTML = "" 

    currentQuestion.choices.forEach(function (choice) { 

        var choicebutton = document.createElement('button'); 

        choicebutton.setAttribute('class', 'choice'); 

        choicebutton.setAttribute('value', choice); 

        choicebutton.textContent = choice; 

        choicebutton.onclick = questionClick; 

        choices.appendChild(choicebutton) 

    }) 

} 

function questionClick() { 

    console.log(this.value, questions[questionCounter].answer); 

    if (this.value === questions[questionCounter].answer) { 

        console.log('answer is correct'); 

        questionCounter++;  

        question(); 

    } 

} 

 
 
 

button.onclick = startquiz; 

 
 
 

startGame = () => { 

    score = 0; 

    avaliableQuestions = [...questions]; 

    console.log(avaliableQuestions); 

    getNewQuestion(); 

}; 

 
 

getNewQuestion = () => { 

 
 

    if (avaliableQuestions.length === 0 || questionCounter >= MAX_QUESTION) { 

        //END OF THE PAGE 

        return window.location.assign("./end.html"); 

    } 

 
 

    currentQuestion = avaliableQuestions[questionCounter]; 

    question.innerText = currentQuestion.question; 

 
 

}; 

 
 

acceptingAnswer = true; 

 
 
 
 

startGame(); 
