let animali = [
  {
      nome: "Tigre",
      famiglia: "Felidi",
      classe: "Mammiferi"
  },
  {
      nome: "Lupo",
      famiglia: "Canidi",
      classe: "Mammiferi"
  },
  {
      nome: "Orso",
      famiglia: "Ursidi",
      classe: "Mammiferi"
  },
  {
      nome: "Cobra",
      famiglia: "Elapidi",
      classe: "Rettili"
  },
  {
      nome: "Ragno Violino",
      famiglia: "Loxoscelidi",
      classe: "Aracnidi"
  },
  {
      nome: "Coleottero",
      famiglia: "Scarabeidi",
      classe: "Insetti"
  },
  {
      nome: "Salmone",
      famiglia: "Salmonidi",
      classe: "Pesci"
  }
];

let mammiferi = animali.filter(animal => animal.classe === "Mammiferi");
//utilizziamo il metodo filter per filtrare gli elementi del primo array seguendo la nostra richiesta o condizione che sia. Entriamo nell'array animal e nella proprietà specifica della classe che deve essere uguale a mammiferi. Se lo è allora stampiamo.
console.log(mammiferi);
