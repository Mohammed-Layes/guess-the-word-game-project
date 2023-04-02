// Create global variables to select the following elements:

// The unordered list where the player’s guessed letters will appear.
const guessedLettersList = document.querySelector(".guessed-letters");

// The button with the text “Guess!” in it.
const guessBtn = document.querySelector(".guess");

// The text input where the player will guess a letter.
const letter = document.querySelector(".letter");

// The empty paragraph where the word in progress will appear.
const wordInProgress = document.querySelector(".word-in-progress");

// The paragraph where the remaining guesses will display.
const remaining = document.querySelector(".remaining");

// The span inside the paragraph where the remaining guesses will display.
const guessSpan = document.querySelector(".remaining span");

// The empty paragraph where messages will appear when the player guesses a letter.
const message = document.querySelector(".message");

// The hidden button that will appear prompting the player to play again.
const playAgainBtn = document.querySelector(".play-again");

// Create another global variable called word and give it the value of "magnolia". 
let word = "magnolia";

// Create another global variable called guessedLetters with an empty array. This array will contain all the letters the player guesses. 
let guessedLetters = []; 

// Create a global variable called remainingGuesses and set it to a value of 8. The value 8 is the maximum number of guesses the player can make. You can decrease or increase this value to make the game harder or easier for the player! Hint: The value of the remainingGuesses variable will change over time.
let remainingGuesses = 8;

// Add an async function called getWord() to fetch data from a file at this address: “https://gist.githubusercontent.com/skillcrush-curriculum/7061f1d4d3d5bfe47efbfbcfe42bf57e/raw/5ffc447694486e7dea686f34a6c085ae371b43fe/words.txt”. Hint: You also retrieved data from a file in the school field trip exercise in a previous lesson. The difference here is that you’re fetching data from a text file instead of a JSON file. In the second await statement, use .text() instead of .json(). 
const getWord = async function () {
    const response = await fetch("https://gist.githubusercontent.com/skillcrush-curriculum/7061f1d4d3d5bfe47efbfbcfe42bf57e/raw/5ffc447694486e7dea686f34a6c085ae371b43fe/words.txt");
    const words = await response.text();
    const wordArray = words.split("\n");
    const randomIndex = Math.floor(Math.random() * wordArray.length);
    // word = wordArray[randomIndex].trim();
    // placeholder(word);
    word = wordArray[randomIndex].trim();
    placeholder(word);
  }; 




// Write a Function to Add Placeholders for Each Letter

// Create and name a function to update the paragraph’s innerText for the “words-in-progress” element with circle symbols (●) to represent each letter in the word. The symbols will stay on the screen until the correct letter is guessed (in a future step). Hint: Copy and paste the ● symbol into your code!
// const placeholder = function (word) {
//     let placeholder = "";
//     // const wordArray = word.split("");
//     // console.log(wordArray);
//     for (const letter of word) {
//         placeholder += "●";
//     }
//     // console.log(placeholder)
//     wordInProgress.innerText = placeholder;
// };

