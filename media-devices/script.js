let video = document.querySelector('#video');
let video2 = document.querySelector('#video-2');
let useCameraButton = document.querySelector('#use-camera-button');
let screenshotButton = document.querySelector('#screenshot-button');
let shareScreenButton = document.querySelector('#share-screen-button');
let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

let constraints = {
  audio: false,
  video: true
}

function useWebcam() {
  navigator.mediaDevices
  // chiediamo il consenso alla condivisione della webcam
  .getUserMedia(constraints)
  // ora che abbiamo il consenso, recuperiamo la traccia video
  .then(stream => {
    let videoTracks = stream.getVideoTracks();
    console.dir(videoTracks)
    // mostriamo lo stream nel tag <video>
    video.srcObject = stream;
  })
  .catch(err => console.log(err))
}

function takeSelfie() {
  // passiamo lo screenshot al canvas
  context.drawImage(video, 0,0,canvas.width, canvas.height)
}

// per la webcam abbiamo usato una promise: la stessa logica può funzionare anche con una async function.
// proviamo un esempio per condividere lo schermo
async function shareScreen() {
  let sharedScreen;
  // usiamo await all'interno di try
  try {
    sharedScreen = await navigator.mediaDevices.getDisplayMedia();
    video.srcObject = sharedScreen;
  } catch(err) {
    console.log(err)
  }
}

useCameraButton.addEventListener('click', () => {
  useWebcam();
})

screenshotButton.addEventListener('click', () => {
  takeSelfie();
})

shareScreenButton.addEventListener('click', () => {
  shareScreen();
})

