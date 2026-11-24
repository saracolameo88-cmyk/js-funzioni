// Traccia 08 · Dal nome al numero del giorno
// La consegna è nel README, alla voce "08 · Dal nome al numero del giorno".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama? trovaNumeroGiorno
  Di quali dati ha bisogno? nome del giorno
  Deve restituire qualcosa? deve restiuire ilb numero del giorno
  Di che tipo? numero

  STEPS
  1 - prima di tutto c'è la verifica di controllo se ci dovessero essere errori
  2 - altrimenti si inserisce il giorno esatto
  3 - e restitusce il numero
*/

// # La funzione
function trovaNumeroGiorno(nomeGiorno) {
  const giorni = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"];
  for (let i = 0; i < giorni.length; i++) {
    if (giorni[i] === nomeGiorno) {
      return i + 1;
    }
  } return 0;
}

// # Le prove: una riga di console.log per ogni caso di "Come verifichi"

console.log(trovaNumeroGiorno("Lunedì"));    // deve dare 1
console.log(trovaNumeroGiorno("Mercoledì")); // deve dare 3
console.log(trovaNumeroGiorno("Domenica"));  // deve dare 7
console.log(trovaNumeroGiorno("lunedì"));    // deve dare 0 (minuscola)
console.log(trovaNumeroGiorno("Lunedi"));    // deve dare 0 (senza accento)
console.log(trovaNumeroGiorno("Pippo"));     // deve dare 0 (non esiste)