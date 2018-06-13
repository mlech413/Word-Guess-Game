

var wins = 0;
var losses = 0;


// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

// Determines which key was pressed.
var userGuess = event.key;

// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// Alerts the key the user pressed (userGuess).
// console.log("User guess: " + userGuess);

// Alerts the Computer's guess.
//  console.log("Computer guess: " + computerGuess);


if (userGuess === "r" && computerGuess === "s")
{
    console.log("You win!");
    wins++;
}

else if (userGuess === "p" && computerGuess === "r")
{
    console.log("You win!");
    wins++;
}


console.log(wins);
console.log(losses);
console.log(ties);

// Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
var html =
    "<p>You choose: " + userGuess + "</p>" +
    "<p>The computer chose: " + computerGuess + "</p>" +
    "<p>wins: " + wins + "</p>" +
    "<p>losses: " + losses + "</p>" +
    "<p>ties: " + ties + "</p>";

// Set the inner HTML contents of the #game div to our html string
document.querySelector("#game").innerHTML = html;

};