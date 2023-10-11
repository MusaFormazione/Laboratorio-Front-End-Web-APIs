// Selezioniamo tutti gli articles che vengono usati come slide
const nav = document.querySelector("nav");
const articles = document.querySelectorAll("article");
console.log('test')
// show one article on page load
switchSlide();

// show active article
function switchSlide(e) {
  console.log(location)
  // se c'è un hash nell'URL, lo recuperiamo togliendo il # dalla stringa
  const hash = location?.hash?.slice(1);

  // per ogni slide, aggiungiamo o rimuoviamo una classe che la mostra o la nasconde
  Array.from(articles).forEach((article, index) => {
    // se l'id della slide corrisponde all'hash del link, allora mostriamo la slide
    if (article.id === hash || (!hash && !index)) {
      article.classList.remove("none");
    } else {
      // altrimenti la nascondiamo mettendo la classe che la porta a display:none
      article.classList.add("none");
    }
  });
}

// event listener per il click
nav.addEventListener("click", (e) => {
  console.log(e)
  // se il target del click non ha un link a un fragment, non faccio nulla
  if (!e?.target?.hash) return;
  // se startViewTransition è supportato dal browser, avvio l'effetto
  if (document.startViewTransition) {
    // use View Transition effect
    document.startViewTransition(() => switchSlide(e));
  } else {
    // Altrimenti non uso l'animazione, ma chiamo lo stesso la funzione
    switchSlide(e);
  }
});

// Ulteriori informazioni su View Transitions
// https://mdn.github.io/dom-examples/view-transitions/#
// https://developer.chrome.com/docs/web-platform/view-transitions/
// https://http203-playlist.netlify.app/