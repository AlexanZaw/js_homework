const elemTask3 = document.getElementById('result3');
const inputValuesTask3 = document.getElementById('inputValue3');
const btnTask3 = document.getElementById('rezButton3');

function isLeapYear(getYear) {
    var result;

    function isDivision(getNumber) {
        var result;

        if(((getNumber % 4 == 0) && (getNumber % 100 != 0)) || (getNumber % 400 == 0)) {
            result = true;
        } else {
            result = false;
        };
        
        return result;
    };

    if((typeof getYear) == "number") {
        result = isDivision(getYear);
    } else if(!(isNaN(getYear))) {
        result = isDivision(Number(getYear));
    } else {
        result = "Ошибка! Введённое Вами значение не число.";
    };
    
    return result;
};

function run() {
    elemTask3.innerHTML = isLeapYear(inputValuesTask3.value);
}
btnTask3.addEventListener("click", run);