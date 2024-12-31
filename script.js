"use strict";
const number = document.querySelector(".number");
const message = document.querySelector(".message");
const btn = document.querySelector(".check");
const cheater = document.querySelector(".cheater");
let randNum = Math.trunc(Math.random() * 20) + 1;
let score = document.querySelector(".score");
let highScore = document.querySelector(".highscore");
let i = 20;
let o = 0;

function checkGuessedNumber() {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    // when there is no input
    message.textContent = "🤔 No Number";
  } else if (guess !== randNum) {
    if (i > 1) {
      // if gussed number is high or low
      message.textContent =
        guess > randNum ? "📈 Numbers is too high" : "📉 Numbers is too low";
      score.textContent = --i;
    } else {
      // when losing
      message.textContent = "😿 You Lost";
      score.textContent = --i;
      btn.disabled = true;
    }
  } else if (guess === randNum) {
    // when winning the game
    message.textContent = "💥 You Won!";
    number.textContent = randNum;
    btn.disabled = true;
    document.querySelector("body").style.backgroundColor = "#60b347";
    number.style.width = "30rem";
    if (i > highScore.textContent) {
      highScore.textContent = i;
    }
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter" && !btn.disabled) checkGuessedNumber();
});

btn.addEventListener("click", checkGuessedNumber);

cheater.addEventListener("click", function () {
  // eventHandler to show the random number
  if (cheater.textContent.includes("Number is")) {
    cheater.textContent = "Cheater?";
  } else cheater.textContent = `Number is : ${randNum}`;
});

document.querySelector(".again").addEventListener("click", function () {
  // eventHandler to reset the game
  i = 20;
  randNum = Math.trunc(Math.random() * 20) + 1;
  console.log(randNum);
  document.querySelector(".guess").value = "";
  number.textContent = "?";
  message.textContent = "Start guessing...";
  score.textContent = i;
  number.style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
  cheater.textContent = "Cheater?";
  btn.disabled = false;
});
