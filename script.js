// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

// il prezzo del biglietto è definito in base ai km (0.21 € al km)
//  va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// TIP:
// per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:

// 100km, 10 anni => prezzo corretto:  €16.80
// 100km, 70 anni => prezzo corretto: €12.60

// Chiedi all'utente il numero di chilometri e l'età
const km = parseFloat(prompt("quanti chilometri vuoi percorrere?"));
const age = parseInt(prompt("quanti anni hai?"));

// Calcola il prezzo base del biglietto
let price= km * 0.21;
 
// Applica sconti in base all'età
if (age <18) {
    // calcolo sconto del 20% per i minorenni
    let sconto = price * 0.20;
    price = price - sconto;
} else if (age > 65) {
    // calcolo sconto del 40% per gli over 65
    let sconto = price * 0.40;
    price = price - sconto; 
}
console.log("il prezzo del biglietto è: €" + price.toFixed(2));    




