const display = function (mssg) {
  document.querySelector(".message").textContent = mssg;
};
const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};
let score = 20;
displayScore(score);
let highscore = 0;
let randomInt = (min, max) => Math.trunc(Math.random() * (max - min) + 1) + min;
let secretNum = randomInt(1, 20);
console.log(secretNum);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    display("No Number!");
    score--;
    displayScore(score);
  }
  if (guess === secretNum) {
    display("🎉Correct!");
    document.querySelector("body").style.backgroundColor = "#60b347";

    displayScore(score);
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    document.querySelector(".number").textContent = secretNum;
    document.querySelector(".number").style.width = "5rem";
    document.querySelector("input").setAttribute("disabled", "true");
  }
  if (guess !== secretNum) {
    if (score > 0) {
      display(guess > secretNum ? "📈 Too High!" : "📉 Too Low!");
      score--;
      displayScore(score);
    } else {
      display("🌟 You lost the game!");
      document.querySelector("input").setAttribute("disabled", "true");
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "grey";
  document.querySelector(".number").style.width = "4rem";
  document.querySelector(".number").textContent = "?";
  display("Start guessing...");
  displayScore(20);
  score = 20;
  document.querySelector("input").removeAttribute("disabled");
  document.querySelector(".guess").value = null;
});
