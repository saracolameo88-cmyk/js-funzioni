# js-funzioni

Esercizio da fare da soli, anche per il tutoraggio di mercoledì 25/11. Le tracce 01-10 ripassano gli argomenti di sabato 21/11: dichiarare e invocare una funzione, parametri e argomenti, `return`, il controllo dell'input con un `return` anticipato, una funzione che ne usa un'altra. Le tracce 11-15 quelli di martedì 24/11: le arrow function, il return implicito e lo scope, cioè dove una variabile si vede e dove no. Servono anche le condizioni, i cicli e gli array delle lezioni prima.

## Cosa devi fare

Quindici tracce in due gruppi: dieci sulle funzioni, ordinate dalla più facile alla più difficile, e cinque su arrow function e scope. Ogni traccia è una funzione (o due) legata a una situazione vera: una spedizione, l'ufficio cambi in aeroporto, la pagella, il taxi di notte…

Alcune le hai viste in aula sabato, in una versione diversa. Qui c'è sempre qualcosa in più: una commissione, un giudizio in più, l'italiano giusto per "1 ora". Prova a scriverle senza guardare gli appunti.

Ogni traccia ha la sua pagina HTML e il suo file JavaScript, già collegati. **Scrivi solo nel file `.js`** della traccia: le pagine HTML non si toccano. Fai le tracce in ordine: non devi finirle tutte in una sera.

## Prima di cominciare

- **Suggerimenti AI di Antigravity spenti**, come a lezione: l'autocompletamento ti scriverebbe la funzione intera.
- Apri la pagina della traccia con **doppio clic** sul file `.html`, dalla cartella del progetto. Se si apre un browser diverso da Chrome: tasto destro sul file, **Apri con** e scegli Google Chrome.
- **Console sempre aperta**: F12, scheda Console. Su Mac Cmd+Opt+J.
- Dopo ogni modifica salva il file e premi **F5** nella pagina.
- Tracce 01-10: scrivi le funzioni con la keyword `function`, come sabato. Tracce 11-15: arrow function, come martedì. I metodi degli array (`forEach`, `map`…) non servono: sugli array solo il ciclo `for`.

## Cosa trovi qui

```
├── 01-spedizione.html … 10-taxi.html     ← una pagina per traccia: si apre con doppio clic
├── 11-freccia-corriere.html … 15-iva-globale.html  ← arrow function e scope
├── bonus-1-bisestile.html, bonus-2-taxi-prompt.html
├── js/
│   ├── 01-spedizione.js                  ← qui scrivi il codice della traccia 1
│   ├── …
│   └── bonus-2-taxi-prompt.js
├── README.md                             ← questo file
├── AGENTS.md                             ← le istruzioni per il tutor AI
└── TUTOR.md                              ← le note del docente sull'esercizio, per il tutor AI
```

## Come lavori su ogni traccia

Ogni file `.js` contiene lo scheletro dei commenti (le tracce 11, 14 e 15 anche del codice di partenza, già scritto). Dentro:

1. **Rispondi alle quattro domande** per ogni funzione: come si chiama? Di quali dati ha bisogno? Deve restituire qualcosa? Di che tipo? Il nome è già scritto nella traccia; i parametri, invece, li scegli tu, con nomi parlanti in italiano.
2. **Scrivi gli STEPS** della funzione: i passi in italiano, uno per riga, prima del codice.
3. **Scrivi la funzione.** Calcola e restituisce con `return`: niente `prompt`, `alert` o `console.log` dentro. L'unica eccezione è il bonus 2, che è un programma intero.
4. **Scrivi le prove** sotto la funzione: una riga di `console.log` per ogni caso di "Come verifichi". Per esempio `console.log(nomeFunzione(argomenti));`.
5. **Apri la pagina** con doppio clic e controlla in console che **tutti** i risultati siano quelli attesi.
6. **Fai un commit** quando la traccia funziona. Una traccia, un commit.

Il **Suggerimento** è chiuso: aprilo solo se resti bloccato.

## Come consegnare

