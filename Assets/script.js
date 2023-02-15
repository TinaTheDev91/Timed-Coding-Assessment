// each question and answer set as its own object
var question1 = {
    questionNumber: "1 of 5",
    question: "Question 1 placeholder",
    optionA: "Option A",
    optionB: "Option B",
    optionC: "Option C",
    optionD: "Option D",
}

var question2 = {
    questionNumber: "2 of 5",
    question: "Question 2 placeholder",
    optionA: "Option A",
    optionB: "Option B",
    optionC: "Option C",
    optionD: "Option D",
}

var question3 = {
    questionNumber: "3 of 5",
    question: "Question 3 placeholder",
    optionA: "Option A",
    optionB: "Option B",
    optionC: "Option C",
    optionD: "Option D",
}

var question4 = {
    questionNumber: "4 of 5",
    question: "Question 4 placeholder",
    optionA: "Option A",
    optionB: "Option B",
    optionC: "Option C",
    optionD: "Option D",
}

var question5 = {
    questionNumber: "5 of 5",
    question: "Question 5 placeholder",
    optionA: "Option A",
    optionB: "Option B",
    optionC: "Option C",
    optionD: "Option D",
}

// each question and answer set placed in an array
questions = [question1, question2, question3, question4, question5]

// event listener for start button
var startButton = document.querySelector(".start-button");
var timer = document.querySelector(".timer");
var timeRemaining = 180;

startButton.addEventListener("click", function() {
    var timerInterval = setInterval(function() {
        timeRemaining--;
        timer.textContent = timeRemaining;

        if (timeRemaining === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }

    }, 180000)
})

function sendMessage() {
    timer.textContent = "TIME'S UP!"
}