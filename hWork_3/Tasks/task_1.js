var setCountBird;

function setBirds(countBird) {
    let result;

    function setResultat(getCountBird){
        let prResult;

        switch (getCountBird) {
            case 1: 
                prResult = " ворона";
                break;
            case 2:
            case 3:
            case 4: 
                prResult = " вороны";
                break;
            default: 
                prResult = " ворон";
                break;
        }
       /* if(getCountBird == 1) {
                prResult = " ворона.";
            } else if(getCountBird > 1 && getCountBird <= 4) {
                prResult = " вороны.";
            } else {
                prResult = " ворон.";
            };
        */
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

setCountBird = 83;
console.log("На ветке сидит " + setCountBird + setBirds(setCountBird));