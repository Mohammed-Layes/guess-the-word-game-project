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
const word = "magnolia";

// Create another global variable called guessedLetters with an empty array. This array will contain all the letters the player guesses. 
let guessedLetters = []; 


// Write a Function to Add Placeholders for Each Letter

// Create and name a function to update the paragraph’s innerText for the “words-in-progress” element with circle symbols (●) to represent each letter in the word. The symbols will stay on the screen until the correct letter is guessed (in a future step). Hint: Copy and paste the ● symbol into your code!
// const addPlaceholders = function (word) {
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
const addPlaceholders = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
      console.log(letter);
      placeholderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
  };

// Call the function and pass it the word variable as the argument. You should see 8 circle symbols on the screen, one for each letter in the word “magnolia.” Hint: You’ll need to use an array and then join it back to a string using the .join("") method.
addPlaceholders(word);


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
    }

    console.log(guessedLetters);

};
