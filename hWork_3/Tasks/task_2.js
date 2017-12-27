var setStrings;

function insStrings(getStrings) {
    var result;
    
    result = String(getStrings);
    if(result.length >= 15) {
        result = result.substring(0, 15) + "...";  
    } else {
        result += "...";  
    };
    
    return result;
};

setStrings = "123456789101112131415";
console.log(insStrings(setStrings));