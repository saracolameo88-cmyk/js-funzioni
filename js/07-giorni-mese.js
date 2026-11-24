// Traccia 07 · I giorni del mese
// La consegna è nel README, alla voce "07 · I giorni del mese".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama? contaGiorniDelMese
  Di quali dati ha bisogno? del numero di ogni per ogni mese e in numero dei mesi
  Deve restituire qualcosa? si deve restituire i giorni totali del mese
  Di che tipo? numerico

  STEPS
  1 - creo un contenitore con il numero per ogni giorno del mese
  2 - poi creo una finzione dove vinene indicato il numeromese
  3 - poi faccio il controllo sicurezza
  4 - e poi quelli che seguono
 */
// # La funzione

function contaGiorniDelMese(numeroMese) {
  const giorniDeiMesi = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (numeroMese < 1 || numeroMese > 12) {
    return 0;
  } else {
    return giorniDeiMesi[numeroMese - 1];
  }
}

console.log(contaGiorniDelMese(1));  // deve dare 31
console.log(contaGiorniDelMese(2));  // deve dare 28
console.log(contaGiorniDelMese(4));  // deve dare 30
console.log(contaGiorniDelMese(8));  // deve dare 31
console.log(contaGiorniDelMese(11)); // deve dare 30
console.log(contaGiorniDelMese(12)); // deve dare 31
console.log(contaGiorniDelMese(0));  // deve dare 0 (mese non valido)
console.log(contaGiorniDelMese(13)); // deve dare 0 (mese non valido)



