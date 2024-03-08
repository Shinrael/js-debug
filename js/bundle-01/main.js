/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// 1- Questo esercizio è un ciclo e mi stampa i valori da 0 a 4
// 2- No
// 3- Si bisogna cambiare il > in < sennò la condizione di partenza sarà sempre falsa in quanto i = 0

// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    }
    return num;
}
// 1- Questo esercizio è una funzione e dice che se il numero è pari mi restituisce un + 5 al numero di partenza altrimenti no
// 2- Si l'uguale deve essere triplo perchè mi serve per confrontare l'uguaglianza
// 3- No

// ESERCIZIO 3
function loopToFive() {
    for (let i = 0; i < 6; i++) {
        console.log(i);
    }
}
// 1- Questo esercizio è sempre una funzione che mi restituisce come nel primo esercizio il conteggio fino a 5.
// 2- Si nella condizione del ciclo non ci vanno le virgole ma i ;
// 3- Si perchè se voglio che il conteggio arrivi fino a 5 devo mettere <6

// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
        
    }
    return evenNumbers;
}
displayEvenNumbers();
 // dovrebbe restituire [2,4,6,8]
// 1- In questa funzione abbiamo due array uno con dei numeri e l'altro vuoto. Tramite il ciclo andiamo a mettere dentro l'array vuoto solo quei numeri che mi restituiscono 0 divisi per due, quindi i numeri pari 
// 2- Si nella riga 46 il ; finale nella condizione non serve e il -1 che non serve, nella riga 47 serve il triplo = per il controllo e [i] dopo numbers e togliamo il ;, nella riga 48 non pushiamo (i) ma pushiamo (numbers[i]) e il return sta fuori dal ciclo.
// 3- Non mi sembra