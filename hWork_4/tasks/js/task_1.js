'use strict'
const elem = document.getElementById('result');
const inpArr = document.getElementById('inputArr');
const inpFind = document.getElementById('inputFind');
const btn = document.getElementById('rezButton');

var inputArr = [];

function checkArr(inFind) {
    while (inputArr.indexOf(inFind) != -1) {
        inputArr.splice(inputArr.indexOf(inFind), 1);
    };
    return inputArr.join();
};

function run(){
    var prValue = String(inpArr.value);
    inputArr = prValue.split(' ');
    elem.innerHTML = checkArr(inpFind.value);
}
btn.addEventListener('click', run);