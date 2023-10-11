let video = document.querySelector('video');
let pipButton = document.querySelector('#pip-toggle');

pipButton.addEventListener('click', () => {
  togglePIP();
})

function togglePIP() {
  // se è già presente un elemento Picture in Picture, lo chiudiamo con il metodo exitPictureInPicture()
  if(document.pictureInPictureElement) {
    document.exitPictureInPicture();
  } else if (document.pictureInPictureEnabled) {
    // altrimenti, se è supportata la funzionalità Picture In Picture, mostriamo il video con .requestPictureInPicture()!
    video.requestPictureInPicture()
      // quando il video è in modalità PiP, abbiamo anche a disposizione un listener per il resize della finestra che triggera una callback
      .then((pictureInPictureWindow) => {
        pictureInPictureWindow.addEventListener("resize", () => {
          onPipWindowResize()
        });
      });
  }
}

function onPipWindowResize(){
  console.log('test')
}