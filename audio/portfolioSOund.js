
const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
const buttons = document.querySelectorAll(".sound");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});
