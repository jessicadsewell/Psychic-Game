
// // Variables
// var wins = 0;
// var losses = 0;
// var guessesLeft = 10;
// var guessesSoFar = [];
// var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// // var directionsText = document.getElementById("directions-text");
// var computerChoiceText = document.getElementById("computerchoice-text")
// var winsText = document.getElementById("wins-text");
// var lossesText = document.getElementById("losses-text");
// var guessesLeftText = document.getElementById("guesses-left");
// var guessesSoFarText = document.getElementById("guessesSoFar");


// // function resetGame() {
// //     guessesLeft.textContent = 0;
// //     guessesSoFar = [];
// //     // guessesSoFarText.textContent = "";
// //     guessCount = 0;
// //     computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
// // }

// // window.onload = function(){
// //     resetGame();
// // }

// // This function is run whenever the user presses a key.
// document.onkeyup = function(event) {
//     var userGuess = event.key;
//     var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
//     console.log(event.key);
//     console.log(computerGuess);
    
//     if(computerChoices.indexOf(userGuess) == -1) {
//         if(guessesSoFar.indexOf(userGuess) === -1);
//             alert("Choose a different letter...");

//     } else if (userGuess.indexOf(computerChoices)) {
//         guessesSoFarText.push(userGuess); //push into the array
//         guessesSoFarText.textContent= userGuess + " , "; //join addes the commas
//         guessesLeftText.textContent = guessesLeft.length - guessesSoFar.length; 

//         if (userGuess === computerGuess && guessesLeft > 0) {
//             wins++;
//             winsText.textContent = wins;
//             alert("Good guess, the computer was thinking of " + computerGuess);
//             // resetGame();
//         } else if (userGuess !== computerGuess && guessesLeft > 0) {
//             losses++;
//             lossesText.textContent = losses;
//             alert("Try again..." + computerGuess);
//             // resetGame();
//         }
//     }
// };

var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var wins = 0;
var losses = 0;
var guessesLeft = 15;
var guessesSoFar = [];

var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

document.onkeypress = function(event) {
    var userGuess = event.key;

    if(userGuess === computerChoice && guessesLeft > 0) {
        wins++;
        alert("Good guess, I was also thinking of " + computerChoice);
    }else{
        guessesLeft--;
        losses++;
    }
    if(guessesLeft === 0){
        alert("Turns out you're not psychic... try again, later.")
    }

    console.log(userGuess);
    console.log(computerChoice);
    console.log(guessesLeft);
    console.log(guessesSoFar);

    document.getElementById("wins-text").innerHTML = "Wins: " + wins;
    document.getElementById("losses-text").innerHTML = "Losses: " + losses;
    document.getElementById("guesses-left").innerHTML = "Guesses left: " + guessesLeft;
    document.getElementById("guessesSoFar").innerHTML = "Your Guesses so far: " + guessesSoFar; 
}