// each question and answer set as its own object
// var question1 = {
//     questionNumber: "1 of 5",
//     question: "Question 1 placeholder",
//     optionA: "Option A",
//     optionB: "Option B",
//     optionC: "Option C",
//     optionD: "Option D",
// }

// var question2 = {
//     questionNumber: "2 of 5",
//     question: "Question 2 placeholder",
//     optionA: "Option A",
//     optionB: "Option B",
//     optionC: "Option C",
//     optionD: "Option D",
// }

// var question3 = {
//     questionNumber: "3 of 5",
//     question: "Question 3 placeholder",
//     optionA: "Option A",
//     optionB: "Option B",
//     optionC: "Option C",
//     optionD: "Option D",
// }

// var question4 = {
//     questionNumber: "4 of 5",
//     question: "Question 4 placeholder",
//     optionA: "Option A",
//     optionB: "Option B",
//     optionC: "Option C",
//     optionD: "Option D",
// }

// var question5 = {
//     questionNumber: "5 of 5",
//     question: "Question 5 placeholder",
//     optionA: "Option A",
//     optionB: "Option B",
//     optionC: "Option C",
//     optionD: "Option D",
// }

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
})

// info box display toggle
startButton.addEventListener("click", function() {
    infoBox.style.display = "none";
})

startButton.addEventListener("click", function () {
    startButton.style.display = "none";
})

// previous and next buttons display toggle
var questionNavigation = document.querySelector(".questionNavigation");

// remove display of previous and nav buttons before starting
questionNavigation.style.display = "none";

startButton.addEventListener("click", function () {
    questionNavigation.style.display = "block";
})


    for (var i = 0; i < questions.length, i++) {
    var next = document.querySelector(".nextButton");
    (function(index){
        next.addEventListener("click", function() {
            console.log(index)
        })
    })
    }

// // questions
// var question = document.querySelector(".question");
// var questionNumber = document.querySelector(".questionNumber");
// var optionA = document.querySelector(".optionA");
// var optionB = document.querySelector(".optionB");
// var optionC = document.querySelector(".optionC");
// var optionD = document.querySelector(".optionD");

