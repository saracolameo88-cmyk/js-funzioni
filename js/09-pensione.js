// Traccia 09 · Quanto manca alla pensione
// La consegna è nel README, alla voce "09 · Quanto manca alla pensione".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama? trovaEtaPensione
  Di quali dati ha bisogno? dato del tipo di lavoro
  Deve restituire qualcosa? l'età in base al tipo di lavoro
  Di che tipo? nuemrico

  STEPS
  1 -
  2 -
  3 -
*/

// # Le funzioni
function trovaEtaPensione(tipoDiLavoro) {
  if (tipoDiLavoro === "usurante") {
    return 62;
  } else if (tipoDiLavoro === "ordinario") {
    return 67;
  } else {
    return 0;
  }
}
function calcolaAnniAllaPensione(annoNascita, annoCorrente, tipoDiLavoro) {
  // 1. Quanti anni ha oggi
  const etaAttuale = annoCorrente - annoNascita;

  // 2. A che età andrà in pensione (usando la prima funzione!)
  const etaPensione = trovaEtaPensione(tipoDiLavoro);

  // 3. Quanti anni mancano
  const anniMancanti = etaPensione - etaAttuale;

  // 4. Se è già in pensione (o l'età è passata), restituisce 0, altrimenti gli anni che mancano
  if (anniMancanti <= 0) {
    return 0;
  } else {
    return anniMancanti;
  }
}

// # Le prove: una riga di console.log per ogni caso di "Come verifichi"

console.log(trovaEtaPensione("ordinario"));
console.log(trovaEtaPensione("usurante"));

console.log(calcolaAnniAllaPensione(2000, 2026, "ordinario"));
console.log(calcolaAnniAllaPensione(2000, 2026, "usurante"));
console.log(calcolaAnniAllaPensione(2000, 2027, "ordinario"));
console.log(calcolaAnniAllaPensione(1960, 2026, "ordinario"));
console.log(calcolaAnniAllaPensione(1964, 2026, "usurante"));
console.log(calcolaAnniAllaPensione(1950, 2026, "ordinario"));