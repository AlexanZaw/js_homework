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
        let nextLine = "<p>";  //  "\n"
        setResultStr += getResultStr + nextLine;
        return setResultStr;
    };
    
    // функция проверки на дубль
    function isNumberEqual(getFirst, getSecond) {
        if(getFirst == getSecond) {
            setResult("Выпал дубль. Число: " + getFirst);
        };
    };

    // функция проверки разброса
    function isBigDifference(getFirst, getSecond) {
        if(getFirst < 3 && getSecond > 4) {
            setResult("Большой разброс между костями. Разница составляет " + (getSecond - getFirst));
        };
    };
 
    // функция подсчёта общего колличества очков
    function setToltal(getSum) {
        return total += getSum;
    };
   /* 
    // функция подсчёта общего колличества очков и оценки результата
    function setToltalOld(getSum, getCounter) {
        var result;
        
        if(getCounter != 15) {
            total += getSum;
        } else {
            total += getSum;
            result = ( total > 100) ? "Победа!!! Вы набрали: " + total + " очков." : "Вы проиграли. У Вас " + total + " очков.";
        }
        return result;
    };*/

    // функция вывода в HTML-документ результатов
    function printResult(getResultStr) {
        document.getElementById("result").innerHTML += getResultStr;
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
        //setResultTotal = setToltalOld((first + second), i); 
        total = setToltal(first + second);
    };
    setResultTotal = ( total > 100) ? "Победа!!! Вы набрали: " + total + " очков.": "Вы проиграли. У Вас " + total + " очков.";
    
    printResult(setResultStr);
    printResult(setResultTotal);
}

run();