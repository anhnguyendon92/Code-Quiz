function quizGame() {

    var time = 0;
    var defaultTime = 60;
    var penaltyTime = 15;
    var currentQuestion = 0;
    timeDisplayEl = document.getElementById("time-display")


    function firstButtons() {
        document.getElementById("start-btn").addEventListener("click", function () {
            document.getElementById("main-container").innerHTML = "";
            currentQuestion = 0;
            renderQuestion();
            timer();
        });
        document.getElementById("view-highscore-btn").addEventListener("click", function () {
            handleHighscore();
        });
    }
    firstButtons();
    // Start a timer and display countdown
    function timer() {
        time = defaultTime;
        mainInterval = setInterval(function () {
            time = time - 1;
            timeDisplayEl.innerHTML = time;
            if (time <= 0) {
                clearInterval(mainInterval);
                timeDisplayEl.innerHTML = "00";
                renderEndGame();
            }
        }, 1000);

    }

    let containerEl = document.getElementById("main-container");

    function createRow(rowTotal, content) {
        for (let i = 0; i < rowTotal; i++) {
            const rowEl = document.createElement("div");
            rowEl.setAttribute("class", "row")
            const colEl = document.createElement("div");
            colEl.setAttribute("class", "col");
            colEl.append(content);
            rowEl.append(colEl);
            containerEl.append(rowEl);

        }

    }

    function renderQuestion() {
        // Used to clear start button at beginning and clear previous question;
        containerEl.innerHTML = "";
        const questionEl = document.createElement("h3");
        questionEl.innerHTML = questions[currentQuestion].title;

        createRow(1, questionEl);

        let answerEl = "";
        for (let i = 0; i < questions[currentQuestion].choices.length; i++) {

            answerEl = document.createElement("button");
            answerEl.setAttribute("class", "btn btn-secondary m-1");
            answerEl.innerHTML = questions[currentQuestion].choices[i];
            createRow(1, answerEl)

            answerEl.addEventListener("click", function () {
                questions[currentQuestion].userAnswer = questions[currentQuestion].choices[i];
                answerCheck();
                switchQuestion();
            })
        }

    }

    function answerCheck() {

        if (questions[currentQuestion].answer === questions[currentQuestion].userAnswer) {
            questions[currentQuestion].outcome = true;
            questions[currentQuestion].time = time;
            document.getElementById("outcomeDisplay").innerHTML = "Correct!";
            setTimeout(function () {
                document.getElementById("outcomeDisplay").innerHTML = "";
            }, 1500);

        } else {
            subtractTime()
            questions[currentQuestion].outcome = false;
            document.getElementById("outcomeDisplay").innerHTML = "Wrong!";
            setTimeout(function () {
                document.getElementById("outcomeDisplay").innerHTML = "";
            }, 1500);

        }
    }

    // Decide if time should be subtracted
    function subtractTime() {
        // Subtracts
        time = time - penaltyTime;
    }



    function switchQuestion() {
        if (currentQuestion <= (questions.length - 2)) {
            currentQuestion = currentQuestion + 1;
            renderQuestion();
        } else {
            time = 0;

        }
    }

    // Calculate final score
    function calcFinalScore() {
        let finalScore = 0;
        for (let i = 0; i < questions.length; i++) {
            if (questions[i].outcome) {
                finalScore = finalScore + questions[i].time;
            }
            else {

            }
        }
        return finalScore;
    }

    function renderEndGame() {

        containerEl.innerHTML = "";


        const endGameMessageEl = document.createElement('div');
        endGameMessageEl.setAttribute('class', 'display-3');
        endGameMessageEl.innerText = "All done!";


        const userScoreMessageEl = document.createElement('h4');
        userScoreMessageEl.innerHTML = "Your score was: " + calcFinalScore();
        endGameMessageEl.append(userScoreMessageEl);


        const initialMessageEl = document.createElement('div');
        initialMessageEl.setAttribute('class', 'user-input');
        initialMessageEl.innerHTML = "Enter your intials: <input type='text' id='initial-input'></input>"
        endGameMessageEl.append(initialMessageEl);


        const addHighScoreBtnEl = document.createElement('button');
        addHighScoreBtnEl.setAttribute('class', 'btn btn-success');
        addHighScoreBtnEl.setAttribute('id', 'submit-btn');
        addHighScoreBtnEl.innerText = "Submit Highscore";
        endGameMessageEl.append(addHighScoreBtnEl);


        createRow(1, endGameMessageEl);

        addHighScoreBtnEl.addEventListener("click", function () {

            let highscores = [];
            if (localStorage.getItem('localHighscores')) {
                highscores = localStorage.getItem('localHighscores');
                https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
                highscores = JSON.parse(highscores);
            } else {
                let highscores = [];
            }
            const userInitial = document.getElementById('initial-input').value;
            const userScore = calcFinalScore();
            highscores[(highscores.length)] = {
                initial: userInitial,
                score: userScore
            }
            // Sorts highscores based on the best score in the array. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
            highscores.sort(function (a, b) {
                return b.score - a.score;
            })

            // Got code for JSON.stringify at https://blog.logrocket.com/the-complete-guide-to-using-localstorage-in-javascript-apps-ba44edb53a36/
            window.localStorage.setItem('localHighscores', JSON.stringify(highscores));

            handleHighscore(highscores);
        });
    }

    // Make code restart and be able to erase highscores

    function handleHighscore(highscores) {

        if (localStorage.getItem('localHighscores')) {
            highscores = localStorage.getItem('localHighscores');
            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
            highscores = JSON.parse(highscores);
        } else {
            highscores = [];
        }
        document.body.innerHTML = "";
        const highscoreContainerEl = document.createElement('div');
        highscoreContainerEl.setAttribute('class', 'container');

        // title for highscore page
        const highscoreTitleEl = document.createElement('div');
        highscoreTitleEl.setAttribute('class', 'display-2 text-center mb-3')
        highscoreTitleEl.innerHTML = "Highscores";
        highscoreContainerEl.append(highscoreTitleEl);

        // element for each highscore and appends them to the container.
        for (let i = 0; i < highscores.length; i++) {
            let highscoreDisplayEl = document.createElement('div');
            highscoreDisplayEl.setAttribute('class', 'm-1 bg-secondary text-white p-1')
            highscoreDisplayEl.innerText = (i + 1) + ". " + highscores[i].initial + " - " + highscores[i].score;
            highscoreContainerEl.append(highscoreDisplayEl);
        }

        //restart button
        restartBtnEl = document.createElement('button');
        restartBtnEl.setAttribute('class', 'btn btn-success m-1');
        restartBtnEl.innerText = 'Restart Quiz';
        highscoreContainerEl.append(restartBtnEl);
        restartBtnEl.addEventListener('click', function () {
            document.location.reload()
        });
        //Creates clear highscores button
        clearScoresBtnEl = document.createElement('button');
        clearScoresBtnEl.setAttribute('class', 'btn btn-danger m-1');
        clearScoresBtnEl.innerText = 'Clear Highscores';
        highscoreContainerEl.append(clearScoresBtnEl);
        clearScoresBtnEl.addEventListener('click', function () {
            window.localStorage.removeItem('localHighscores');
            handleHighscore();
        });
        // Appends highscore content to body so it is viewable.
        document.body.append(highscoreContainerEl);

    }
}
quizGame()