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

var questionElement = document.createElement('h2');
var optionButton = document.createElement('button');
var optionSet = document.querySelector(".optionSet");

// question box display toggle
questionBox.style.display = "none";


startButton.addEventListener("click", function() {
    questionBox.style.display = "block";
    infoBox.style.display = "none";
    startButton.style.display = "none";
})

var questionCounter = 0;

for (var i = 0; i < questionList.length; i++) {
    questionElement.textContent = questionList[i].question;
    questionBox.appendChild(questionElement);
    for (var k = 0; k < questionList[k].options[k]; k++) {
        optionButton.textContent = questionList[k].options[k];
        optionSet.appendChild(optionButton[k]);
    }
    optionButton.addEventListener("click", function (event) {
        for(var j = 0; j < questionList.options.length; j++) {
            if(event.target.textContent === questionList[j].answer){
                questionCounter + 1;
            }
        }
    })
}

// var optionA = questionList[i].optionA;
// var optionB = questionList[i].optionB;
// var optionC = questionList[i].optionC;
// var optionD = questionList[i].optionD;
// var question = questionList[i].question;
// var optionSet = questionList[i].options[i];

console.log(questionList[0].options[0])

// optionButton.textContent = optionA;
// optionButton.textContent = optionB;
// optionButton.textContent = optionC;
// optionButton.textContent = optionD;

// var optionBElement = document.createElement('button')
// var optionCElement = document.createElement('button')
// var optionDElement = document.createElement('button')

// questionElement.textContent = questionList[0].question;
// optionButton.textContent = questionList[0].optionA;
// questionBox.appendChild(questionElement);
// questionElement.appendChild(optionButton);
// questionElement.appendChild(optionButton);


// var questionNumber = document.querySelector(".questionNumber");
// var question = document.querySelector(".class");
// var optionA = document.querySelector("#optionA");
// var optionB = document.querySelector("#optionB");
// var optionC = document.querySelector("#optionC");
// var optionD = document.querySelector("#optionD");
// var optionButtons = document.querySelector(".questionButton")

// for (var i = 0; i < questions.length; i++) {
//     var optionButton = document.createElement('button');
//     optionButton.textContent = questions[i].optionA;
//     questionElement.appendChild(optionButton);
//     optionButton.addEventListener("click", function(event){
//         for (var j = 0; j < questions.length; j++){
//             if(event.target.textContent ===[j].optionA;)
//         }
//     })
// }

// var students = [
//     {name: 'Luis', age: 25},
//     {name: 'Juan', age: 20},
//     {name: 'Pedro', age: 30},
//     {name: 'Maria', age: 28},
//     {name: 'Jose', age: 22},
// ]

// var listElement = document.getElementsByClassName('student-list')[0];
// var nameElement = document.getElementById('name');
// var ageElement = document.getElementById('age');

// for (var i = 0; i < students.length; i++) {
//     var listItem = document.createElement('p');
//     listItem.textContent = students[i].name;
//     listElement.appendChild(listItem);
//     listItem.addEventListener("click", function(event){
//         for(var j = 0; j < students.length; j++){
//            if(event.target.textContent === students[j].name){
//             nameElement.textContent = students[j].name;
//             ageElement.textContent = students[j].age;
//            }
//         }
        
//     })
// }