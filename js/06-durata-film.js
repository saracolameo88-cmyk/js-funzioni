// Traccia 06 · La durata del film
// La consegna è nel README, alla voce "06 · La durata del film".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama? formattaDurata
  Di quali dati ha bisogno? totale minuto film
  Deve restituire qualcosa? la durata del film in ore e minuti
  Di che tipo? di tipo stringa

  STEPS
  1 - prima creo una costante che divide il totale dei minuti in ore e minuti
  2 - poi creo un altra costante che trasforma ore in ora
  3 - poi applico delle condizioni
*/

// # La funzione
function formattaDurata(minutiTotali) {
  const ore = Math.floor(minutiTotali / 60);
  const minuti = minutiTotali % 60;

  if (ore === 0) {
    return minuti + " minuti";
  } else if (minuti === 0) {
    if (ore === 1) {
      return "1 ora";
    }
    return ore + " ore";
  } else if (ore === 1) {
    return ore + " ora e " + minuti + " minuti";
  } else {
    return ore + " ore e " + minuti + " minuti";
  }
}

// # Le prove: una riga di console.log per ogni caso di "Come verifichi"

console.log(formattaDurata(148));
console.log(formattaDurata(95));
console.log(formattaDurata(120));
console.log(formattaDurata(60));
console.log(formattaDurata(45));
console.log(formattaDurata(0));