//schermata per inserimento email
var login = prompt ("Inserisci la tua e-mail");

//database email registrate
var email = [
  "mail1@gmail.com",
  "mail2@gmail.com",
  "mail3@gmail.com",
  "mail4@gmail.com",
  "mail5@gmail.com",
  "mail6@gmail.com",
  "mail7@gmail.com",
  "mail8@gmail.com",];

// valore booleano
var registered = false;

//operazione di controllo
  for (var i=0; i<email.length; i++){
    //se l'email inserita è presente nel database allora il valore booleano è vero
    if(login==email[i]) registered=true;
}
//se il valore è vero allora...
if (registered){
  alert("Benvenuto utente");
}
else{
  alert("Non sei registrato");
}
