'use strict'
const elem4 = document.getElementById('result4');
const inpArr1 = document.getElementById('inputArr2');
const btn4 = document.getElementById('rezButton4');

function run(){
    let inArr;
    let outArr = [];
    let prStr = String(inpArr1.value);
    inArr = prStr.split(',');
    inArr.forEach(value => {
        if (outArr.indexOf(value) == -1){
            outArr.push(value);
        }
    });
    elem4.innerHTML = outArr;
}

btn4.addEventListener('click', run);