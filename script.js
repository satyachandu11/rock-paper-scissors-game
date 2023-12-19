// Containers
const gameplayContainer = document.getElementById("gameplay");
const tieUpConatiner = document.getElementById("tie-up");
const userWinContainer = document.getElementById("userWinsContainer");
const computerWinContainer = document.getElementById("computerWinsContainer");

//Scoreboard
let userScore = parseInt(localStorage.getItem('userScore')) || 0;

let pcScore = parseInt(localStorage.getItem('pcScore')) || 0;

document.getElementById("user-score").textContent = userScore;
document.getElementById("pc-score").textContent = pcScore;

if (isNaN(userScore)){
    userScore = 0;
}

if (isNaN(pcScore)){
    pcScore = 0;
}

function updateScore(winner) {
    if (winner === 'user') {
        userScore++;
    } else if (winner === 'pc') {
        pcScore++;
    }

    localStorage.setItem('userScore', userScore.toString());
    localStorage.setItem('pcScore', pcScore.toString());

    document.getElementById('user-score').textContent = userScore;
    document.getElementById('pc-score').textContent = pcScore;
}


function gameplay(playerChoice){
    const choices = ['rock', 'paper', 'scissor'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    const userChoice = playerChoice.toLowerCase();

    console.log(`Player's Choice: ${userChoice}`);
    console.log(`Computer's Choice: ${computerChoice}`);

    // TIE
    if (userChoice === computerChoice) {
      if (userChoice === "rock" && computerChoice === "rock") {
        document.getElementById("tie-up-rock-user").style.display = "block";
        document.getElementById("tie-up-rock-pc").style.display = "block";
        console.log("Its a Tie");
        return "tie1";
      } else if (userChoice === "paper" && computerChoice === "paper") {
        document.getElementById("tie-up-paper-user").style.display = "block";
        document.getElementById("tie-up-paper-pc").style.display = "block";
        console.log("Its a Tie");
        return "tie2";
      } else if (userChoice === "scissor" && computerChoice === "scissor") {
        document.getElementById("tie-up-scissor-user").style.display = "block";
        document.getElementById("tie-up-scissor-pc").style.display = "block";
        console.log("Its a Tie");
        return "tie3";
      }

      // User Wins
    } else if (userChoice === "rock" && computerChoice === "scissor") {
      document.getElementById("you-win-rock-user").style.display = "block";
      document.getElementById("you-win-scissor-pc").style.display = "block";
      console.log("User Win");
      updateScore('user');
      return "userWins1";
    } else if (userChoice === "paper" && computerChoice === "rock") {
      document.getElementById("you-win-paper-user").style.display = "block";
      document.getElementById("you-win-rock-pc").style.display = "block";
      console.log("User Win");
      updateScore('user');
      return "userWins2";
    } else if (userChoice === "scissor" && computerChoice === "paper") {
      document.getElementById("you-win-scissor-user").style.display = "block";
      document.getElementById("you-win-paper-pc").style.display = "block";
      console.log("User Win");
      updateScore('user');
      return "userWins3"; //Computer Wins from next line
    } else if (userChoice === "scissor" && computerChoice === "rock") {
      document.getElementById("you-lost-scissor-pc").style.display = "block";
      document.getElementById("you-lost-rock-user").style.display = "block";
      console.log("Computer Wins");
      updateScore('pc');
      return "computerWins1";
    } else if (userChoice === "rock" && computerChoice === "paper") {
      document.getElementById("you-lost-rock-pc").style.display = "block";
      document.getElementById("you-lost-paper-user").style.display = "block";
      console.log("Computer Wins");
      updateScore('pc');
      return "computerWins2";
    } else if (userChoice === "paper" && computerChoice === "scissor") {
      document.getElementById("you-lost-paper-pc").style.display = "block";
      document.getElementById("you-lost-scissor-user").style.display = "block";
      console.log("Computer Wins");
      updateScore('pc');
      return "computerWins3";
    }
    
}


function handleClickGameChoices(choices){
   let result = gameplay(choices);

   if (result === "tie1" || result === "tie2" || result === "tie3") {
     gameplayContainer.style.display = "none";
     tieUpConatiner.style.display = "flex";
   }
   else if (
     result === "userWins1" ||
     result === "userWins2" ||
     result === "userWins3"
   ) {
     gameplayContainer.style.display = "none";
     userWinContainer.style.display = "block";
   } 
   else if (
     result === "computerWins1" ||
     result === "computerWins2" ||
     result === "computerWins3"
   ) {
     gameplayContainer.style.display = "none";
     computerWinContainer.style.display = "block";
   }
    
}

document.getElementById('userChoiceRock').addEventListener('click', function(){
    handleClickGameChoices("rock");

});

document.getElementById('userChoicePaper').addEventListener('click', function(){
    handleClickGameChoices("paper");

});

document.getElementById('userChoiceScissor').addEventListener('click', function(){
    handleClickGameChoices("scissor");

});

// Tie Container Replay Button Script

document.getElementById('tie-replay-btn').addEventListener('click', function(){
    tieUpConatiner.style.display = "none";
    gameplayContainer.style.display = "block";
    document.getElementById("tie-up-rock-user").style.display = "none";
    document.getElementById("tie-up-rock-pc").style.display = "none";
    document.getElementById("tie-up-paper-user").style.display = "none";
    document.getElementById("tie-up-paper-pc").style.display = "none";
    document.getElementById("tie-up-scissor-user").style.display = "none";
    document.getElementById("tie-up-scissor-pc").style.display = "none";
});


// gamplay container rules box script
const gameplayRules = document.getElementById("gameplayRules");
const rulesClose = document.getElementById("rulesClose");
const rulesDetails = document.getElementById("rulesDetails");

gameplayRules.addEventListener("click", function () {
    if(rulesDetails.style.display === 'none'){
        rulesDetails.style.display = "block";
    }else{
        rulesDetails.style.display = "none";
    }
    
});

rulesClose.addEventListener('click', function(){

    if(rulesDetails.style.display === 'block'){
    rulesDetails.style.display = "none";
    }
});

// you-win container rules box script
const youWinRules = document.getElementById("you-win-rules");

youWinRules.addEventListener("click", function () {
  if (rulesDetails.style.display === "none") {
    rulesDetails.style.display = "block";
  } else {
    rulesDetails.style.display = "none";
  }
});

// you-win container next btn script
const youWinNext = document.getElementById("you-win-next");

youWinNext.addEventListener('click', function(){
    window.location.href = "./hurray.html";
})

// you-win container play again btn script
const youWinPlayAgainBtn = document.getElementById("you-win-playAgain-btn");

youWinPlayAgainBtn.addEventListener('click', function(){
    userWinContainer.style.display = "none";
    gameplayContainer.style.display = "block";
    document.getElementById("you-win-rock-user").style.display = "none";
    document.getElementById("you-win-rock-pc").style.display = "none";
    document.getElementById("you-win-paper-user").style.display = "none";
    document.getElementById("you-win-paper-pc").style.display = "none";
    document.getElementById("you-win-scissor-user").style.display = "none";
    document.getElementById("you-win-scissor-pc").style.display = "none";
});

// you-lost container play again btn script
const youLostPlayAgainBtn = document.getElementById("you-lost-play-again-btn");

youLostPlayAgainBtn.addEventListener("click", function () {
  computerWinContainer.style.display = "none";
  gameplayContainer.style.display = "block";
  document.getElementById("you-lost-rock-user").style.display = "none";
  document.getElementById("you-lost-rock-pc").style.display = "none";
  document.getElementById("you-lost-paper-user").style.display = "none";
  document.getElementById("you-lost-paper-pc").style.display = "none";
  document.getElementById("you-lost-scissor-user").style.display = "none";
  document.getElementById("you-lost-scissor-pc").style.display = "none";
});

// you-lost container rules btn script
const youLostRules = document.getElementById("you-lost-rules-btn");

youLostRules.addEventListener("click", function () {
  if (rulesDetails.style.display === "none") {
    rulesDetails.style.display = "block";
  } else {
    rulesDetails.style.display = "none";
  }
});



// tie up container rules btn script
const tieUpRulesBtn = document.getElementById("tie-up-rules-btn");

tieUpRulesBtn.addEventListener("click", function () {
  if (rulesDetails.style.display === "none") {
    rulesDetails.style.display = "block";
  } else {
    rulesDetails.style.display = "none";
  }
});


