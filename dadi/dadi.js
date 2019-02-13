var giocatore1 = prompt("Inserisci il tuo nome");
var giocatore2 = prompt("Inserisci il tuo nome");

var lancio1 = Math.floor(Math.random()*6)+1;
var lancio2 = Math.floor(Math.random()*6)+1;

if(lancio1>lancio2){
  alert("Vince " + giocatore1 + "!")
}
if(lancio2>lancio1){
  alert("Vince " + giocatore2 + "!")
}
if(lancio2==lancio1){
  alert("Pareggio!")
}
