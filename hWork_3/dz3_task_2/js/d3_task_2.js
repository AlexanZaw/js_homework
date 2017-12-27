var btn = document.getElementById("play");
var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");

function getPlayerResult() {
    return Math.floor((Math.random() * 3) + 1);
};

function getNameById(id) {
    var result;
    
    switch (id) {
        case 1:
            result = "Камень";
            break;
        case 2:
            result = "Ножницы";
            break;

        default:
            result = "Бумага";
            break;
    };
    
    return result;
};

function determineWinner(getFirstPlayer, getSecondPlayer) {
    var result;
    
    if((getFirstPlayer == 1 && getSecondPlayer == 2) || (getFirstPlayer == 2 && getSecondPlayer == 3) || (getFirstPlayer == 3 && getSecondPlayer == 1)) {
        result = 1;
    } else if ((getFirstPlayer == 2 && getSecondPlayer == 1) || (getFirstPlayer == 3 && getSecondPlayer == 2) || (getFirstPlayer == 1 && getSecondPlayer == 3)) {
        result = 2;
    } else {
        result = 0;
    };
    
    return result;
};

function printResult(getNumberPlayer) {
    var resultStr;
    
    switch (getNumberPlayer) {
        case 1: 
            resultStr = "Выиграл первый игрок.";
            break;
        case 2:
            resultStr = "Выиграл второй игрок.";
            break;
        
        default:
            resultStr = "Ничья.";
            break;
    };
    
    document.getElementById("result").innerHTML = resultStr;
};

function runGame() {
    var firstPlayer, secondPlayer;

    firstPlayer = getPlayerResult();
    secondPlayer = getPlayerResult();
    
    player1.innerHTML = getNameById(firstPlayer);
    player2.innerHTML = getNameById(secondPlayer);
    
    printResult(determineWinner(firstPlayer, secondPlayer));
};

btn.addEventListener("click", runGame);