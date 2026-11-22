// Traccia 02 · Il cambio in aeroporto
// La consegna è nel README, alla voce "02 · Il cambio in aeroporto".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama? calcolaDollariRicevuti
  Di quali dati ha bisogno? il valore in euro, la commissione e il tasso di cambio
  Deve restituire qualcosa? il valore in dollari
  Di che tipo? nuemrico

  STEPS
  1 - Il controllo deve subito restituire "0" se l'importo in imput non basta 
  2 - se basta invece deve fare il calcolo della commissione e il tasso di cambio 
  3 -  e deve restituire il valore in dollati
*/

// # La funzione
function calcolaDollariRicevuti(importoEuro, tassoCambio, commissione) {
  if (importoEuro <= commissione) {
    return 0
  }
  const dollariRicevuti = (importoEuro - commissione) * tassoCambio;
  return dollariRicevuti;
}

// # Le prove: una riga di console.log per ogni caso di "Come verifichi"
console.log("100 € diventano " + calcolaDollariRicevuti(100, 1.08, 5).toFixed(2) + " $");
console.log("250 € diventano " + calcolaDollariRicevuti(250, 1.08, 5).toFixed(2) + " $");
console.log("100 € diventano " + calcolaDollariRicevuti(100, 1.12, 0).toFixed(2) + " $");
console.log("3 € diventano " + calcolaDollariRicevuti(3, 1.08, 5).toFixed(2) + " $");
console.log("Con argomenti scambiati: " + calcolaDollariRicevuti(100, 5, 1.08).toFixed(2) + " $");

