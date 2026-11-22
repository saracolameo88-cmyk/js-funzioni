// Traccia 05 · La fascia d'età
// La consegna è nel README, alla voce "05 · La fascia d'età".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama? trovaFasciaEta 
  Di quali dati ha bisogno? dell'età
  Deve restituire qualcosa? una stringa
  Di che tipo? lettere ""

  STEPS
  1 - controllo dell'età non valida minore di 0 che restituscie "Età non valida"
  2 - controllo dell'età < 18 che restituisce "Minorenne"
  3 - controllo dell'età =18 && <= 35 che restituisce "Giovane adulto"
  4 - controllo dell' età = 36 && <= 60 che restituisce "Adulto"
  5 - alrtimenti <60 restituisce "Senior"
*/

// # La funzione
function trovaFasciaEta(eta) {
  if (eta < 0) {
    return "Età non valida";
  } else if (eta < 18) {
    return "Minorenne";
  } else if (eta <= 35) {
    return "Giovane Adulto";
  } else if (eta <= 60) {
    return "Adulto";
  } else {
    return "Senior";
  }
}

// # Le prove: una riga di console.log per ogni caso di "Come verifichi"
console.log(trovaFasciaEta(0));
console.log(trovaFasciaEta(17));
console.log(trovaFasciaEta(18));
console.log(trovaFasciaEta(35));
console.log(trovaFasciaEta(36));
console.log(trovaFasciaEta(60));
console.log(trovaFasciaEta(61));
console.log(trovaFasciaEta(-3));