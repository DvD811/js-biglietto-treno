// chiedere all' utente l' età
var yeage = prompt("Inserisci il tuo anno di nascita");
// chiedere all' utente i chilometri del viaggio
var lungh = prompt(" Inserisci il chilometraggio del tuo viaggio");
//  calcolo del prezzo del biglietto 
var yeage;
var sconto;

var age = (2019 - yeage);
var bigliettoInt = (0.21 * lungh);

if (age < 18) {
    sconto = 20;
    var biglietto = (bigliettoInt / 100) * 20;
}
if (age > 65) {
    sconto = 40;
    var biglietto = (bigliettoInt / 100) * 40;
} else {
    sconto = 0;
    var biglietto = (bigliettoInt);
};
console.log(sconto)

console.log(biglietto);
document.getElementById("prezzoTreno").innerHTML = "Il prezzo del tuo biglietto sarà:" + biglietto + ". Ti è stato applicato uno sconto del:" + sconto + "%.";
//  0.21 cent x km ma con uno sconto di 20% if < 18 anni e del 40% if> 65 anni