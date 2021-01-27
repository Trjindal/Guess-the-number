"strict mode";
let guessNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector(".number").textContent = guessNumber;

let score = 20;
let highscore = 0;
document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);

  if (guessNumber === guess) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".guess").style.backgroundColor = "#60b347";
    document.querySelector(".question").style.width = "30rem";

    if (highscore < score) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
      document.querySelector(".number").textContent = guessNumber;
    }
    //document.querySelector(".number").textContent = guessNumber;
  } else if (guess > 20 && guess < 0) {
    document.querySelector(".message").textContent = "⛔ Invalid Number";
  } else if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Number!";
  } else if (guess > guessNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too High!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You Lost The Game";
    }
  } else if (guess < guessNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You Lost The Game";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".message").textContent = "Start Guessing...";
  score = 20;
  document.querySelector(".score").textContent = score;
  guessNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".guess").value = "-";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").style.backgroundColor = "#222";
  document.querySelector(".question").style.width = "15rem";
  document.querySelector(".number").textContent = "? ";
});
