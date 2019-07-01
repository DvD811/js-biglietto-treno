// chiedere all' utente l' età
var age = prompt("Inserisci il tuo anno di nascita");
// chiedere all' utente i chilometri del viaggio
var lungh = prompt(" Inserisci il chilometraggio del tuo viaggio");
//  calcolo del prezzo del biglietto 
var age;
var sconto;

if ((2019 - age) < 18) {
    sconto = 20 %
}
if ((2019 - age) > 65) {
    sconto = 40 % ;
} else {
    sconto = 0 % ;
};
console.log(sconto);
//  0.21 cent x km ma con uno sconto di 20% if < 18 anni e del 40% if> 65 anni