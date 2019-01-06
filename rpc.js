let playerWeapon = document.getElementById("player-weapon");
let computerWeapon = document.getElementById("computer-weapon");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let playerScoreBoard = document.getElementById("sb-player");
let computerScoreBoard = document.getElementById("sb-computer");
let resultsDisplay = document.getElementById("results-display");
let weaponSection = document.getElementById("choose-weapon");
let playerSelection,
    computerSelection;
let playerScore = 0,
    computerScore = 0;
let resetButton = document.getElementById("reset-button");
let resetGameButton = document.getElementById("reset-game");
let roundNumber = 1;

rock.addEventListener("click", function() {
   rockClick();
});

paper.addEventListener("click", function(){
   paperClick();
});

scissors.addEventListener("click", function(){
   scissorsClick();
});

resetButton.addEventListener("click", function() {
   roundResetClick();
});

function roundResetClick() {
   roundNumber++;
   reset(computerWeapon);
   reset(playerWeapon);
   resultsDisplay.innerHTML = 'Round ' + roundNumber + '! Lets go!';
}

function scissorsClick() {
   playerWeapon.classList.add("fa-hand-peace-o", "fa", "player-weapon-choice");
   playerSelection == "scissors";
   computerSelection = computerPlay();
   if (computerSelection === "rock") {
        computerWeapon.classList.add("fa-hand-rock-o", "fa", "computer-weapon-choice");
        computerScore++;
        displayYouLose();
    } else if (computerSelection === "paper") {
        computerWeapon.classList.add("fa-hand-paper-o", "fa", "computer-weapon-choice");
        playerScore++;
        displayYouWin();
    } else {
        computerWeapon.classList.add("fa-hand-peace-o", "fa", "computer-weapon-choice");
        displayTie();
    };
   updateScoreBoard(playerScore, computerScore);
   resetButton.style.display="inline-block";
   isThereWinner(playerScore, computerScore);   
}

function paperClick() {
   playerWeapon.classList.add("fa-hand-paper-o", "fa", "player-weapon-choice");
   playerSelection == "paper";
   computerSelection = computerPlay();
   if (computerSelection === "rock") {
        computerWeapon.classList.add("fa-hand-rock-o", "fa", "computer-weapon-choice");
        playerScore++;
        displayYouWin();
    } else if (computerSelection === "paper") {
        computerWeapon.classList.add("fa-hand-paper-o", "fa", "computer-weapon-choice");
        displayTie();
    } else {
        computerWeapon.classList.add("fa-hand-peace-o", "fa", "computer-weapon-choice");
        computerScore++;
        displayYouLose();
    };
   updateScoreBoard(playerScore, computerScore);
   resetButton.style.display="inline-block";
   isThereWinner(playerScore, computerScore);   
}

function rockClick() {
    playerWeapon.classList.add("fa-hand-rock-o", "fa", "player-weapon-choice");
    playerSelection == "rock";
    computerSelection = computerPlay();
    if (computerSelection === "rock") {
        computerWeapon.classList.add("fa-hand-rock-o", "fa", "computer-weapon-choice");
        displayTie();
    } else if (computerSelection === "paper") {
        computerWeapon.classList.add("fa-hand-paper-o", "fa", "computer-weapon-choice");
        computerScore++;
        displayYouLose();
    } else {
        computerWeapon.classList.add("fa-hand-peace-o", "fa", "computer-weapon-choice");
        playerScore++;
        displayYouWin();
    };
    
    updateScoreBoard(playerScore, computerScore);
    resetButton.style.display="inline-block";
    isThereWinner(playerScore, computerScore);
};




function displayYouLose() {
   resultsDisplay.innerHTML = "<span id='lose'>LOSER!</span> Click on Next Round below!";
}

function displayYouWin() {
   resultsDisplay.innerHTML = "<span id='win'>WINNER</span> Click on Next Round below!";
}

function displayTie() {
   resultsDisplay.innerHTML = "<span id='tie'>Tie-DYE!</span> Click on Next Round below!";
}

function updateScoreBoard(player, comp) {
   playerScoreBoard.innerHTML = player;
   computerScoreBoard.innerHTML = comp;
}

function reset(el) {
   el.className = "";
   playerSelection = "";
}


function isThereWinner(player, comp) {
   if(player == 5 ) {
      resultsDisplay.classList.add("winner");
      resultsDisplay.innerHTML = "You've won the game!!";
      hideWeapons();

   } else if (comp == 5) {
      resultsDisplay.innerHTML = "Wow...you lost to a computer";
      resultsDisplay.classList.add("loser");
      hideWeapons();
   }
   
}

function hideWeapons() {
   weaponSection.style.display = "none";
   resetButton.style.display = "none";
   resetGameButton.style.display = "inline-block";
   resetGameButton.addEventListener("click", function() {
      location.reload();
   });
}


function genRanNum() {
   return Math.floor((Math.random() * 5)+1);
}

function promptUser() {
   let playerWeapon = prompt("What would you like to use - rock, paper, or scissor?").toLowerCase();
   if (playerWeapon === "rock" || playerWeapon ==="paper" || playerWeapon ==="scissor") {
       return playerWeapon;
   } else {
       alert(playerWeapon + " is not a valid choice");
       return promptUser();
   }
}

function computerPlay() {
   let number = genRanNum();
   switch(number) { 
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissor";
            break;
   }
}
