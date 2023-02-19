// get from local storage and display on page :D and then need a button to return to quiz homepage
// localStorage.getItem


var highscoreList = document.querySelector(".high-score-list"); //something on html
var highscores = JSON.parse(localStorage.getItem('finalScore'));

var initialInput = document.getElementById("initials");
var submitButton = document.querySelector(".submit");

submitButton.addEventListener("click", function() {
  
    var initialSubmission = {
        initials: initialInput.value.trim(),
    };
    console.log(initialSubmission);
    
    localStorage.setItem("initials", JSON.stringify(initialSubmission));

} function displayScores() {
    highscoreList.innerHTML = `<li class = 'scores'></li>`;
    var initials = JSON.parse(localStorage.getItem('initials'));
    var scoreListElement = document.createElement('li');
    var initialScore = initials + " - " + highscores; 
    scoreListElement.textContent = initialScore;      
    highscoreList.appendChild(scoreListElement);

} displayScores();

);


// highscoreList.innerhmtl = 
// highscores.map(score => {
//     return `<li class = 'scores'> ${score.name} - ${score.score}</li>`
// }).join('')

// highscoreList.appendChild(highscores);


// highscoreList.innerHTML = localStorage.getItem("initials")



console.log(initialScore)



// console.log(highscoreList)



