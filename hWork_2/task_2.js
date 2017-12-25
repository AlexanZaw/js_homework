//
console.log('Цикл FOR');
for (i = 1; i <= 15; i++){
    if (i % 2 == 0 ){
        console.log(' Чётное ' + i);
    } else {
        console.log(' Не чётное ' + i);
    }
}

//
var i = 0;
console.log('Цикл WHILE');
while (i < 15){
    i++;
    if (i % 2 == 0 ){
        console.log(' Чётное ' + i);
    } else {
        console.log(' Не чётное ' + i);
    }
}

//
var i = 1;
console.log('Цикл DO...WHILE');
do{
    if (i % 2 == 0 ){
        console.log(' Чётное ' + i);
    } else {
        console.log(' Не чётное ' + i);
    }
    i++;
} while (i<=15);