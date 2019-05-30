
// Variables
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guesses = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text")
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guesses-left");
var guessesText = document.getElementById("guesses-count");

function computerGuess(computerChoices) {
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

var computerLetter = computerGuess(computerChoices);

console.log(computerLetter);

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
    console.log(event.key);
    var userGuess = event.key;
    
    if (userGuess === computerLetter) {
        wins++;
        console.log("You win!")
    } else {
        (losses++) && (guessesLeft--);
        console.log("You lose.")
    }
    
    document.getElementById("userchoice-text").textContent = userGuess;
    // // computerChoiceText.textContent = "";
    document.getElementById("guesses-left").textContent = "Guesses Left: " + guessesLeft;
    document.getElementById("wins-text").textContent = "Wins: " + wins;
    document.getElementById("losses-text").textContent = "Losses: " + losses;
    document.getElementById("guesses-count").textContent = "Your Guesses so far: ";

    // function reset(gameOver) {
    //     if (guessesLeft = 0) {
    //     console.log("Game Over")
    //     }
    // }
}