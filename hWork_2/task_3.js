for (var i = 100; i >= 0; i -= 10){
   if (i == 30 || i == 70 || i == 90){
       continue;
   }
     elemResult.innerHTML += 'Число: <b>' + 100 - i + '</b><br>';
}