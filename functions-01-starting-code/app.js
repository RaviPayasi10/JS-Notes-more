
const startGameBtn = document.getElementById("start-game-btn");
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_PLAYER_VALUE = ROCK;
const RESULT_DRAW = "DRAW";
const PLAYER_WINS = "PLAYER WINS";
const COMPUTER_WINS = "COMPUTER WINS";

let isGameRunning = false;

const getPlayerChoice = function(){
    const selection = prompt(`Choose b/w ${ROCK}, ${PAPER}, ${SCISSORS}`).toUpperCase();
    if(selection != ROCK && selection != PAPER && selection != SCISSORS){
        alert("Invalid choice, Default choice "+DEFAULT_PLAYER_VALUE+" chosen for you");
        return DEFAULT_PLAYER_VALUE;
    }
    return selection;
}


const getComputerChoice = () => {
    const randomValue = Math.random();
    if(randomValue < 0.33){
        return ROCK;
    }else if(randomValue < 0.66){
        return PAPER;
    }else{
        return SCISSORS;
    }
}

const getWinner = function(playerCHOICE,computerChoice){
    if(playerCHOICE === computerChoice){
        return RESULT_DRAW;
    }else if(playerCHOICE === ROCK && computerChoice === SCISSORS || 
            playerCHOICE === PAPER && computerChoice === ROCK || 
            playerCHOICE === SCISSORS && computerChoice === PAPER){
                return PLAYER_WINS;
    }else{
        return COMPUTER_WINS;
    }
}

startGameBtn.addEventListener("click",function(){
    if(isGameRunning){
        return;
    }
    isGameRunning = true;
    const selectedValue = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const result = getWinner(selectedValue,computerChoice);
    console.log(selectedValue);
    console.log(computerChoice);
    console.log(result);
});