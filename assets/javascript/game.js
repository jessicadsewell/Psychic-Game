
// Variables
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];
var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// var directionsText = document.getElementById("directions-text");
var computerChoiceText = document.getElementById("computerchoice-text")
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guesses-left");
var guessesSoFarText = document.getElementById("guessesSoFar");
// var computerLetter = computerGuess(computerChoices);

function resetGame() {
    // guessesLeftText.textContent = 10;
    guessesSoFar = [];
    // guessesSoFarText.textContent = "";
    // guessCount = 0;
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

window.onload = function(){
    resetGame();
}

// console.log(computerLetter);

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
    console.log(event.key);
    var userGuess = event.key;

    if(computerChoices.indexOf(userGuess) > -1) {
        if (guessesSoFar.indexOf(userGuess) > -1);
            alert("Choose a different letter...");
    } else {
        guessesSoFar.push(userGuess); //push into the array
        userChoiceText.textContent = guessesSoFar.join(); //join addes the commas
        guessesLeftText.textContent = guessesLeft - guessesSoFar.length; 

        if (userGuess === computerGuess && guessesSoFar.length < 10) {
            wins++;
            winsText.textContent = wins;
            alert ("Good guess!" + computerGuess);
            resetGame();
        } else if (userGuess !== computerGuess && guessesLeft === 0) {
            losses++;
            lossesText.textContent = losses;
            alert ("Try again..." + computerGuess);
            resetGame();
        }
    }
}
