'use ctrict'
const elem = document.getElementById("result");
function run() {
// блок переменных
    var first, second;
    var setResultStr = "";
    var total = 0;
    var setResultTotal;

// описание вспомагательных функций
    // функция генерации случайного числа
    function getRndNumber() {
        return Math.floor((Math.random() * 6) + 1);
    };

    //функция склейки строк
    function setResult(getResultStr) {
        let nextLine = "<br>";  //  "\n"
        setResultStr += getResultStr + nextLine;
        return setResultStr;
    };
    
    // функция проверки на дубль
    function isNumberEqual(getFirst, getSecond) {
        if(getFirst === getSecond) {
            setResult("Выпал дубль. Число: " + getFirst);
        };
    };

    // функция проверки разброса
    function isBigDifference(getFirst, getSecond) {
        if((getFirst < 3 && getSecond > 4) || (getSecond < 3 && getFirst > 4)) {
            setResult("Большой разброс между костями. Разница составляет " + Math.abs(getSecond - getFirst));
        };
    };
 
    // функция подсчёта общего колличества очков
    function setToltal(getSum) {
        return total += getSum;
    };
  
    // функция вывода в HTML-документ результатов
    function printResult(getResultStr) {
        elem.innerHTML += getResultStr;
    };
    
    function getComment(setResultTotal) {
        let remainderByDivision = (setResultTotal < 100 ) ? setResultTotal % 10 : setResultTotal % 100;
        let result;
        switch(remainderByDivision) {
            case 1:
                result = ' очко.';
                break;
            case 2:
            case 3:
            case 4:
                result = ' очка.';
                break;
            default:
                result = ' очков.';
                break;
        };
        return result;
    };

    // основное тело главной функции run
    for(var i = 1; i <= 15; i++) {
        
        if (i == 8 || i == 13 ){
            continue;
        };

        first = getRndNumber();
        second = getRndNumber();
        
        setResult("Первая кость: " + first + " Вторая кость: " + second + ".");
        
        isNumberEqual(first, second);
        isBigDifference(first, second);
        setToltal(first + second);
    };
    setResultTotal = (( total > 100) ? "Победа!!! Вы набрали: " : "Вы проиграли. У Вас ") + total + getComment(total);
    
    printResult(setResultStr);
    printResult(setResultTotal);
}

run();