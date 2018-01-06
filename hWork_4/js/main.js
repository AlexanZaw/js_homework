'use strict'
/*
    Данном скрипте представлены 2 разных способа 
    создания и обработки елементов результирующего массива
*/
var btn = document.getElementById("play");
var btnsecond = document.getElementById("playsecond");
var newArr = [];

data.splice(5, 1);
data.forEach(itemObj => {
    delete itemObj.id;
    newArr.push(itemObj);
});

function consoleWrite(arrWrite){
    /*
        Функция выводит в консоль поступиший аргумент, в данном случае arrWrite
    */
    console.log(arrWrite);
}

function transformFirst() {
    /*
        Первый способ созданния результирующего массива.
        В данном способе каждый новый еллемент результирующего массива newArrMapping
        создаётся путём копирования входящего объекта(условие задачи) itemObj 
        в новый объект newItemObj, используя метод assign глобального типа Object, 
        после чего в новом объекте создаюся и изменяются значения свойств в соответствии с условиями задачи
    */
    let newArrMapping = newArr.map(itemObj => {
        let newItemObj = Object.assign({}, itemObj);
        newItemObj.isVisible = newItemObj.params.status;
        newItemObj.name = newItemObj.name[0].toUpperCase() + newItemObj.name.substring(1).toLowerCase();
        newItemObj.url =  (newItemObj.url.indexOf('http://') != 0 ? 'http://'+newItemObj.url : newItemObj.url);
        newItemObj.description = newItemObj.description.substr(0, 15) + '...';
        newItemObj.params = newItemObj.params.status+'=>'+newItemObj.params.progress;
        newItemObj.date = moment(newItemObj.date).format('YYYY/MM/DD hh:mm');
        return newItemObj;
    });
   
    let newArrFiltered = newArrMapping.filter(itemObj => itemObj.isVisible === true);    
    consoleWrite(newArrFiltered);
}

function transformSecond() {
    /*
        Второй способ 
        В данном способе создаётся пустой объект newItemObj после чего
        в нём создаются свойства в соответствии с условием задачи
    */
    let newArrMapping = newArr.map(itemObj => {
        
        let newItemObj = {};
        
        newItemObj.isVisible = itemObj.params.status;
        
        for(let key in itemObj){
            switch (key){
                case 'name':
                    newItemObj[key] = itemObj[key][0].toUpperCase() + itemObj[key].substring(1).toLowerCase();
                    break;
                case 'url':
                    newItemObj[key] = (itemObj[key].indexOf('http://') != 0 ? 'http://'+itemObj[key] : itemObj[key]);
                    break;
                case 'description':
                    newItemObj[key] = itemObj[key].substring(0, 15)+'...';
                    break;
                case 'params':
                    newItemObj[key] = itemObj[key].status+'=>'+itemObj[key].progress;
                    break;
                case 'date':
                    newItemObj[key] = moment(itemObj[key]).format('YYYY/MM/DD hh:mm');
                    break;
                default:
                    newItemObj[key] = itemObj[key];
                }
            }
        return newItemObj;
    });
    
    let newArrFiltered = newArrMapping.filter(itemObj => itemObj.isVisible === true);    
    consoleWrite(newArrFiltered);
}

btn.addEventListener("click", transformFirst);
btnsecond.addEventListener("click", transformSecond);