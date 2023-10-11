let testDiv = document.querySelector('.test');

let observer = new IntersectionObserver(
  // elements: array degli elementi che vengono osservati
  elements => {
    // prendiamo il primo
    let intersectingDiv = elements[0]
    // logghiamo il suo valore
    console.log(intersectingDiv)
    let isIntersecting = intersectingDiv.isIntersecting;
    // questo blocco di codice possiamo utilizzarlo con il valore treshold impostato a 1
    if(isIntersecting) {
      intersectingDiv.target.style.backgroundColor = 'darkblue';
    } else {
      intersectingDiv.target.style.backgroundColor = 'lightcoral';
    }
    // questo blocco di codice possiamo utilizzarlo con un array di valori treshold (commenta la parte precedente e togli il commento da qui)
    // if(intersectingDiv.intersectionRatio < 0.5) {
    //   intersectingDiv.target.style.backgroundColor = 'darkblue';
    // } else if (intersectingDiv.intersectionRatio > 0.5 && intersectingDiv.intersectionRatio < 1) {
    //   intersectingDiv.target.style.backgroundColor = 'lightcoral';
    // } else if (intersectingDiv.intersectionRatio === 1) {
    //   intersectingDiv.target.style.backgroundColor = 'pink';
    // }
    console.log(isIntersecting)
  },
  {
    // prova a cambiare il valore di treshold e dai un occhio ai commenti indicati nella funzione di callback qui sopra!
    threshold: 1,
    // threshold: [0, 0.5, 1],
    // il margine per cambiare l'ampiezza del viewport (può avere anche valori negativi)
    // rootMargin: '50px'
  }
)

observer.observe(testDiv);