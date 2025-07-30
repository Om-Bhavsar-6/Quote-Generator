const quoteList = [
  "Some doors only open from the inside. Breath is a way of accessing that door.",
  "What has to be taught first, is the breath.",
  "Remember the blue sky. It may at times be obscured by clouds, but it is always there.",
  "In the midst of movement and chaos, keep stillness inside of you.",
  "We can't control the sea, but we can learn how to surf the waves.",
  "Feelings come and go like clouds in a windy sky. Conscious breathing is my anchor.",
  "To understand the immeasurable, the mind must be extraordinarily quiet, still.",
  "Breath is the bridge which connects life to consciousness.",
  "Inhale courage, exhale fear.",
  "The quiet mind is richer than a crown.",
  "Peace comes from within. Do not seek it without.",
  "Let your breath guide you to your center.",
  "Stillness is where creativity and solutions to problems are found.",
  "In every breath, find a new beginning.",
  "Calmness is the cradle of power.",
  "Breathe deeply to bring clarity to your thoughts.",
  "Mindfulness is the art of living moment to moment.",
  "Your breath is the anchor of your life.",
  "In letting go, you gain everything.",
  "Feel the air, feel alive.",
  "Breathing in, I calm my body; breathing out, I smile.",
  "Meditation is not evading the world but being present in it."
];

const colors = ["#e81416", "#ffa500", "#faeb36", "#79c314", "#487de7", "#4b369d", "#70369d"];

const wrapperDiv = document.getElementById("wrapper");
const quoteText = document.getElementById("quote-text");
const quoteButton = document.getElementById("quote-button");

quoteButton.addEventListener("click", function() {
  
  const randomIndex = Math.floor(Math.random() * quoteList.length);
  

  const randomQuote = quoteList[randomIndex];
  quoteText.innerText = randomQuote;

  wrapperDiv.style.backgroundColor = colors[randomIndex];
});
