// Traccia 04 · Dal voto al giudizio
// La consegna è nel README, alla voce "04 · Dal voto al giudizio".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama? trovaGiudizio
  Di quali dati ha bisogno? votoMedia
  Deve restituire qualcosa? giudizioFinale
  Di che tipo? stringa

  STEPS
  1 - la funzione deve un giudizio al votoMedia
  2 - se il voto è minore di 1 oppure maggiore di 10 il giudizioFinale deve restituire "Voto non valido"
  3 - invece se è minore 5 il giudizioFinale deve restituire "gravemente Insufficiente"
  4 - invece se è minore  6 il giudizioFinale deve restituire "Insufficiente"
  5 - invece se è minore 7 il giudizioFinale deve restituire "Sufficiente"
  6 - invece se è minore a 8 il giudizioFinale deve restituire "Buono"
  7 - altrimenti il giudizioFinale è "Ottimo"
*/

// # La funzione
function trovaGiudizio(votoMedia) {
  if (votoMedia < 1 || votoMedia > 10) {
    return "Voto non valido";
  } else if (votoMedia < 5) {
    return "Gravemente insufficiente";
  } else if (votoMedia < 6) {
    return "Insufficiente";
  } else if (votoMedia < 7) {
    return "Sufficiente";
  } else if (votoMedia < 8) {
    return "Buono";
  } else {
    return "Ottimo";
  }
}
// # Le prove: una riga di console.log per ogni caso di "Come verifichi"

function calcolaMediaPonderata(votoScritto, votoOrale) {
  const media = (votoScritto * 2 + votoOrale) / 3;
  return media;
}
console.log(trovaGiudizio(7.5));
console.log(trovaGiudizio(11));
console.log(trovaGiudizio(3));
console.log(trovaGiudizio(6));
console.log(trovaGiudizio(5));
console.log(trovaGiudizio(8));
console.log(trovaGiudizio(0));

console.log(trovaGiudizio(calcolaMediaPonderata(3, 8)));
