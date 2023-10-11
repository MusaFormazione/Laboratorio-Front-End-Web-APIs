let forwardButton = document.querySelector('#forward');
let backButton = document.querySelector('#back');

// Questo è solo un esempio, non è un codice da usare in produzione... Fa parte di una piccola introduzione alle web API.

forwardButton.addEventListener('click', () => {
  history.forward();
  // con history.go() possiamo decidere di quante pagine muoverci avanti o indietro nella storia di navigazione
  // history.go(2)
})

backButton.addEventListener('click', () => {
  history.back();
  // history.go(-2)
})

// Se nella URL esistono dei query params, posso recuperarli istanziando un oggetto URLSearchParams e usando il metodo get con la chiave della query param a cui voglio accedere
let params = new URLSearchParams(document.location.search);
let name = params.get("test"); // is the string "Jonathan"