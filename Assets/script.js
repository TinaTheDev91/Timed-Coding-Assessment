var questionList = [
    {
    questionNumber: 1,
    question: "Question 1 placeholder",
    answer: "Option A",
    options: ["Option A", "Option B", "Option C", "Option D"]
    },
    {
    questionNumber: 2,
    question: "Question 2 placeholder",
    answer: "Option A",
    options: ["Option A", "Option B", "Option C", "Option D"]
    },
    {
    questionNumber: 3,
    question: "Question 3 placeholder",
    answer: "Option A",
    options: ["Option A", "Option B", "Option C", "Option D"]
    },
    {
    questionNumber: 4,
    question: "Question 4 placeholder",
    answer: "Option A",
    options: ["Option A", "Option B", "Option C", "Option D"]
    },
    {
    questionNumber: 5,
    question: "Question 5 placeholder",
    answer: "Option A",
    options: ["Option A", "Option B", "Option C", "Option D"]
    }];



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
    questionBox.appendChild(questionElement);
    for (var i = 0; i < questionList[questionCounter].options.length; i++) {
        var optionButton = document.createElement('button');
        var optionSet = document.querySelector('.optionSet');
        optionButton.textContent = questionList[questionCounter].options[i];
        optionSet.appendChild(optionButton);
        optionButton.addEventListener('click', function (event) {
            if (event.target.textContent === questionList[questionCounter].answer) {
                console.log('correct');
                questionCounter++;
                displayQAndA();
            } else {
                console.log('incorrect');
                questionCounter++;
                displayQAndA();
            }
        });
    }
}

