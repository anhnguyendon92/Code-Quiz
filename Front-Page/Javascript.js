function quizGame(){
    let time = 0;
    const defaultTime = (15*questions.length);
    const penaltyTime = 15;
    let currentQuestion = 0;
    timeDisplayEl = document.getElementById("time-display")


    const questions = [
          {
            title: "Commonly used data types DO NOT include:",
            choices: ["strings", "booleans", "alerts", "numbers"],
            answer: "alerts",
            userAnswer: "alerts",
            outcome: false,
            time: 0
          },
          {
            title: "The condition in an if / else statement is enclosed within ____.",
            choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
            answer: "parentheses",
            userAnswer: "",
            outcome: false,
            time: 0
          },

         {
            title: "Inside which HTML element do we put the JavaScript?",
            choices: ["script", "javascript", "js", "scripting"],
            answer: "script",
            userAnswer: "",
            outcome: false,
            time: 0
          },
  
         {
            title: 'Where is the correct place to insert a JavaScript?',
            choices: ["Both the head section and the body section are correct", "The body section", "The head section", "The title section"],
            answer: "The body section",
            userAnswer: "",
            outcome: false,
            time: 0
          },
 
        {
            title: 'What is the correct syntax for referring to an external script called "xxx.js"?',
            choices: ["script src='xxx.js'", "script href='xxx.js'", "script name='xxx.js'", "script js='xxx.js'"],
            answer: "script src='xxx.js'",
            userAnswer: "",
            outcome: false,
            time: 0
          }
 
        ]}