1. Fai il **fork** di questa repo: bottone **Fork** in alto a destra, lascia il nome `js-funzioni`. Il fork è la tua consegna: così il docente la vede.
2. Clona il **tuo** fork sul computer (`git clone` con l'indirizzo del tuo fork, non di questa repo) e apri la cartella in Antigravity.
3. Dopo ogni traccia: `git add`, `git commit` con un messaggio che dice quale traccia hai fatto, `git push` sul tuo fork.
4. Nessuna scadenza. Quando hai finito, incolla il link del tuo fork nel canale del corso.

---

## Le tracce

### 01 · Lo stato della spedizione

*Un `return` per ogni ramo.*

- **Obiettivo**: il sito di un corriere mostra lo stato del pacco a partire da un codice numerico. Scrivi `trovaStatoSpedizione`: riceve il codice e restituisce `In elaborazione` per 1, `Spedito` per 2, `Consegnato` per 3. Per qualsiasi altro codice restituisce `Stato sconosciuto`.
- **Come verifichi**:
  - 1 → `In elaborazione`, 2 → `Spedito`, 3 → `Consegnato`;
  - 4 → `Stato sconosciuto`, 0 → `Stato sconosciuto`;
  - `'2'`, cioè la stringa con le virgolette → `Stato sconosciuto`. Sai dire perché? Cosa dovresti fare se il codice arrivasse da un `prompt`?

<details>
<summary>Suggerimento</summary>

Un `if` / `else if` / `else`, con un `return` in ogni ramo: appena uno scatta, la funzione finisce. Per il caso `'2'` pensa a `===`: confronta anche il tipo. Dispensa [Funzioni](https://kb-aiwd.andreadev237.workers.dev/lezioni/js-funzioni#return), parte "Il valore di ritorno: return".

</details>

### 02 · Il cambio in aeroporto

*Tre parametri, e l'ordine conta.*

- **Obiettivo**: in aula hai convertito gli euro in dollari. All'ufficio cambi dell'aeroporto però c'è una commissione fissa in euro, che si toglie **prima** di cambiare. Scrivi `calcolaDollariRicevuti`: riceve l'importo in euro, il tasso di cambio del giorno e la commissione, e restituisce i dollari che ricevi. Se l'importo non basta a pagare la commissione, restituisce 0. Nelle prove stampa i dollari con due decimali, per esempio `100 € diventano 102.60 $`.
- **Come verifichi**:
  - 100 €, tasso 1.08, commissione 5 → `100 € diventano 102.60 $`;
  - 250 €, tasso 1.08, commissione 5 → `250 € diventano 264.60 $`;
  - 100 €, tasso 1.12, commissione 0 → `100 € diventano 112.00 $`;
  - 3 €, tasso 1.08, commissione 5 → `3 € diventano 0.00 $`;
  - ora scambia il tasso e la commissione negli argomenti (100, 5, 1.08): esce `494.60`. Nessun errore, ma il risultato è sbagliato. Perché?

<details>
<summary>Suggerimento</summary>

Il primo argomento va nel primo parametro, il secondo nel secondo: JavaScript non guarda i nomi. Il caso "non basta" è un controllo dell'input: mettilo in cima, con un `return` anticipato. Dispensa [Funzioni](https://kb-aiwd.andreadev237.workers.dev/lezioni/js-funzioni#parametri), parte "Parametri e argomenti".

</details>

### 03 · Lo scritto vale doppio

*Le tonde, come in matematica.*

- **Obiettivo**: in aula hai fatto la media di tre voti. Questo professore invece dà due voti, lo scritto e l'orale, e lo scritto conta il doppio: la media è (scritto + scritto + orale) diviso 3. Scrivi `calcolaMediaPonderata`: riceve il voto dello scritto e quello dell'orale, e restituisce la media. Nelle prove stampala con un decimale: `Media: 7.0`.
- **Come verifichi**:
  - scritto 6, orale 9 → `Media: 7.0`;
  - scritto 9, orale 6 → `Media: 8.0`. Gli stessi voti in ordine diverso danno un'altra media: è giusto così;
  - scritto 8, orale 6 → `Media: 7.3`;
  - scritto 5, orale 8 → `Media: 6.0`;
  - scritto 10, orale 10 → `Media: 10.0`.

<details>
<summary>Suggerimento</summary>

Se con 6 e 9 ottieni 15, la divisione è stata fatta prima della somma: è la trappola di `7 + 8 + 6 / 3` vista in aula. Il "doppio" puoi scriverlo con una moltiplicazione. Dispensa [Funzioni](https://kb-aiwd.andreadev237.workers.dev/lezioni/js-funzioni#return), parte "Il valore di ritorno: return".

</details>

### 04 · Dal voto al giudizio

*L'ordine dei rami.*

- **Obiettivo**: in aula i giudizi erano tre. Qui sono cinque. Scrivi `trovaGiudizio`: riceve un voto e restituisce:
  - `Voto non valido` se il voto è minore di 1 o maggiore di 10;
  - `Gravemente insufficiente` sotto il 5;
  - `Insufficiente` da 5 a sotto il 6;
  - `Sufficiente` da 6 a sotto il 7;
  - `Buono` da 7 a sotto l'8;
  - `Ottimo` da 8 in su.
- **Come verifichi**:
  - 3 → `Gravemente insufficiente`, 5 → `Insufficiente`, 5.5 → `Insufficiente`;
  - 6 → `Sufficiente`, 7.5 → `Buono`, 8 → `Ottimo`, 10 → `Ottimo`;
  - 0 → `Voto non valido`, 11 → `Voto non valido`;
  - copia nel file la funzione della traccia 03 e prova `trovaGiudizio(calcolaMediaPonderata(6, 9))`: deve uscire `Buono`.

<details>
<summary>Suggerimento</summary>

Il primo ramo vero vince, come in FizzBuzz: il controllo del voto non valido va in cima. Poi, se sali dal voto più basso, ogni ramo controlla solo il limite di sopra. Il valore restituito da una funzione può essere l'argomento di un'altra. Dispensa [Funzioni](https://kb-aiwd.andreadev237.workers.dev/lezioni/js-funzioni#return), parte "Il valore di ritorno: return".

</details>

### 05 · La fascia d'età

*Dove stanno i confini.*

- **Obiettivo**: un'app etichetta l'utente in base all'età. Scrivi `trovaFasciaEta`: riceve l'età e restituisce `Minorenne` sotto i 18 anni, `Giovane Adulto` da 18 a 35, `Adulto` da 36 a 60, `Senior` oltre i 60. Un'età negativa restituisce `Età non valida`.
- **Come verifichi**:
  - 0 → `Minorenne`, 17 → `Minorenne`;
  - 18 → `Giovane Adulto`, 35 → `Giovane Adulto`;
  - 36 → `Adulto`, 60 → `Adulto`;
  - 61 → `Senior`;
  - -3 → `Età non valida`.

<details>
<summary>Suggerimento</summary>

I casi che sbagliano più spesso sono i confini: 18, 35, 60. Per ognuno chiediti se serve `<` o `<=`. Dispensa [Condizioni](https://kb-aiwd.andreadev237.workers.dev/lezioni/js-condizioni), per gli operatori di confronto.

</details>

### 06 · La durata del film

*Divisione intera, resto e italiano corretto.*

- **Obiettivo**: in aula `formattaDurata(95)` restituiva `1 ore e 35 minuti`: funziona, ma l'italiano no. Scrivi una `formattaDurata` migliore: riceve i minuti totali e restituisce la durata in ore e minuti, con queste regole:
  - con 1 ora scrive `1 ora`, non `1 ore`;
  - se i minuti restanti sono 0, scrive solo le ore: `2 ore`;
  - se le ore sono 0, scrive solo i minuti: `45 minuti`.
- **Come verifichi**:
  - 148 → `2 ore e 28 minuti`;
  - 95 → `1 ora e 35 minuti`;
  - 120 → `2 ore`;
  - 60 → `1 ora`;
  - 45 → `45 minuti`;
  - 0 → `0 minuti`.

<details>
<summary>Suggerimento</summary>

Prima calcola ore e minuti: `Math.floor` per la divisione intera, `%` per il resto. Poi decidi le parole. Puoi preparare il testo delle ore in una variabile e cambiarlo con un `if`, oppure gestire i casi speciali in cima con un `return` anticipato. Dispensa [Condizioni](https://kb-aiwd.andreadev237.workers.dev/lezioni/js-condizioni) per `%` e `Math.floor`.

</details>

### 07 · I giorni del mese

*Un array dentro la funzione.*

- **Obiettivo**: stai organizzando un evento e ti serve sapere quanti giorni ha un mese. Scrivi `contaGiorniDelMese`: riceve il numero del mese (1 = gennaio, 12 = dicembre) e restituisce quanti giorni ha. Febbraio ne ha 28. Se il numero del mese non esiste, restituisce 0: la funzione restituisce sempre un numero, e chi la usa sa che 0 vuol dire "mese non valido".
- **Come verifichi**:
  - 1 → 31, 2 → 28, 4 → 30;
  - 8 → 31, 11 → 30, 12 → 31;
  - 0 → 0, 13 → 0.

<details>
<summary>Suggerimento</summary>

Si può fare con dodici `if`, ma c'è un modo più corto: è la stessa idea di `trovaNomeGiorno` vista in aula. Il mese 1 sta all'indice 0. Dispensa [Array](https://kb-aiwd.andreadev237.workers.dev/lezioni/js-array#indice), parte sull'indice, e dispensa [Funzioni](https://kb-aiwd.andreadev237.workers.dev/lezioni/js-funzioni#array), parte "Funzioni e array".

</details>

### 08 · Dal nome al numero del giorno

*Il `return` dentro un ciclo.*

- **Obiettivo**: in aula hai trasformato un numero da 1 a 7 nel nome del giorno. Qui fai il contrario. Scrivi `trovaNumeroGiorno`: riceve il nome del giorno (`Lunedì`, `Martedì`… `Domenica`, con la maiuscola e l'accento) e restituisce il suo numero, da 1 a 7. Se il nome non c'è, restituisce 0. Usa il ciclo `for`.
- **Come verifichi**:
  - `Lunedì` → 1, `Mercoledì` → 3, `Domenica` → 7;
  - `lunedì` (minuscola) → 0;
  - `Lunedi` (senza accento) → 0;
  - `Pippo` → 0.

<details>
<summary>Suggerimento</summary>

Scorri l'array con il `for` e confronta ogni elemento con il nome ricevuto. Appena lo trovi puoi fare `return`: la funzione finisce, e il ciclo con lei. Il `return 0` invece dove va: dentro il ciclo o dopo? Fai la tabella dei giri con `Pippo`. Quando funziona, se vuoi, riscrivila con `indexOf`. Dispensa [Array](https://kb-aiwd.andreadev237.workers.dev/lezioni/js-array#for), parte sul ciclo `for`.

</details>

### 09 · Quanto manca alla pensione

*Una funzione che ne usa un'altra.*

- **Obiettivo**: nel nostro esercizio (i numeri sono inventati) chi fa un lavoro `ordinario` va in pensione a 67 anni, chi fa un lavoro `usurante` a 62. Scrivi due funzioni:
  - `trovaEtaPensione`: riceve il tipo di lavoro e restituisce l'età della pensione;
  - `calcolaAnniAllaPensione`: riceve l'anno di nascita, l'anno corrente e il tipo di lavoro, e restituisce quanti anni mancano alla pensione. Per sapere a che età si va in pensione usa `trovaEtaPensione`. Se l'età della pensione è già passata, restituisce 0.

  L'anno corrente è un parametro: in un programma vero lo leggeresti dall'orologio del computer, ma non l'abbiamo ancora visto. Così la funzione vale anche l'anno prossimo.
- **Come verifichi**:
  - `trovaEtaPensione('ordinario')` → 67, `trovaEtaPensione('usurante')` → 62;
  - nato nel 2000, anno 2026, `ordinario` → 41;
  - nato nel 2000, anno 2026, `usurante` → 36;
  - nato nel 2000, anno 2027, `ordinario` → 40;
  - nato nel 1960, anno 2026, `ordinario` → 1;
  - nato nel 1964, anno 2026, `usurante` → 0;
  - nato nel 1950, anno 2026, `ordinario` → 0, non -9.

<details>
<summary>Suggerimento</summary>

Prima l'età di oggi, poi la differenza con l'età della pensione. Dentro `calcolaAnniAllaPensione` invochi `trovaEtaPensione` e usi quello che restituisce, come `calcolaTotale` dentro `calcolaPrezzoMedio`. Dispensa [Funzioni](https://kb-aiwd.andreadev237.workers.dev/lezioni/js-funzioni#array), parte "Funzioni e array", per una funzione che ne usa un'altra.

</details>

### 10 · Il taxi di notte

*Traccia difficile: una funzione `verifica…` dentro un'altra.*

- **Obiettivo**: un taxi aggiunge 5 € fissi alla corsa se parte **o** arriva di notte, cioè dalla mezzanotte (ora 0) fino alle 5 comprese. Le ore sono numeri interi da 0 a 23. Scrivi due funzioni:
  - `verificaOraNotturna`: riceve un'ora e restituisce `true` se è di notte, `false` se no;
  - `calcolaTotaleCorsa`: riceve il prezzo base, l'ora di partenza e l'ora di arrivo, e restituisce il totale. Usa `verificaOraNotturna` per le due ore.
- **Come verifichi**:
  - `verificaOraNotturna`: 0 → `true`, 5 → `true`, 6 → `false`, 23 → `false`;
  - 20 €, dalle 22 alle 23 → 20;
  - 20 €, dalle 23 all'1 → 25 (arriva di notte);
  - 20 €, dalle 23 alle 0 → 25 (mezzanotte è già notte);
  - 20 €, dalle 2 alle 3 → 25 (il supplemento si paga una volta sola, anche se partenza e arrivo sono tutti e due di notte);
  - 20 €, dalle 5 alle 6 → 25 (parte di notte);
  - 20 €, dalle 6 alle 7 → 20.

<details>
<summary>Suggerimento</summary>

Una funzione `verifica…` restituisce un booleano: puoi usarla direttamente come condizione di un `if`. "Parte o arriva di notte" sono due chiamate unite da un operatore logico. I 5 € sono un parametro o un valore fisso dentro la funzione? Pensa al tasso della traccia 02: cambiava ogni giorno, il supplemento no. Dispensa [Funzioni](https://kb-aiwd.andreadev237.workers.dev/lezioni/js-funzioni#domande), parte "Il nome giusto e le quattro domande".

</details>

---

## Arrow function e scope

Le tracce di martedì 24/11. Le arrow function stanno in una `const`, si invocano come le altre e si scrivono **prima** di invocarle. Le quattro domande e gli STEPS valgono anche qui.

### 11 · Dal function alla freccia

*Stessa funzione, scritta in un altro modo.*

- **Obiettivo**: nel file `js/11-freccia-corriere.js` c'è già `calcolaCostoSpedizione`, scritta con `function`: 5 € fissi, 2 € per ogni kg e 10 centesimi per ogni km, e 0 se il peso non è valido. Riscrivila come arrow function, **con lo stesso nome**. Prima scrivi negli STEPS i passaggi che fai per trasformarla. Quando la nuova versione funziona, cancella quella con `function`.
- **Come verifichi**:
  - 3 kg, 100 km → 21;
  - 0.5 kg, 20 km → 8;
  - 0 kg, 50 km → 0, e anche -2 kg → 0;
  - finché nel file ci sono tutte e due le versioni, la pagina non stampa niente e in console c'è `SyntaxError: Identifier 'calcolaCostoSpedizione' has already been declared`. Perché?
  - sposta una delle prove **sopra** la arrow function: esce `ReferenceError: Cannot access 'calcolaCostoSpedizione' before initialization`. Con la versione `function` invece funzionava. Poi rimettila sotto.

<details>
<summary>Suggerimento</summary>

Tre passi: togli `function`, metti la funzione in una `const` con `=`, scrivi la freccia `=>` tra le tonde e le graffe. Dentro c'è un `if` e ci sono più righe: graffe e `return` restano. Dispensa [Scope e arrow function](https://kb-aiwd.andreadev237.workers.dev/lezioni/js-arrow-function#arrow), capitolo "Da function alla freccia", e capitolo "Prima la scrivi, poi la invochi".

</details>

### 12 · Una riga sola

*Il return implicito.*

- **Obiettivo**: scrivi quattro arrow function, **una riga ciascuna**, senza graffe e senza `return`:
  - `calcolaPrezzoConIva`: riceve il prezzo netto e restituisce il prezzo con l'IVA al 22%;
  - `calcolaAreaRettangolo`: riceve base e altezza e restituisce l'area;
  - `verificaNumeroPari`: riceve un numero e restituisce `true` se è pari, `false` se no;
  - `convertiCelsiusInFahrenheit`: riceve i gradi Celsius e restituisce i gradi Fahrenheit. La formula: moltiplichi per 9, dividi per 5, aggiungi 32.
- **Come verifichi**:
  - `calcolaPrezzoConIva`: 10 → 12.2, 100 → 122, 0 → 0;
  - `calcolaAreaRettangolo`: 4 e 5 → 20, 2.5 e 2 → 5;
  - `verificaNumeroPari`: 4 → `true`, 7 → `false`, 0 → `true`;
  - `convertiCelsiusInFahrenheit`: 0 → 32, 100 → 212, 20 → 68, -40 → -40;
  - ora riscrivi `calcolaPrezzoConIva` **con** le graffe ma senza `return` e prova di nuovo con 10: esce `undefined`. Perché? Poi rimettila com'era.

<details>
<summary>Suggerimento</summary>

Dopo la freccia scrivi solo il valore da restituire: per `verificaNumeroPari` è un confronto, che vale già `true` o `false`, quindi non serve un `if`. Il pari e dispari si fa con `%`. Con le graffe il `return` si scrive, senza graffe c'è già. Dispensa [Scope e arrow function](https://kb-aiwd.andreadev237.workers.dev/lezioni/js-arrow-function#implicito), capitolo "Il return implicito".

</details>

### 13 · Un parametro solo

*Le tonde che si possono togliere, e quelle che no.*

- **Obiettivo**: scrivi tre arrow function con un parametro solo:
  - `calcolaMancia`: riceve il totale del conto e restituisce il 10%. Scrivila **senza** le tonde intorno al parametro;
  - `formattaPrezzo`: riceve un prezzo in euro e restituisce il testo con due decimali e il simbolo dell'euro, per esempio `4.50 €`;
  - `verificaMaggiorenne`: riceve l'età e restituisce `true` da 18 anni in su.
  
  Le ultime due scrivile con le tonde, come a lezione.
- **Come verifichi**:
  - `calcolaMancia`: 20 → 2, 45 → 4.5;
  - `formattaPrezzo`: 4.5 → `4.50 €`, 12 → `12.00 €`, 0.7 → `0.70 €`;
  - `formattaPrezzo(calcolaMancia(45))` → `4.50 €`: il valore restituito da una funzione fa da argomento all'altra;
  - `verificaMaggiorenne`: 17 → `false`, 18 → `true`, 40 → `true`;
  - in un file a parte, o in console, prova a togliere le tonde a una funzione con **due** parametri, `const dividiConto = totaleConto, numeroPersone => totaleConto / numeroPersone;`, e a una **senza** parametri, `const stampaSaluto = => 'Ciao';`. Che errori escono? Quando le tonde si possono togliere?

<details>
<summary>Suggerimento</summary>

Con un parametro solo `totaleConto => …` e `(totaleConto) => …` sono la stessa cosa. Con zero o due parametri le tonde servono sempre: per questo a lezione le teniamo sempre. Per i due decimali c'è `.toFixed(2)`, che hai già usato. Dispensa [Scope e arrow function](https://kb-aiwd.andreadev237.workers.dev/lezioni/js-arrow-function#arrow), parte "I parametri".

</details>

### 14 · Dentro o fuori

*Lo scope: dove si vede una variabile.*

- **Obiettivo**: il file `js/14-dentro-fuori.js` ha due parti.
  - **Parte 1**: un programma già scritto, con sei `console.log` commentati in fondo. Prima di eseguirli scrivi nel commento accanto a ognuno cosa ti aspetti: un valore (quale?) o un errore (quale?). Poi decommentali **uno alla volta**, perché dopo un errore il programma si ferma, e confronta con quello che avevi scritto.
  - **Parte 2**: `calcolaTotaleSettimana` deve restituire la somma delle spese di una settimana, ma si ferma con un errore. Trova il guasto e correggilo spostando una riga.
- **Come verifichi**:
  - parte 1: due righe stampano un valore e quattro danno `ReferenceError: … is not defined`. Per ogni errore sai dire dove era nata quella variabile?
  - parte 2, prima della correzione: `ReferenceError: totaleSettimana is not defined`;
  - parte 2, dopo: `[12, 8.5, 20]` → 40.5, `[5]` → 5, `[]` → 0.

<details>
<summary>Suggerimento</summary>

Per ogni variabile cerca la riga in cui è dichiarata e le graffe che la contengono: una funzione, un `for` o un `if`. Fuori da quelle graffe non esiste. Anche i parametri vivono solo dentro la loro funzione. Per la parte 2: dove va dichiarato l'accumulatore, per usarlo dopo il ciclo? Dispensa [Scope e arrow function](https://kb-aiwd.andreadev237.workers.dev/lezioni/js-arrow-function#funzione), capitoli "Il function scope" e "Il block scope".

</details>

### 15 · L'IVA che cambia

*La variabile globale e il parametro.*

- **Obiettivo**: nel file `js/15-iva-globale.js` la arrow function `calcolaPrezzoFinale` usa una variabile globale, `percentualeIva`, che a metà programma cambia. Prima di aprire la pagina, prevedi cosa stampano le due righe uguali. Poi rendi la funzione **indipendente**: la percentuale entra come secondo parametro, sempre con il return implicito. Modifica la funzione che c'è, non scriverne una seconda con lo stesso nome (ricordi l'errore della traccia 11?). Lascia nel file le righe della globale finché non hai fatto tutte le prove, poi cancellale.
- **Come verifichi**:
  - il programma di partenza stampa 122 e poi 104, con la stessa invocazione. Perché?
  - nuova versione: 100 al 22% → 122, 100 al 4% → 104, 50 al 10% → 55, 80 allo 0% → 80;
  - se il parametro si chiama anch'esso `percentualeIva` e lasci la globale nel file, `calcolaPrezzoFinale(100, 22)` dà sempre 122, qualunque valore abbia la globale. Perché?
  - prova `calcolaPrezzoFinale(100)`, senza percentuale: esce `NaN`. Sai dire perché?

<details>
<summary>Suggerimento</summary>

Una funzione indipendente riceve i dati come parametri e non legge le variabili di fuori. Se dentro la funzione c'è un parametro con lo stesso nome di una globale, vince il parametro: è il nome più vicino. Un parametro senza argomento vale `undefined`, e un conto con `undefined` dà `NaN`. Dispensa [Scope e arrow function](https://kb-aiwd.andreadev237.workers.dev/lezioni/js-arrow-function#globali), capitoli "Le variabili globali sono pericolose" e "Lo stesso nome dentro e fuori".

</details>

---

## Bonus (facoltativi)

Solo se hai finito le tracce. Stesse regole: quattro domande, STEPS, doppio clic.

### Bonus 1 · Febbraio bisestile

- **Obiettivo**: un anno è bisestile se è divisibile per 4 ma non per 100, oppure se è divisibile per 400. Scrivi `verificaAnnoBisestile`: riceve un anno e restituisce `true` o `false`. Poi riscrivi `contaGiorniDelMese` della traccia 07 in modo che riceva anche l'anno e restituisca 29 per febbraio degli anni bisestili.
- **Come verifichi**:
  - `verificaAnnoBisestile`: 2024 → `true`, 2026 → `false`, 1900 → `false`, 2000 → `true`;
  - febbraio 2024 → 29, febbraio 2026 → 28, febbraio 1900 → 28;
  - marzo 2024 → 31, mese 13 del 2024 → 0.

<details>
<summary>Suggerimento</summary>

"Divisibile per 4" si scrive con `%`, come il pari e dispari. La regola ha un "ma non" e un "oppure": scrivila prima a parole, poi con `&&`, `!==` e `||`, e usa le tonde per raggruppare. Febbraio è l'unico mese che cambia: il resto lo fa già la funzione della traccia 07.

</details>

### Bonus 2 · Il programma del taxi

- **Obiettivo**: trasforma la traccia 10 in un programma con le quattro fasi. Copia nel file le due funzioni della traccia 10. Chiedi con `prompt` il prezzo base (in euro, senza centesimi), l'ora di partenza e l'ora di arrivo, tutte e tre come numeri interi. Dopo le tre domande:
  - se il prezzo non è un numero o non è maggiore di 0, mostra con `alert` `Prezzo non valido`;
  - se una delle due ore non è valida, mostra `Orario non valido: scrivi un'ora da 0 a 23`. Per controllarla scrivi una terza funzione, `verificaOraValida`;
  - altrimenti mostra il totale: `Totale corsa: 25 €`.
- **Come verifichi**: apri la pagina con doppio clic, non con Live Server.
  - 20, 23, 1 → `Totale corsa: 25 €`;
  - 20, 22, 23 → `Totale corsa: 20 €`;
  - 20, 0, 0 → `Totale corsa: 25 €`;
  - `venti`, 22, 23 → `Prezzo non valido`. Anche 0 come prezzo, o Annulla alla prima domanda;
  - 20, 25, 2 → `Orario non valido: scrivi un'ora da 0 a 23`. Anche -1, Annulla o il campo vuoto al posto di un'ora.

<details>
<summary>Suggerimento</summary>

È il programma della pagella fatto in aula, con `verificaVotoValido`: le funzioni calcolano, il programma chiede e mostra. Attenzione: `Number('')` e `Number(null)` danno 0, che qui sarebbe un'ora valida (mezzanotte). Con quale funzione, vista con le condizioni, il campo vuoto e Annulla diventano `NaN`? Dispensa [Funzioni](https://kb-aiwd.andreadev237.workers.dev/lezioni/js-funzioni#programma), parte "La funzione calcola, il programma chiede e mostra".

</details>

### Bonus 3 · Le tue tracce con la freccia

- **Obiettivo**: riprendi le tracce 01-10 che hai già fatto con `function` e riscrivi le funzioni come arrow function, nei loro file. Prima fai un commit: la versione con `function` resta nella storia di git. Dove la funzione restituisce solo un valore, usa il return implicito.
- **Come verifichi**:
  - le prove di ogni traccia danno gli stessi risultati di prima;
  - almeno due funzioni delle dieci si possono scrivere su una riga sola, con il return implicito. Quali? E perché le altre no?
  - nelle tracce 09 e 10 una funzione ne usa un'altra: le prove restano **sotto** tutte e due le funzioni.

<details>
<summary>Suggerimento</summary>

Il return implicito va bene quando dentro la funzione c'è solo `return` di un'espressione: un calcolo o un confronto. Con un `if`, un array o un `for` dentro servono graffe e `return`. Una arrow function che ne usa un'altra funziona se, al momento dell'invocazione, tutte e due sono già state scritte. Dispensa [Scope e arrow function](https://kb-aiwd.andreadev237.workers.dev/lezioni/js-arrow-function#implicito).

</details>

---

## Per ripassare

- Dispensa [Funzioni](https://kb-aiwd.andreadev237.workers.dev/lezioni/js-funzioni), con la pagina della lezione [Funzioni in pratica](https://kb-aiwd.andreadev237.workers.dev/materiali/2026-11-21/funzioni-in-pratica).
- Dispensa [Scope e arrow function](https://kb-aiwd.andreadev237.workers.dev/lezioni/js-arrow-function), con la pagina della lezione [Scope e arrow function in pratica](https://kb-aiwd.andreadev237.workers.dev/materiali/2026-11-24/arrow-in-pratica).
- Quando una funzione restituisce qualcosa di strano, stampa con `console.log` i parametri all'inizio della funzione: sono arrivati i valori giusti, nell'ordine giusto?

Se usi l'AI, il file `AGENTS.md` la fa lavorare da tutor: ti fa domande e ti indica dove guardare, senza darti la soluzione.
