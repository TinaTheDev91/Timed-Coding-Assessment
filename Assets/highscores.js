var highscoreList = document.querySelector(".high-score-list");
var highscores = JSON.parse(localStorage.getItem('finalScore'));
var initialInput = document.getElementById("initials");
var submitButton = document.querySelector(".submit");

// initial submission with score
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