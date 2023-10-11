let status = document.querySelector('#status');
let button = document.querySelector('button');
let mapLink = document.querySelector('#map-link');

// mettiamo il listener sul pulsante
button.addEventListener('click', () => {
  findMe();
})

function findMe() {
  // se il browser supporta geolocation
  if(navigator.geolocation) {
    // chiediamo la posizione: se va a buon fine usiamo la funzione showPosition come callback, altrimenti chiamiamo showError
    navigator.geolocation.getCurrentPosition(showPosition, showError)
  } else {
    status.textContent = 'Geolocation not supported by your browser'
  }
}

function showPosition(position) {
  // recuperiamo latitudine e longitudine
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  // e inseriamole nel link alla mappa di Google!
  mapLink.href = `https://www.google.com/maps/@${latitude},${longitude},15z`;
  mapLink.textContent = 'Show my position';
}

function showError() {
  console.log('unable to show location')
}