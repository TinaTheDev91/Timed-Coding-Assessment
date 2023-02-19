// get from local storage and display on page :D and then need a button to return to quiz homepage
// localStorage.getItem


var highscoreList = document.querySelector(".high-score-list") //something on html
var highscores = Json.parse(localStorage.getItem('finalScore')) || []

highscoreList.innterhmtl = 
highscores.map(score => {
    return `<li class = 'scores'> ${score.name} - ${score.score}</li>`
}).join('')

var initialInput = document.querySelector("#initials")
var submitButton = document.querySelector(".submit")

submitButton.addEventListener("click", function(event) {
    event.preventDefault();

    var initialSubmission = {
        initials: initialInput.value.trim(),
    };

highscoreList.appendChild(highscores);