let strResult;
const elem = document.getElementById('result');
const inputValues = document.getElementById('inputValue');
const btn = document.getElementById('rezButton');

    function setBirds(countBird) {
        var result;
        function setResultat(getCountBird){
            var prResult;

            if(getCountBird == 1) {
                prResult = " ворона.";
            } else if(getCountBird > 1 && getCountBird <= 4) {
                prResult = " вороны.";
            } else {
                prResult = " ворон.";
            };
        
            return prResult;    
            };  
    
        if(countBird <= 10) {
            result = setResultat(countBird);
        };

        if(countBird > 10 && countBird <= 20) {
            result = " ворон.";
        };

        if (countBird > 20){
            result = setResultat(countBird % 10);
        };
    
        return result;
    };

    function run (){
        let setCountBird;
        let result;

        setCountBird = inputValues.value;
        if(isNaN(setCountBird)) {
            result = 'Введённое значение на является числом.';
        } else {
            result = "На ветке сидит " + setCountBird + setBirds(setCountBird);
        }
        elem.innerHTML = result;   
    };        
btn.addEventListener("click", run);
