'use strict'
const curPath = document.getElementById('pathFile');
const btn3 = document.getElementById('rezButton3');
const elem3 = document.getElementById('result3');

function getExt(inStr){
    return (inStr.lastIndexOf('.') != -1) ? inStr.substr(inStr.lastIndexOf('.')) : 'Вы ввели строку без расширения файла.';
}

function run(){
    let inpStr;
    inpStr = curPath.value;
    elem3.innerHTML = getExt(inpStr);
}

btn3.addEventListener('click', run);