'use strict'
const curDat = document.getElementById('curDat');
const newCurDat = document.getElementById('result2');
const btn2 = document.getElementById('rezButton2');

var curDate = new Date();

function newFormatDate(cDate){
    let curT = cDate.getMinutes(),
    curH = cDate.getHours(),
    curD = cDate.getDate(),
    curM = cDate.getMonth() + 1,
    curY = cDate.getFullYear();
    let result = `Current Date is: ${curH}:${curT} ${curD<10 ? '0'+curD : curD}/${curM<10 ? '0'+curM : curM}/${curY}`;
    return result;
}

function run(){
    curDat.innerHTML = curDate;
    newCurDat.innerHTML = newFormatDate(curDate);
}

btn2.addEventListener('click', run);