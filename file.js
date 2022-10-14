
const output = document.querySelector("#output");
const roundOutput = document.querySelector(".round-output");
const outputPlayerPoints = document.querySelector(".player-points");
const outputComputerPoints = document.querySelector(".computer-points");
const gameOutput = document.querySelector("#game-output");
let oneGameOutput = document.querySelector("#one-game-output");
let playerChoice = document.querySelectorAll(".player-buttons");

let playerPoints = 0;
let computerPoints = 0;
let counter = 1;

function game(playerSelection) {

    let computerSelection = getComputerChoice();

    let score = playRound(playerSelection, computerSelection);

    if (score === 0) {
        computerPoints++;
    }

    else if (score === 1) {
        playerPoints++;
    }

    else if (score === 3) {
        counter--;
    }

    // Output of the ROUND, player and computer points.
    roundOutput.textContent = "ROUND: " + counter;
    outputPlayerPoints.textContent = "Player Points: " + playerPoints;
    outputComputerPoints.textContent = "Computer Points: " + computerPoints;
    output.appendChild(roundOutput);
    output.appendChild(outputPlayerPoints);
    output.appendChild(outputComputerPoints);

    counter++;

    if ( counter === 6 ) {

        const playAgain = document.querySelector("#play-again");
        const playAgainButton = document.querySelector("#play-again-button");
        oneGameOutput.style.display = "none";

        playerChoice.forEach((button) => {
            button.classList.add("hide-buttons");
        });

        playAgain.style.display = "block";
        playAgainButton.addEventListener('click', () => {

            refreshPage();
        });

        if (playerPoints > computerPoints) {
            gameOutput.innerHTML = '<h1 class="final-output">Victory!</h1>\n Taking chances is worth it!\n Hint: You can influence the AI Choice ;]]';
        }

        else if(playerPoints < computerPoints) {
            gameOutput.innerHTML = '<h1 class="final-output">Defeat!</h1>\n Defeat should motivate you! \n If you win you will be rewarded ;]';
        }

        else if(playerPoints === computerPoints) {
            gameOutput.textContent = "It's a tie, try one more time :)";
        }
        
        counter = 1;
        playerPoints = 0;
        computerPoints = 0;
    }
}

// Results of each round, return the output text of current round.
let playRound = (playerSelection, computerSelection) => {
    
    let playerInput = playerSelection;
    let r = "Rock";
    let p = "Paper";
    let s = "Scissors";

    if (playerInput === computerSelection) {
        oneGameOutput.textContent = "It's a tie";
        return 3;
    }

    if (playerInput === r.toLowerCase() && computerSelection === p.toLowerCase()) {
        oneGameOutput.textContent = "You lose! " + p + " beats " + r;
        return 0;
    }

    if (playerInput === r.toLowerCase() && computerSelection === s.toLowerCase()) {
        oneGameOutput.textContent = "You winnnn! " + r + " beats " + s;
        return 1;
    }

    if (playerInput === p.toLowerCase() && computerSelection === r.toLowerCase()) {
        oneGameOutput.textContent = "You win! " + p + " Beats " + r;
        return 1;
    }

    if (playerInput === p.toLowerCase() && computerSelection === s.toLowerCase()) {
        oneGameOutput.textContent = "You lose! " + s + " beat " + p;
        return 0;
    }

    if (playerInput === s.toLowerCase() && computerSelection === r.toLowerCase()) {
        oneGameOutput.textContent = "You lose! " + r + " beats " + s;
        return 0;
    }

    if (playerInput === s.toLowerCase() && computerSelection === p.toLowerCase()) {
        oneGameOutput.textContent = "You win! " + s + " beats " + p;
        return 1;
    }
} 

// Generate computer choice
function getComputerChoice () {

    let r = "rock";
    let p = "paper";
    let s = "scissors";
    
    let choice = [r, p, s];
    const computerChoice = document.querySelector("#computer-choice");
    let capitalLetterChoice = choice;
    num = Math.floor(Math.random() * choice.length);

    computerChoice.textContent = "AI Choice: " + capitalLetterChoice[num]
    .charAt(0).toUpperCase() + capitalLetterChoice[num].slice(1);

    computerChoice.addEventListener('click', () => {
        getComputerChoice();
    });

    return choice[num];
};

const computerChoice = document.querySelector("#computer-choice");
computerChoice.textContent = "AI Choice"
roundOutput.textContent = "ROUND";
outputPlayerPoints.textContent = "Player Points";
outputComputerPoints.textContent = "Computer Points";

//Refreshing the page.
function refreshPage() {

    window.location.reload(true);
};

//Showing hidden element:
function toggleContent() {

    let content = document.querySelector("#content");

    if (content.style.display === "none" ) {
        content.style.display = "block";
    }
};

const play = document.querySelector(".play-button");
const welcomeText = document.querySelector("#welcome-text");
let content = document.querySelector("#content");

play.addEventListener('click', () => {

    content.style.display = "block";

    welcomeText.style.display = "none";
    play.style.display = "none";
});

//Add Event Listener to player choice buttons, and send their id value as an argument!
playerChoice.forEach((button) => {

    button.addEventListener('click', () => {
        game(button.id);
        toggleContent();
    });
});