const board = document.querySelector(".board");
const hit = document.querySelector("#hit");
const timer = document.querySelector("#time");
const score = document.querySelector("#score");
const result = document.querySelector(".result");
const finalScore = document.querySelector("#finalScore");

let duration = 60;
let totalScore = 0;
const blockSize = 30;
const boardPadding = 10;
const gap = 5;


const availableWidth = board.clientWidth - boardPadding;
const availableHeight = board.clientHeight - boardPadding;

const cols = Math.floor((availableWidth + gap) / (blockSize + gap));
const rows = Math.floor((availableHeight + gap) / (blockSize + gap));


function fillBoardWithRandomNumber() {
    board.textContent = "";
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const block = document.createElement("div");
            block.textContent = Math.floor(Math.random() * 10);
            block.classList.add("block");
            board.appendChild(block);
        }
    }
}

function generateRandomNumber() {
    hit.textContent = Math.floor(Math.random() * 10);
}


function startTimer() {
    let interval = setInterval(() => {
        duration--;
        timer.textContent = duration;

        if (duration <= 0) {
            duration = 0;
            clearInterval(interval);
            showFinalScore();
            return;
        }

    }, 1000)
}

function showFinalScore() {
    board.removeEventListener("click", handleBoardClick);
    board.textContent = "";
    hit.textContent = 0;
    score.textContent = 0;
    if (duration < 0) duration = 0;
    timer.textContent = duration;
    result.style.opacity = 1;
    finalScore.textContent = totalScore;
}


function handleBoardClick(e) {
    if (e.target.textContent === hit.textContent) {
        totalScore++;
        score.textContent = totalScore;
        duration += 2;
        timer.textContent = duration;
        generateRandomNumber();
    }
    else {
        duration -= 5;
        if (duration < 0) duration = 0;
        timer.textContent = duration;
    }
    fillBoardWithRandomNumber();
}

function startGame() {
    board.addEventListener("click", handleBoardClick);
}



function reStartGame() {
    result.style.opacity = 0;
    duration = 60;
    totalScore = 0;
    timer.textContent = duration;
    generateRandomNumber();
    startTimer();
    fillBoardWithRandomNumber();
    startGame();
}

generateRandomNumber();
startTimer();
fillBoardWithRandomNumber();
startGame();