// Display our symbols as placeholders for the chosen word's letters
const placeholder = function (word) {

    const placeholderLetters = [];
    for (const letter of word) {
      console.log(letter);
      placeholderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");

  };

// Call the function and pass it the word variable as the argument. You should see 8 circle symbols on the screen, one for each letter in the word “magnolia.” Hint: You’ll need to use an array and then join it back to a string using the .join("") method.
// placeholder(word);
// Call to addPlaceholder(word) is now replaced with call to getWord().
getWord();

// Add an Event Listener for the Button

// Add an event listener for when a player clicks the Guess button. In the callback function, add a parameter for the event: e.
// Because you’re working with a form, you want to prevent the default behavior of clicking a button, the form submitting, and then reloading the page. To prevent this reloading behavior, add this line of code at the top of the callback function: e.preventDefault();.
// Create and name a variable to capture the value of the input. Log out the value of the variable capturing the input. Then, empty the value of the input. You should see the letter you enter into the input field in the console when the Guess button is clicked. 
// In the command line, add and commit your changes. Push the changes up to GitHub. Copy the link to your repo and submit it below. Part 1 of the project is done! 😀
// Inside the event handler function for the Guess button, empty the text of the message element.
// At the bottom of the event handler, call the function you made that checks the input, and pass it the input value as an argument. Save the result of this function call to a variable and log it out to the console.
// Use the console to check the input. Enter a character other than a letter into the input. Notice how the message updates on the screen!


guessBtn.addEventListener("click", function(e) {

    e.preventDefault();
    message.innerText = "";

    const letterGuess = letter.value;
    // console.log(letterInput);
    let validatedLetter = checkInput(letterGuess);
    // console.log(validationResult);
    // message.innerText = validationResult;
    if (validatedLetter) {
        makeGuess(letterGuess);
    }

    letter.value = "";

});

// Create a Function to Check Player’s Input

// Create and name a function that accepts the input value as a parameter. This function’s purpose is to validate the player’s input.
// Inside the function, create a variable for the accepted letter sequence: const acceptedLetter = /[a-zA-Z]/. Now your code uses a regular expression to ensure the player inputs a letter!
// Still inside the function, use a conditional block to check for different scenarios. First, check if the input is empty. Then, check if the player has entered more than one letter. Finally, check if they’ve entered a character that doesn’t match the regular expression pattern. Hint: You’ll need the .match() method here. Each condition should have a message directing the player on what to input. 
// If all the other conditions aren’t met, the input is a letter, which is what you’re looking for! Return the input.
const checkInput = function (input) {

    const acceptedLetter = /[a-zA-Z]/;
    let checkInputResult = "";
    
    if (input.length === 0) {
        message.innerText = "Please enter an alphabet.";
       
    } else if (input.length > 1) {
        message.innerText = "Please enter only 1 alphabet.";
       
    } else if (!input.match(acceptedLetter)) {
        message.innerText = "Please enter a letter betwee A-Z!";
       
    } else {
        return input;
    }

};

// Create a Function to Capture Input

// Below the function that checks input, create a new function called makeGuess that accepts a letter as the parameter. 
// JavaScript is case sensitive, so it sees uppercase and lowercase letters as different characters. The easiest way to handle case-sensitivity is to convert all letters to one casing. We recommend converting your letter parameter to uppercase. Once the letter transforms to uppercase, check to see if your guessedLetters array already contains that letter.
// If the player already guessed the same letter, update the message to inform the player they’ve already guessed that letter and try again. If they haven’t guessed that letter before, add the letter to the guessedLetters array.
// Log out the guessedLetters array to the console.
// Return to the event handler for the Guess button. Make sure that the variable mapped to the result of the function validates that the player’s input is returning a letter (as opposed to “undefined”). If it’s returning a letter, pass it as an argument to your makeGuess function.
// Try a few letter guesses in the browser window. Ensure you’re seeing the guessedLetters array contents updating as you input new letters and click the button.
// Add and commit your changes with the command line. Push the changes up to GitHub. Copy the link to your repo and submit it below. Part 2 of your project is donzo! ✅
const makeGuess = function (letter) {

    let uppercasedLetter = letter.toUpperCase();

    if (guessedLetters.includes(uppercasedLetter)) {
        message.innerText = `You already guessed the letter '${uppercasedLetter}', silly. Try again.`;
    } else {
        guessedLetters.push(uppercasedLetter);
        displayGuessedLetter();
        guessesRemaining(letter);
        displayWordInProgress(guessedLetters);
    }

    // console.log(guessedLetters);

};

// Create a Function to Show the Guessed Letters

// Create and name a function to update the page with the letters the player guesses (see screenshot above).
// Empty the innerHTML of the unordered list where the player’s guessed letters will display.
// Create a new list item for each letter inside your guessedLetters array (i.e., the global variable) and add it to the unordered list.
// Call the function inside the else statement of the makeGuess function so the letter displays when it hasn’t been guessed before.
// Test it out! You should see each unique guessed letter show up on the screen when you hit the Guess button. 
const displayGuessedLetter = function () {

    guessedLettersList.innerHTML = "";

    for (const letter of guessedLetters) {
        const listItem = document.createElement("li");
        listItem.innerText = letter;
        guessedLettersList.append(listItem);
    }

};

// Create a Function to Update the Word in Progress

// Create and name a function to update the word in progress that accepts the guessedLetters array as a parameter. This function will replace the circle symbols with the correct letters guessed.
// Create a variable called wordUpper to change the word variable to uppercase. On the following line, create a variable to split the word string into an array so that the letter can appear in the guessedLetters array: const wordArray = wordUpper.split("");. Then, log out wordArray to see what this does!
// Check if the wordArray contains any letters from the guessedLetters array. If it does contain any of the letters, update the circle symbol with the correct letter. Hint: You’ll want to create a new array with the updated characters and then use join() to update the empty paragraph where the word in progress will appear.
// Call your new shiny new function at the bottom of the else statement inside the makeGuess function and pass it guessedLetters as an argument.
// Give it a go! Try guessing a few of the correct letters from your test word “magnolia.” You should see the letters show up instead of the circle (●) symbol.
const displayWordInProgress = function (guessedLetters) {

    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    const letterMatchArray = [];

    for (const letter of wordArray) {
        if (guessedLetters.includes(letter)) {
            letterMatchArray.push(letter);
        } else {
            letterMatchArray.push("●");
        }
    }

    wordInProgress.innerText = letterMatchArray.join("");
    ifWordGuessed();

};

// Create a Function to Count Guesses Remaining

// Create and name a new function that will accept the guess input as a parameter. In the code, place this function before the function that checks if the player won.
// In the function, grab the word and make it uppercase. Because the player’s guess is uppercase, making the word they’re guessing uppercase will compare letters with the same casing.
// Find out if the word contains the guess. If it doesn’t include the letter from guess, let the player know that the word doesn’t contain the letter and subtract 1 from their remainingGuesses. If it does contain a letter, let the player know the letter is in the word.
// Still in the function and below the conditional statement, determine if the remainingGuesses is a value of 0. If they have no guesses remaining, update the message to say the game is over and what the word is. If they have 1 guess, update the span inside the paragraph where the remaining guesses will display to tell the player they have one guess remaining. If they have more than one guess, update the same span element to tell them the number of guesses remaining.
// In the else clause of your makeGuess function, before the call to the function that will update the word in progress, call your new function to update the remaining guesses and pass it the letter that the player guessed as an argument.
// Play the game for a few guesses. You should see the number of remaining guesses update on the page. Remember, the number of guesses will only update when you make an incorrect guess.

const guessesRemaining = function (input) {

    const uppercasedWord = word.toUpperCase();
    const uppercasedInput = input.toUpperCase();

    if (uppercasedWord.includes(uppercasedInput)) {
        message.innerText = `Nice, the word does contain "${uppercasedInput}"!`
    } else {
        message.innerText = `Sorry, the word does not contain "${uppercasedInput}".`
        remainingGuesses -= 1;
    }

    if (remainingGuesses === 0) { 
        message.innerText = `GAME OVER! The word is ${uppercasedWord}.`
        startOver();
    } else if (remainingGuesses === 1) {
        guessSpan.innerText = `${remainingGuesses} guess`
    } else {
        guessSpan.innerText = `${remainingGuesses} guesses`
    }

};

// Create a Function to Check If the Player Won

// Create and name a function to check if the player successfully guessed the word and won the game. Begin by verifying if their word in progress matches the word they should guess.
// If the player has won, add the “win” class to the empty paragraph where messages appear when they guess the letter. Also, update the paragraph’s contents to: <p class="highlight">You guessed correct the word! Congrats!</p>.
// At the bottom of the function that updates the word in progress, call this function to check if the player has won.
// Play the game to make sure the guessed letters are displaying on the screen. When all the corrected letters are guessed, you should see the congratulatory message.

const ifWordGuessed = function () {

    if (wordInProgress.innerText === word.toUpperCase()) {
        message.classList.add("win");
        message.innerHTML = `<p class="highlight">You guessed the correct word! Congrats!</p>`;
        startOver();
    }

}

// Create a Function to Hide and Show Elements

// At the bottom of the script.js file, create a function called startOver to hide:
// the Guess button.
// the paragraph where the remaining guesses will display.
// the unordered list where the guessed letters appear. 
// Use the startOver function to show the button to play again.
// Call the startOver function when the game is over whether the player wins or loses. Test the game to be sure the Guess button, the paragraph with remaining guesses, and the guessed letters disappear when the player wins or loses. Also, check that the Play Again button appears so that players give the game another try. The Play Again button won’t do anything quite yet, but you’ll get to that next!

const startOver = function () {
    guessBtn.classList.add("hide");
    remaining.classList.add("hide");
    guessedLettersList.classList.add("hide");
    playAgainBtn.classList.remove("hide");
};

// Add a Click Event to the Play Again Button

// Add a click event listener for the Play Again button. Remove the class of “win” applied to the message element. Empty the message text and the unordered list where the guessed letters appear.
// Set the remaining guess back to 8 or whichever number of guesses you decided on.  Set your guessedLetter global variable back to an empty array. Populate the text of the span inside the paragraph where the remaining guesses display with the new amount of guesses.
// Show the Guess button, the paragraph with remaining guesses, and the guessed letters once more. Hide the Play Again button.
// Call the getWord() async function that pulls the new word so the player can play again!
// Test out the game to make sure the click event is working. Congratulations, you’ve programmed a computer game! 🥳 Go ahead and add and commit the changes to your repo.

 playAgainBtn.addEventListener("click", function() {
    message.classList.remove("win");
    message.innerHTML = "";
    guessedLetters.innerHTML = "";
    remainingGuesses = 8;
    guessedLetters = [];
    guessSpan.innerText = "8 guesses";
    guessBtn.classList.remove("hide");
    remaining.classList.remove("hide");
    guessedLettersList.classList.remove("hide");
    playAgainBtn.classList.add("hide");
    getWord();
});