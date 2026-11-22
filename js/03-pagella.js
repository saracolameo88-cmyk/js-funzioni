// Traccia 03 · Lo scritto vale doppio
// La consegna è nel README, alla voce "03 · Lo scritto vale doppio".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama? calcolaMediaPonderata
  Di quali dati ha bisogno? votoScritto votoOrale
  Deve restituire qualcosa? mediaPonderata
  Di che tipo? Numerico

  STEPS
  1 - il controllo deve fare un calcolo della media
  2 - se la media è minore di sei il risultato deve stampare non ammesso + il voto della media
  3 - se invece è maggiore di sei il risultato sarà ammesso + il voto della media
*/

// # La funzione
function calcolaMediaPonderata(votoScritto, votoOrale) {
  const media = (votoScritto * 2 + votoOrale) / 3;
  return media;
}

// # Le prove: una riga di console.log per ogni caso di "Come verifichi"
console.log("Media: " + calcolaMediaPonderata(10, 9).toFixed(1));
console.log("Media: " + calcolaMediaPonderata(6, 9).toFixed(1));
console.log("Media: " + calcolaMediaPonderata(8, 6).toFixed(1));
console.log("Media: " + calcolaMediaPonderata(5, 8).toFixed(1));
console.log("Media: " + calcolaMediaPonderata(9, 6).toFixed(1));

