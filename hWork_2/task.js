let total = 0; //переменная для подсчёта общего результата

for (i = 0; i < 15; i++){
    var first = Math.floor((Math.random() * 6) + 1);
    var second = Math.floor((Math.random() * 6) + 1);

    if (i == 8 || i ==13 ){
        continue;
    }

    document.getElementById("result").innerHTML += "Первая кость: " + first + "Вторая кость: " + second + " ";
    
    if (first == second){
        document.getElementById("result").innerHTML += "Выпал дубль. Число " + first;
    }

    if (first < 3 && second > 4){
        document.getElementById("result").innerHTML += "Большой разброс между костями. Разница составляет " + (second - first);
    }
    total += (first + second);
}
total > 100 ? document.getElementById("result").innerHTML +="Победа!!! Вы набрали: " + total : document.getElementById("result").innerHTML += "Вы проиграли. У Вас " + total + " очков";
