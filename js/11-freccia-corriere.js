// Traccia 11 · Dal function alla freccia
// La consegna è nel README, alla voce "11 · Dal function alla freccia".

// # La funzione da riscrivere: è già scritta e funziona.
// Il costo di una spedizione: 5 € fissi, 2 € per ogni kg e 10 centesimi per ogni km.


/*
  STEPS (come si passa da function alla freccia)
Togliere function e mettere const nome =
Lasciare i parametri dentro le tonde ( )
Aggiungere la freccia => prima delle graffe {
*/

// # La tua arrow function (quando funziona, cancella la versione con function qui sopra)
const calcolaCostoSpedizione = (pesoPacco, distanzaKm) => {
  if (pesoPacco <= 0) {
    return 0;
  }
  const costoPeso = pesoPacco * 2;
  const costoDistanza = distanzaKm * 0.1;
  return 5 + costoPeso + costoDistanza;
}

// # Le prove: una riga di console.log per ogni caso di "Come verifichi"

console.log(`${calcolaCostoSpedizione(3, 100)} euro`);
console.log(`${calcolaCostoSpedizione(0.5, 20)} euro`);
console.log(`${calcolaCostoSpedizione(0, 50)} euro`);
console.log(`${calcolaCostoSpedizione(2, 50)} euro`);