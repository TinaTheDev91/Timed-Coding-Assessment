// get from local storage and display on page :D and then need a button to return to quiz homepage
// localStorage.getItem


var highscoreList = document.querySelector(".high-score-list"); //something on html
var highscores = JSON.parse(localStorage.getItem('finalScore'));
var initialInput = document.getElementById("initials");
var submitButton = document.querySelector(".submit");

submitButton.addEventListener("click", function() {
    var initialVariable = initialInput.value.trim();
    console.log(initialVariable)
    var initialSubmission = {
        initials: initialInput.value.trim(),
    };
    console.log(initialSubmission);
    
    var scoreListElement = document.createElement('li');
    var initialScore = initialVariable + " - " + highscores; 
    scoreListElement.textContent = initialScore;      
    highscoreList.appendChild(scoreListElement);

    localStorage.setItem("initials", JSON.stringify(initialSubmission));

    }
    );
    
    
    // highscoreList.innerhmtl = 
    // highscores.map(score => {
        //     return `<li class = 'scores'> ${score.name} - ${score.score}</li>`
        // }).join('')
        
        // highscoreList.appendChild(highscores);
        
        
        // highscoreList.innerHTML = localStorage.getItem("initials")
        
    // function displayScores() {
        // highscoreList.innerHTML = `<li class = 'scores'></li>`;

        // var initials = JSON.parse(localStorage.getItem('initials'));
        // var scoreListElement = document.createElement('li');
        // var initialScore = initials + " - " + highscores; 
        // scoreListElement.textContent = initialScore;      
        // highscoreList.appendChild(scoreListElement);
    
    // } displayScores();


console.log(scoreListElement)



// console.log(highscoreList)



