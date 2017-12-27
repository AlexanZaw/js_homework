var setYear;

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
    } else if(isFinite(getYear)) {
        result = isDivision(Number(getYear));
    } else {
        result = "Ошибка! Введённое Вами значение не число.";
    };
    
    return result;
};

setYear = "1900";
console.log(isLeapYear(setYear));