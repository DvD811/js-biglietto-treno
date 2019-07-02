// chiedere all' utente l' età
var yeage = prompt("Inserisci il tuo anno di nascita");
// chiedere all' utente i chilometri del viaggio
var lungh = prompt(" Inserisci il chilometraggio del tuo viaggio");
//  calcolo del prezzo del biglietto 
var yeage;
var sconto;

var age = (2019 - yeage);


if (age < 18) {
    sconto = (lungh / 100) * 20;
}
if (age > 65) {
    sconto = (lungh / 100) * 40;
} else {
    sconto = 0;
};
console.log(sconto)
var biglietto = ((0.21 * lungh) - sconto);
console.log(biglietto);
document.getElementById("prezzoTreno").innerHTML = "Il prezzo del tuo biglietto sarà:" + biglietto + ". Ti è stato applicato uno sconto del:" + sconto;
//  0.21 cent x km ma con uno sconto di 20% if < 18 anni e del 40% if> 65 anni