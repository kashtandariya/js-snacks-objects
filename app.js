//A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.

// Array originale con le stringhe
let arrayOriginale = ["sole", "STELLE", "Luna"];

// Stampare l'array formattato
console.log(arrayFormattato);

//definire una funzione
function formattaStringhe(arrayOriginale) {
  // crea un nuovo array vuoto per memorizzare le stringhe formattate
  let arrayFormattato = [];

  // ciclo for per iterare attraverso ogni elemento dell'array originale
  for (let i = 0; i < arrayOriginale.length; i++) { //uso proprietà length
      // Prendo la stringa su cui sto lavorando
      let arrayCorrente = arrayOriginale[i];//assegno la stringa su cui lavoriamo all'array originale nel ciclo for quindi usiamo l'indice i

      // Formatta la stringa: trasforma la prima lettera in maiuscolo e il resto in minuscolo
      let stringaFormattata = arrayCorrente.charAt(0).toUpperCase() + stringaCorrente.slice(1).toLowerCase();
      //utilizziamo vari metodi, tipo charAt che restituisce il carattere all'indice specificato (0)e poi con toUpperCase lo rendiamo maiuscolo
      //In seguito usiamo il metodo slice all'indice 1 così da partire dal secondo carattere della parola e convertiamo tutti i restanti caratteri in minuscolo
      //il metodo slice serve per restituire una sottostringa della stringa che stiamo usando, potremmo usare anche il metodo .substring che fa una cosa simile da quello che ho capito

      // Aggiungi la stringa formattata al nuovo array
      arrayFormattato.push(stringaFormattata);
  }

  // Restituisci l'array formattato
  return arrayFormattato;
}

// Chiama la funzione per formattare le stringhe
let arrayFormattato = formattaStringhe(arrayOriginale);

