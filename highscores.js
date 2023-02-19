// get from local storage and display on page :D and then need a button to return to quiz homepage
// localStorage.getItem


var highscoreList = document.querySelector(".high-score-list") //something on html
var highscores = Json.parse(localStorage.getItem('finalScore')) || []

highscoreList.innterhmtl = 
highscores.map(score => {
    return `<li class = 'scores'> ${score.name} - ${score.score}</li>`
}).join('')

highscoreList.appendChild(highscores);