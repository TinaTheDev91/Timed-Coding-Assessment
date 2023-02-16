var questions = [
    {
    questionNumber: 1,
    question: "Question 1 placeholder",
    optionA: "Option A",
    optionB: "Option B",
    optionC: "Option C",
    optionD: "Option D",
    },
    {
    questionNumber: 2,
    question: "Question 2 placeholder",
    optionA: "Option A",
    optionB: "Option B",
    optionC: "Option C",
    optionD: "Option D",
    },
    {
    questionNumber: 3,
    question: "Question 3 placeholder",
    optionA: "Option A",
    optionB: "Option B",
    optionC: "Option C",
    optionD: "Option D",
    },
    {
    questionNumber: 4,
    question: "Question 4 placeholder",
    optionA: "Option A",
    optionB: "Option B",
    optionC: "Option C",
    optionD: "Option D",
    },
    {
    questionNumber: 5,
    question: "Question 5 placeholder",
    optionA: "Option A",
    optionB: "Option B",
    optionC: "Option C",
    optionD: "Option D",
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

startButton.addEventListener("click", function() {
    questionBox.style.display = "block";
    infoBox.style.display = "none";
    startButton.style.display = "none";
})


var questionCounter = 0;

var questionNumber = document.querySelector(".questionNumber");
var question = document.querySelector(".class");
var optionA = document.querySelector("#optionA");
var optionB = document.querySelector("#optionB");
var optionC = document.querySelector("#optionC");
var optionD = document.querySelector("#optionD");
var optionButtons = document.querySelector(".questionButton")

