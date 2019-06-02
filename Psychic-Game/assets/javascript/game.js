var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var wins = 0;
var losses = 0;
var guessesLeft = 15;
var guessesSoFar = [];

var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

document.onkeyup = function(event) {
    var userGuess = event.key;
    guessesSoFar.push(userGuess);

    if(userGuess === computerChoice && guessesLeft > 0) {
        wins++;
        alert("Good guess, the magic letter was " + computerChoice + ".");
        guessesLeft= 15;
        guessesSoFar = [];
    }else{
        guessesLeft--;
    }
    if(guessesLeft === 0){
        alert("Bummer...you're not psychic... try again, later.")
        losses++;
        guessesSoFar = [];
        guessesLeft= 15;
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