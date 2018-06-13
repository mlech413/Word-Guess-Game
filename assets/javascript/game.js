
var computerPickMade = 'n';
var validLetter = "n";
var wins = 0;
var losses = 0;
var computerWord = "not selected";
var alphabet = [
    "a" ,"b" ,"c" ,"d" ,"e" ,"f" ,"g" ,"h" ,"i" ,"j" ,"k" ,"l" ,"m" ,"n" ,"o" ,"p" ,"q" ,"r" ,"s" ,"t" ,"u" ,"v" ,"w" ,"x", "y", "z" 
    ]
var computerChoices = [
      "apple"
    , "pear"
    , "strawberry"
    ];

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

// Determines which key was pressed.
var userGuess = event.key;

// Skip this word selection process if the computer already picked it's word.
if (computerPickMade == "n") {
    // Randomly chooses a choice from the word array computerChoices.
    computerWord = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    computerPickMade = "y";
}
console.log(computerWord);



// Check if a valid letter chosen from the alphabet.
for (var i = 0; i < alphabet.length; i++) {
    if (userGuess == alphabet[i]) {
        validLetter = "y";
    }
}
console.log("validLetter: " + validLetter)

// Only process if valid letter chosen.
if (validLetter == "y") {

    if (userGuess === "r")
    {
        console.log("You win!");
        wins++;
    }

    else if (userGuess === "p")
    {
        console.log("You win!");
        wins++;
    }


    console.log(wins);
    console.log(losses);

    // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
    var html =
        "<p>You choose: " + userGuess + "</p>" +
        "<p>wins: " + wins + "</p>" +
        "<p>losses: " + losses + "</p>"

    // Set the inner HTML contents of the #game div to our html string
    document.querySelector("#game").innerHTML = html;
    }
};
