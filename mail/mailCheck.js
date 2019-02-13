var mailAdd =["mail1@hotmail.it" , "mail2@gmail.com" , "mail3@libero.it" ,"mail4@hotmail.it" , "mail5@outlook.it"];

var mailInserita = prompt("digita il tuo indirizza e-mail:");


for (var i=0 ; i< mailAdd.length ; i++ ){
  console.log(mailAdd[i]);

  if ( mailAdd[i] == mailInserita ) {
    alert("Benvenuto!");
  }else {
    alert("la tua mail non è corretta!");
  }

}
