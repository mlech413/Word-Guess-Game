
var computerPickMade = 'n';
var validLetter = false;
var wins = 0;
var losses = 0;
var correctGuesses = 0;
var currentPickCorrect = false;
var guessesRemaining = 12;
var computerWord = "";
var finalMessage = "";
var gameOver = false;
var p = 0;
var pickedLetters = [];
var alphabet = [
    "a" ,"b" ,"c" ,"d" ,"e" ,"f" ,"g" ,"h" ,"i" ,"j" ,"k" ,"l" ,"m" ,"n" ,"o" ,"p" ,"q" ,"r" ,"s" ,"t" ,"u" ,"v" ,"w" ,"x", "y", "z" 
    ]
var computerChoice = [
      "apple"
    , "pear"
    , "strawberry"
    ];

// Randomly chooses a choice from the word array computerChoices.
computerWord = computerChoice[Math.floor(Math.random() * computerChoice.length)];
console.log("start: " + computerWord);

// Create a new empty array, with num of items in array matching num of letters in computer selected word.
var wordToGuess = new Array(computerWord.length);
console.log(wordToGuess);

// Set initial display array for the word to be all empty '_' spaces.
for (var i = 0; i < wordToGuess.length; i++) {
    wordToGuess[i] = "_"
}
console.log(wordToGuess);

// Create display html text for display of blank word at start.
var blankLinesHtml = "<h2>"
for (var w = 0; w < wordToGuess.length; w++) {
    blankLinesHtml = blankLinesHtml + wordToGuess[w] + " ";
}
var topHtml =
"<h2>Word Guess Game</h2>" +
"<h2>Press any letter to get started!</h2>";
var openingHtml = blankLinesHtml + "</h2>";   
// Set the inner HTML contents of the #game div to our html string
document.querySelector("#game").innerHTML = topHtml + openingHtml;




// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;
    // Reset indicators
    validLetter = false;
    currentPickCorrect = false;
    // Skip this word selection process if the computer already picked a word.
    // if (computerPickMade == "n") {
    //     Randomly chooses a choice from the word array computerChoices.
    //     computerWord = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    //     computerPickMade = "y";
    // }
    console.log(computerWord);



    // Check the alphabet array to see if a valid letter was chosen.
    for (var v = 0; v < alphabet.length; v++) {
        if (userGuess == alphabet[v]) {
            validLetter = true;
        }
    }
    console.log("validLetter: " + validLetter)

    // Only proceed if a valid letter is chosen.
    if (validLetter) {

        // Match the userGuess letter to each letter of the computerWord.
        var alreadyPicked = false;
        for (var i = 0; i < computerWord.length; i++) {
            // console.log(computerWord.charAt(i));
            // If correct guess, the userGuess matches one of the letters in the computer's word, so store the location
            // of that letter within the word.
            if (userGuess == computerWord.charAt(i)) {
                console.log("if (userGuess == computerWord.charAt(i)): " + userGuess + ", " + computerWord.charAt(i));
                if (wordToGuess[i] != "_") {
                    alreadyPicked = true;
                    console.log("alreadyPicked: " + alreadyPicked);
                }
                currentPickCorrect = true;
                wordToGuess[i] = userGuess;
                console.log("Set wordToGuess[i] = userGuess:" + wordToGuess[i]);
                console.log("wordToGuess: " + wordToGuess);
            }
        }
        console.log("alreadyPicked: " + alreadyPicked);
        
        if (alreadyPicked) {
            pickResult = "You already got that one!"
            console.log("wordToGuess: " + wordToGuess);
        }
        else if (currentPickCorrect) {
            pickResult = "Correct!";
            correctGuesses++;
        }
        else {
            pickResult = "Incorrect!";
            guessesRemaining--;
            
            console.log("p: " + p);
            console.log("pickedLetters[p]: " + pickedLetters[p]);
            pickedLetters[p]  = " " + userGuess;
            console.log("pickedLetters[p]: " + pickedLetters[p]);
            console.log("pickedLetters: " + pickedLetters);
            p++;
            console.log("wordToGuess[i]: " + wordToGuess[i]);
            console.log("userGuess: " + userGuess);
        }

        if (correctGuesses >= computerWord.length) {
            finalMessage = "You win!!!!!";
            wins++;
            gameOver = true;
        }
        else if (guessesRemaining <= 0) {
            finalMessage = "You Lose!";
            losses++;
            gameOver = true;
        }
        console.log("finalMessage: " + finalMessage);
        console.log("correctGuesses: " + correctGuesses);
        console.log("guessesRemaining: " + guessesRemaining);
        console.log("pickResult: " + pickResult);
        console.log("gameOver: " + gameOver)
        console.log("Wins: " + wins);
        console.log("Losses: " + losses);

        
        var linesHtml = "<h2>"
        for (var w = 0; w < wordToGuess.length; w++) {
            linesHtml = linesHtml + wordToGuess[w] + " ";
        }
            linesHtml + "</h2>";
        var topHtml =
            "<h2>Word Guess Game</h2>" +
            "<h2>Press any letter to get started!</h2>";
        var mainHtml =
            "<h2>You chose: " + pickedLetters + "</h2>" +
            "<h2>Guesses reamining: " + guessesRemaining + "</h2>" +
            "<h2>wins: " + wins + "</h2>" +
            "<h2>losses: " + losses + "</h2>"   
        var endMessage =
            "<h1>" + finalMessage + "</h1>"
        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = topHtml + linesHtml + mainHtml + endMessage;

        }
};
