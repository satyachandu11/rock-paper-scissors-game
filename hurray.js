// Hurray page script
const hurrayPlayAgainBtn = document.getElementById("hurray-play-again-btn");

hurrayPlayAgainBtn.addEventListener("click", function () {
  window.location.href = "./index.html";
});

const youLostRules = document.getElementById("hurray-rules-btn");
const rulesClose = document.getElementById("rulesClose");
const rulesDetails = document.getElementById("rulesDetails");

youLostRules.addEventListener("click", function () {
  if (rulesDetails.style.display === "none") {
    rulesDetails.style.display = "block";
  } else {
    rulesDetails.style.display = "none";
  }
});
rulesClose.addEventListener("click", function () {
  if (rulesDetails.style.display === "block") {
    rulesDetails.style.display = "none";
  }
});