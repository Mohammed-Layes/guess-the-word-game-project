// Create global variables to select the following elements:

// The unordered list where the player’s guessed letters will appear.
const guessedLetters = document.querySelector(".guessed-letters");

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


// Write a Function to Add Placeholders for Each Letter

// Create and name a function to update the paragraph’s innerText for the “words-in-progress” element with circle symbols (●) to represent each letter in the word. The symbols will stay on the screen until the correct letter is guessed (in a future step). Hint: Copy and paste the ● symbol into your code!
const addPlaceholders = function (word) {
    let placeholder = "";
    // const wordArray = word.split("");
    // console.log(wordArray);
    for (const letter of word) {
        placeholder += "●";
    }
    // console.log(placeholder)
    wordInProgress.innerText = placeholder;
};

// Call the function and pass it the word variable as the argument. You should see 8 circle symbols on the screen, one for each letter in the word “magnolia.” Hint: You’ll need to use an array and then join it back to a string using the .join("") method.
addPlaceholders(word);


// Add an Event Listener for the Button

// Add an event listener for when a player clicks the Guess button. In the callback function, add a parameter for the event: e.
guessBtn.addEventListener("click", function(e) {
    e.preventDefault();
    let letterInput = letter.value;
    console.log(letterInput);
});

// Because you’re working with a form, you want to prevent the default behavior of clicking a button, the form submitting, and then reloading the page. To prevent this reloading behavior, add this line of code at the top of the callback function: e.preventDefault();.
// Create and name a variable to capture the value of the input. Log out the value of the variable capturing the input. Then, empty the value of the input. You should see the letter you enter into the input field in the console when the Guess button is clicked. 
// In the command line, add and commit your changes. Push the changes up to GitHub. Copy the link to your repo and submit it below. Part 1 of the project is done! 😀