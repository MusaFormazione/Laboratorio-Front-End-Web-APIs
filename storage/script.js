let toggleButton = document.querySelector('button');
let theme = 'light';
let customMode = document.querySelector('#custom-mode');

// Eseguiamo il check delle preferenze utente
checkThemePreferences();

function checkThemePreferences() {
  // vediamo se è già stato salvato un valore in localstorage
  let savedTheme = localStorage.getItem('theme');

  // Se l'utente ha una preferenza in localStorage, usiamo quella
  if(savedTheme) {
    theme = savedTheme;
  }

  // salviamo il tema in localStorage e carichiamo il relativo CSS
  saveTheme();
  showTheme();
}

// mettiamo un listener al pulsante per effettuare il toggle light / dark mode
toggleButton.addEventListener('click', () => {
  setTheme();
})

function setTheme() {
  // Invertiamo la preferenza: se prima era dark, la portiamo a light e viceversa
  if(theme === 'dark') {
    theme = 'light';
  } else if(theme === 'light') {
    theme = 'dark';
  }

  // salviamo il tema in localStorage e carichiamo il relativo CSS
  saveTheme();
  showTheme();
}

function showTheme() {
  // console.log(theme)
  // carichiamo il CSS cambiando il link al file CSS (non è il miglior metodo in produzione, ma è solo una prova!)
  customMode.setAttribute('href', `${theme}.css`)
}

function saveTheme() {
  localStorage.setItem('theme', theme)
  // sessionStorage.setItem('theme', theme)
}