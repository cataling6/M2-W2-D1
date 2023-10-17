//ESERCIZI SUGLI IF:

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* let num1 = 10;
let num2 = 12;

if (num1 > num2) {
  console.log("primo numero è maggiore ");
} else {
  console.log("secondo numero è maggiore");
} */

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/*
let number = 17;
if (number < 5) {
  console.log("Tiny");
} else if (number < 10) {
  console.log("Small");
} else if (number < 15) {
  console.log("Medium");
} else if (number < 20) {
  console.log("Large");
} else {
  console.log("Huge");
}
*/

//ESERCIZI SUI CICLI:

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

/*
for (let i = 0; i <= 10; i++) {
  if (i != 3 && i != 8) {
    console.log(i);
  } else {
    continue;
  }
}
*/

/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* 

let pari = 0;
let dispari = 0;
for (let i = 0; i < 15; i++) {
  if (i % 2 == 0) {
    console.log("il numero " + i + " è pari");
    pari++;
  } else {
    console.log("il numero " + i + " è dispari");
    dispari++;
  }
}
console.log("=====================");
console.log(
  "alla fine di questo ciclo ho trovato " +
    pari +
    " numeri pari e " +
    dispari +
    " numeri dispari."
);

*/

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/*  let num1 = {
  nome: "numero 1",
  valore: 1,
};

let num2 = {
  nome: "numero 2",
  valore: 9,
};

let somma = num1.valore + num2.valore;
let dif = num1.valore - num2.valore;
let numeriUgualiAOtto = 0;
let numeri = [num1, num2];

for (let i = 0; i < 2; i++) {
  if (numeri[i].valore === 8) {
    console.log(numeri[i].nome + " è uguale a 8!");
    numeriUgualiAOtto++;
  }
}
if (numeriUgualiAOtto === 0) {
  console.log("nessuno dei due numeri è uguale a 8");
}
console.log("============================================");
if (somma === 8) {
  console.log("somma dei due numeri uguale a 8");
} else if (dif === 8 || dif === -8) {
  console.log("differenza dei due numeri uguale a 8");
} else {
  console.log("ne somma ne differenza dei due numeri è uguale a 8...");
}/*

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/
