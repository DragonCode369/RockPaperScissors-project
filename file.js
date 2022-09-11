
// Generate computer choice

function getComputerChoice () {

    let r = "rock";
    let p = "paper";
    let s = "scissors";
    
    let choice = [r, p, s];
    
    num = Math.floor(Math.random() * choice.length);

    console.log(choice[num]);

    return choice[num];
}

// Play one round and return the winner 

let playRound = (playerSelection, computerSelection) => {
    

    let playerInput = playerSelection.toLowerCase();
    let r = "Rock";
    let p = "Paper";
    let s = "Scissors";
    let niz = [r, p, s];
    let output = document.getElementById("output");

    for (let i=0; i < niz.length; i++) {

        if (playerInput == niz[i].toLowerCase() && computerSelection == niz[i].toLowerCase()) {

            output.innerHTML = "It's a tie";
            return 3;
        }

        if (playerInput === niz[0].toLowerCase() && computerSelection === niz[i].toLowerCase()) {

            if(computerSelection === niz[1].toLowerCase()){

                output.innerHTML = "You lose! " + p + " beats " + r;
                return 0;
            }

            if (computerSelection === niz[2].toLowerCase()) {

                output.innerHTML = "You winnnn! " + r + " beats " + s;
                return 1;
            }

        }

        if (playerInput === niz[1].toLowerCase() && computerSelection === niz[i].toLowerCase()) {

            if (computerSelection === niz[0].toLowerCase()) {

                output.innerHTML = "You win! " + p + " Beats " + r;
                return 1;
            }

            if (computerSelection === niz[2].toLowerCase()) { 

                output.innerHTML = "You lose! " + s + " beat " + p;
                return 0;
            }
        }

        if (playerInput === niz[2].toLowerCase() && computerSelection === niz[i].toLowerCase()) {

            if (computerSelection === niz[0].toLowerCase()) {

                output.innerHTML = "You lose! " + r + " beats " + s;
                return 0;
            }

            if (computerSelection === niz[1].toLowerCase()) {

                output.innerHTML = "You win! " + s + " beats " + p;
                return 1;
            }
        }
    }
} 

// Play 5 round game, and return winner or loser at the end.

let playerPoints = 0;
let computerPoints = 0;
let counter = 0;

function game() {

    let playerSelection = document.getElementById("input").value;

    for (let i = 0; i < 5; i++) {

        let computerSelection = getComputerChoice();
        let score = playRound(playerSelection, computerSelection);

        if (score === 0) {

            computerPoints++;
        }

        else if (score === 1) {

            playerPoints++;

        }
        else if (score === 3) {

        }

        console.log("ROUND: " + i);
        console.log("player Points\n" + playerPoints);
        console.log("computer Points\n" + computerPoints);

        counter++;

        console.log("counter : " + counter);
        console.log("----------------");
    }
        
    if ( counter === 5 ) {

        if (playerPoints > computerPoints) {

            console.log("Victory!");
            console.log("Player points " + playerPoints);
        }

        else if(playerPoints < computerPoints) {

            console.log("Defeat!");
            console.log("Computer points " + computerPoints);
        }

        else if(playerPoints === computerPoints) {
            console.log("It's a tie, try one more time :)")
        }
    }

}
