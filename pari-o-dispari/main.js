// scelta tra pari o dispari da parte dell'utente
var sceltaUtente;
do {
    sceltaUtente = prompt('Scegliere pari o dispari');
} while (!chosesOdd(sceltaUtente) && !chosesEven(sceltaUtente))
console.log('La tua scelta è: ' + sceltaUtente);

// scelta d un numero compreso da 1 a 5 da parte dell'utente
var numeroUtente;
do {
    numeroUtente = parseInt(prompt('Scegli un numero da 1 a 5'));
} while (isNaN(numeroUtente) && numeroUtente >= 1 && numeroUtente <= 5)

console.log('Il numero scelto dall\'utente è: ' + numeroUtente);
// genera e stampa un numero random tra 1 e 5
var randomNumber = getRandomNumber(1, 5);
console.log('Il numero generato casualmente è: ' + randomNumber);

// somma il numero random con il numero scelto dall'utente
var somma = randomNumber + numeroUtente;
console.log('la somma dei 2 numeri è: ' + somma);

// comunica all'utente se la sua scet
if ((isEven(somma) && chosesEven(sceltaUtente)) || (!isEven(somma) && chosesOdd(sceltaUtente))) {
    console.log('Complimenti hai vinto!');
} else {
    console.log('Mi dispiace, hai perso!');
}


function chosesOdd(word) {
    word = word.trim().toLowerCase();
    return word == 'dispari';
}

function chosesEven(word) {
    word = word.trim().toLowerCase();
    return word == 'pari';
}

function getRandomNumber(min, max) {
    var randomNumber = Math.floor(Math.random() * (max + 1 - min)) + min;
    return randomNumber;
}

function isEven(number) {
    if(number % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
