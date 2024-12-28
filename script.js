// Arrays of sample texts
const textOptions = [
  "Yes",
  "Why not?",
  "I dunno",
  "Nah",
  "Sure?",
  "Why?",
  "Bro",
  "Affirmative",
  "Certainly",
  "Absolutely",
  "Indeed",
  "Yep",
  "Yeah",
  "Aye",
  "Agreed",
  "OK",
  "Sure",
  "Uh-huh",
  "Right",
  "Definitely",
  "True",
  "Confirmed",
  "Indubitably",
  "Roger",
  "Positively",
  "Assuredly",
  "For sure",
  "Heck yes",
  "Yes, please!",
  "Oh, yeah!",
  "Totally yes!",
  "Yay!",
  "You got it",
  "Count me in",
  "No doubt!",
  "100%",
  "Let’s do it",
  "Agreed",
  "Roger",
  "Aye",
  "True",
  "Got it",
  "Okay",
  "Right",
  "I’m in",
  "Check",
  "That’s correct"

];
function generateRandomText() {
    const randomIndex = Math.floor(Math.random() * textOptions.length);
    const generatedText = textOptions[randomIndex];
    document.getElementById("generatedText").textContent = generatedText;
}

// Event listener for document click
document.addEventListener('click', generateRandomText);

// Event listener for spacebar key press
document.addEventListener('keydown', function (event) {
    if (event.key === ' ' || event.key === 'Spacebar') {
        generateRandomText();
        event.preventDefault(); // Prevents the default behavior of the spacebar in the browser
    }
});

// Event listener for button click
document.getElementById("generateButton").addEventListener('click', generateRandomText);
