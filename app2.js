// Crea un array di oggetti che rappresentano delle persone.
// Ogni persona ha un nome, un cognome e un’età.
// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.

//prima creiamo un array con delle persone che sono oggetti con proprietà specifiche
let persone = [
  { nome: "Ivan", cognome: "Seghezzi", eta: 21 },
  { nome: "Lucia", cognome: "Belli", eta: 15 },
  { nome: "Lorenzo", cognome: "Serafini", eta: 56 }
];

//creiamo un array vuoto dove pushiamo il risultato finale
let risultato = [];

//Ciclo for dove come sempre l'indice deve essere minore alla lunghezza del primo array
for (let i = 0; i < persone.length; i++) {
    let persona = persone[i]; //il ciclo for si ripete per ogni persona a tutti gli indici presenti cioè 3 volte
    let frase;
    if (persona.eta < 18) {
        frase = persona.nome + " " + persona.cognome + " non può guidare perché è minorenne.";
    } else {
        frase = persona.nome + " " + persona.cognome + " può guidare.";
    }
    risultato.push(frase);
}

console.log(risultato);