/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
function checkAge() {
    const myAge = 32;
    let message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
}
checkAge();
// 1- Questo codice mi restituisce un messaggio se ho meno di 18 anni e un altro messaggio se ne ho più di 18
// 2- No
// 3- Si perchè const message non va bene in questo caso visto che la variabile può cambiare, quindi meglio un let

// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.length} colori!`);
}
printColorsNumber();
// 1- Questa funzione mi restituisce un messaggio che mi dice quanti colori ci sono nell'array
// 2- No
// 3- Si bisogna cambiare il .lenght in .length riga 32

// ESERCIZIO 3
function addNumbers() {
    const userNumber = prompt('Inserisci un numero');
    const total = parseInt(userNumber) + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();
// 1- La funzione chiede un numero all'utente tramite il prompt e aggiunge 12 facendo uscire un messaggio con la somma del numero chiesto piu 12
// 2- no
// 3- si dobbiamo aggiungere un parseInt a riga 42 davanti ad usernumber perchè il prompt restituisce una stringa e dobbiamo trasforma in numero


// ESERCIZIO 4
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    if (addresses.includes(userEmail)) {
        grantAccess = true;
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();
// 1 In questo esercizio abbiamo un array di emai e un prompt che ci chiede la mail. tramite l'if verfichiamo se la mail inserita è presenta nell'array addresses e restituiamo un messaggio positivo in caso sia presente e un messaggio negativo al contrario
// 2- I valori booleani non vanno tra gli apici
// 3- NO

// ESERCIZIO 5 (suggerimento: c'è un solo errore)

function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];

        if (userEmail.length > 5) {

            if (email === userEmail) {
                grantAccess = true;

            }

        }

        if (grantAccess) {
            console.log('Accesso consentito!');
        } else {
            console.log('Accesso negato!');
        }
    }
}   
    checkAccessImproved();


// 1- Con questa funzione abbiamo una cosa molto simile all'esercizio 4 ma con un controllo sulla lunghezza in più
// 2- mancava un } alla fine e i valori booleani non tra gli apici
// 3- NO
