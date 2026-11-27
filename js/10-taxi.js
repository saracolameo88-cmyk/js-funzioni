// Traccia 10 · Il taxi di notte
// La consegna è nel README, alla voce "10 · Il taxi di notte".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama?
  Di quali dati ha bisogno?
  Deve restituire qualcosa?
  Di che tipo?

  STEPS
  1 -
  2 -
  3 -
*/

// # Le funzioni
function verificaOraNotturna(ora) {
  if (ora >= 0 && ora <= 5) {
    return true
  }
  return false
};

function calcolaTotaleCorsa(prezzoBase, oraPartenza, oraArrivo) {
  if (verificaOraNotturna(oraPartenza) || verificaOraNotturna(oraArrivo)) {
    return prezzoBase + 5
  }
  return prezzoBase
}

// # Le prove: una riga di console.log per ogni caso di "Come verifichi"

console.log(`Ora 0 è notte: ${verificaOraNotturna(0)}`);
console.log(`Totale corsa: ${calcolaTotaleCorsa(20, 23, 1)} €`);
console.log(`Ora 5 è notte: ${verificaOraNotturna(5)}`);
console.log(`Ora 6 è notte: ${verificaOraNotturna(6)}`);
console.log(`Ora 23 è notte: ${verificaOraNotturna(23)}`);

console.log(`Totale corsa (22-23): ${calcolaTotaleCorsa(20, 22, 23)} €`);
console.log(`Totale corsa (23-0): ${calcolaTotaleCorsa(20, 23, 0)} €`);
console.log(`Totale corsa (2-3): ${calcolaTotaleCorsa(20, 2, 3)} €`);
console.log(`Totale corsa (5-6): ${calcolaTotaleCorsa(20, 5, 6)} €`);
console.log(`Totale corsa (6-7): ${calcolaTotaleCorsa(20, 6, 7)} €`);