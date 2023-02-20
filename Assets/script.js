var questionList = [
    {
    questionNumber: 1,
    question: "What does || mean?",
    answer: "C) OR",
    options: 
    ["A) AND",
     "B) ABSOLUTE VALUE",
     "C) OR", 
     "D) ELSE"]
    },
    {
    questionNumber: 2,
    question: "What tools do you use to make a website responsive?",
    answer: "D) BOTH A AND B",
    options: 
    ["A) FLEX BOX", 
     "B) MEDIA QUERIES", 
     "C) RESETS", 
     "D) BOTH A AND B"]
    },
    {
    questionNumber: 3,
    question: "What JavaScript property is used to add information to the user's local storage?",
    answer: "setItem",
    options: 
    ["storeItem",
     "saveItem",
     "keepItem",
     "setItem"]
    },
    {
    questionNumber: 4,
    question: "What platform is most commonly used for storing, accessing and sharing code?",
    answer: "GitHub",
    options: 
    ["GitLab",
     "GitHub",
     "GitStorage",
     "GitHome"]
    },
    {
    questionNumber: 5,
    question: "Which of the following IS NOT a method of retrieving HTML elements in JavaScript?",
    answer: "grabHtmlByTag",
    options: 
    ["querySelector",
     "getElementById",
     "grabHtmlByTag",
     "getElementByClass"]
    },
    {
    questionNumber: 6,
    question: "",
    answer: "",
    options: [""]
    },
  ];

var score = 0;

// event listener for start button
var startButton = document.querySelector(".start-button");
var timer = document.querySelector(".timer");
var timeRemaining = 180;
var questionBox = document.querySelector(".question-box");
var infoBox = document.querySelector(".info")


// start timer
startButton.addEventListener("click", function() {
    var timerInterval = setInterval(function() {
        timeRemaining--;
        timer.textContent = "Timer: " +timeRemaining;
        
        if (timeRemaining === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
        
        function sendMessage() {
            timer.textContent = "TIME'S UP!"
        }
        
    }, 1000)
})

// question box display toggle
questionBox.style.display = "none";

// quiz start event listener
startButton.addEventListener("click", function() {
    questionBox.style.display = "block";
    infoBox.style.display = "none";
    startButton.style.display = "none";
    displayQAndA();
})

// generate questions, auto progress when answered
var questionCounter = 0;

function displayQAndA() {
    questionBox.innerHTML = ` <div class = "optionSet"></div>`;
    var questionElement = document.createElement('h2');
    questionElement.textContent = questionList[questionCounter].question;
    questionBox.prepend(questionElement);
    for (var i = 0; i < questionList[questionCounter].options.length; i++) {
        var optionButton = document.createElement('button');
        var optionSet = document.querySelector('.optionSet');
        optionButton.textContent = questionList[questionCounter].options[i];
        optionSet.appendChild(optionButton);
        optionButton.addEventListener('click', function (event) {
            if (event.target.textContent === questionList[questionCounter].answer) {
                console.log('correct');
                score+= 10;

                console.log("My current score is", score)
                questionCounter++;
                displayQAndA();
            } else {
                console.log('incorrect');
                questionCounter++;
                displayQAndA();
            }
            if (questionCounter === 5) {
                localStorage.setItem("finalScore", score)
                loseGame()
            }
        });
    }
}


// move to score page 
function loseGame() {
    localStorage.setItem("finalScore",score)
    return window.location.href= "highscores.html"
}
