let yourHand = document.getElementById("your-hand");
let compHand = document.getElementById("comp-hand");
let yourScore = document.getElementById("score1");
let compScore = document.getElementById("score2");
let message = document.querySelector("#message p");
let playAgainBtn = document.querySelector("#play-again-button p");
let buttons = document.querySelector(".buttons");
let score1 = 0;
let score2 = 0;

const clickHandler = (e) => {
    showHands(e.target.id);
};

buttons.addEventListener("click", clickHandler);

let allHands = [
    '<img class="hands" src="https://github.com/Mrudula-kunathi/Assignment-4-rock-paper-scissors/blob/main/assets/paper-hand.png?raw=true" alt="Paper Hand">',
    '<img class="hands" src="https://github.com/Mrudula-kunathi/Assignment-4-rock-paper-scissors/blob/main/assets/rock-hand.png?raw=true" alt="Rock Hand">',
    '<img class="hands" src="https://github.com/Mrudula-kunathi/Assignment-4-rock-paper-scissors/blob/main/assets/scissors-hand.png?raw=true" alt="Scissors Hand">'
];

function getRandomNumber() {
    return Math.floor(Math.random() * 3);
}

function showHands(id) {
    if (id === "rock") {
        yourHand.innerHTML = allHands[1];
        compHand.innerHTML = allHands[getRandomNumber()];
    } else if (id === "paper") {
        yourHand.innerHTML = allHands[0];
        compHand.innerHTML = allHands[getRandomNumber()];
    } else if (id === "scissors") {
        yourHand.innerHTML = allHands[2];
        compHand.innerHTML = allHands[getRandomNumber()];
    }
    checkResult();
}

function checkResult() {
    const playerHand = yourHand.firstElementChild.alt;
    const computerHand = compHand.firstElementChild.alt;

    if (playerHand === computerHand) {
        return;
    } else if (
        (playerHand === "Paper Hand" && computerHand === "Rock Hand") ||
        (playerHand === "Rock Hand" && computerHand === "Scissors Hand") ||
        (playerHand === "Scissors Hand" && computerHand === "Paper Hand")
    ) {
        score1++;
        yourScore.innerText = score1;
    } else {
        score2++;
        compScore.innerText = score2;
    }
    gameOver();
}

function gameOver() {
    if (score1 === 5 && score1 > score2) {
        message.innerHTML = "You won the game";
    } else if (score2 === 5 && score2 > score1) {
        message.innerHTML = "Computer won the game";
    } else if (score1 >= 5 && score1 === score2) {
        message.innerHTML = "It's a draw";
    }
    if (score1 === 5 || score2 === 5) {
        buttons.removeEventListener("click", clickHandler);
        playAgainBtn.style.visibility = "visible";
        buttons.style.display = "none";
        playAgainBtn.addEventListener("click", () => {
            location.href = "game.html";
        });
    }
}
