for (var i = 0; i <= 100; i += 10){
   if (100 - i == 30 || 100 - i == 70 || 100 - i == 90){
       continue;
   }
     elemResult.innerHTML += 'Число: <b>' + 100 - i + '</b><br>';
}