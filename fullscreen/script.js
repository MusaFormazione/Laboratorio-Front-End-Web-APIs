let video = document.querySelector('video');

// aggiungiamo due listener per alcuni pulsanti della tastiera: 'f' e 'x'
document.addEventListener('keyup', (e) => {
  console.log(e.key)
  // controlliamo che il tasto premuto sia f o x (senza dimenticare le maiuscole!)
  if (e.key === 'f' || e.key === 'F') {
    toggleFullScreen();
  }
  if(e.key === 'x' || e.key === 'X') {
    endFullScreen();
  }
});

function toggleFullScreen() {
  // Se non c'è nessun video in modalità fullscreen, lo attiviamo
  if(!document.fullscreenElement) {
    video.requestFullscreen();
  } else if(document.fullscreenElement) {
    // altrimenti lo disattiviamo!
    document.exitFullscreen()
  }
}

function endFullScreen() {
  if(document.fullscreenElement) {
    document.exitFullscreen();
  }
}