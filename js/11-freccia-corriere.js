// Traccia 11 · Dal function alla freccia
// La consegna è nel README, alla voce "11 · Dal function alla freccia".

// # La funzione da riscrivere: è già scritta e funziona.
// Il costo di una spedizione: 5 € fissi, 2 € per ogni kg e 10 centesimi per ogni km.
function calcolaCostoSpedizione(pesoPacco, distanzaKm) {
  if (pesoPacco <= 0) {
    return 0;
  }
  const costoPeso = pesoPacco * 2;
  const costoDistanza = distanzaKm * 0.1;
  return 5 + costoPeso + costoDistanza;
}

/*
  STEPS (come si passa da function alla freccia)
  1 -
  2 -
  3 -
*/

// # La tua arrow function (quando funziona, cancella la versione con function qui sopra)


// # Le prove: una riga di console.log per ogni caso di "Come verifichi"

