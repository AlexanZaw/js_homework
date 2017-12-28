const elemNew = document.getElementById('result2');
const inputValuesNew = document.getElementById('inputValue2');
const btnNew = document.getElementById('rezButton2');

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

function run() {
    elemNew.innerHTML = insStrings(inputValuesNew.value);
}
btnNew.addEventListener("click", run);