var mailAddArray["mail1@hotmail.it" , "mail2@gmail.com" , "mail3@libero.it" ,"mail4@hotmail.it" , "mail5@outlook.it"];

var mailAdd = prompt("digita il tuo indirizza e-mail:");


for (var i=0 ; i<mailAddArray.length ; i++ ){
  console.log(mailAddArray[i]);
  if (mailAdd==i) {
    alert("Benvenuto!");
  }else {
    alert("la tua mail non è corretta!");
  }
}
