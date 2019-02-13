var num1 = (Math.floor(Math.random()*6)+1);
var num2 = (Math.floor(Math.random()*6)+1);

alert(num1 + " : " + "questo è il numero di utente1");
alert(num2 + " : " + "questo è il numero di utente2");

if (num1 > num2) {
  alert("utente 1 è il vincitore");
} else if (num1 == num2) {
  alert("avete pareggiato");
} else {
  alert("utente 2 è il vincitore");
}
