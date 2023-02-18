// get from local storage and display on page :D and then need a button to return to quiz homepage
// localStorage.getItem


var highscoreList = //something on htmnl
var highscores = Json.parse(localStorage.getItem('finalScore')) || []

highscoreList.innterhmtl = 
highscores.map(score => {
    return `<li class = 'scoressss'> ${score.name} - ${score.score}</li>`
}).join('')