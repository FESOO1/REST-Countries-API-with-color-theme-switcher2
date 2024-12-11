const modeButton = document.getElementById('modeButton');
const modeButtonText = document.querySelector('.navbar-mode-button-itself-text');
const body = document.querySelector('body');
let isDarkMode = false;

// MODE FUNCTION

function changeMode() {
    if (isDarkMode === false) {
        modeButton.classList.add('mode-button-js');
        modeButtonText.textContent = 'Light Mode';
        body.classList.add('body-js');
        
        isDarkMode = true;
        localStorage.setItem('darkThemeOn', isDarkMode);
    } else {
        modeButton.classList.remove('mode-button-js');
        modeButtonText.textContent = 'Dark Mode';
        body.classList.remove('body-js');
        
        isDarkMode = false;
        localStorage.setItem('darkThemeOn', isDarkMode);
    };
};

// INITIALIZE THE MODE BUTTON

modeButton.addEventListener('click', changeMode);

// LOCAL STORAGE

function changeModeBasedOnLocalStorage() {
    const darkThemeOn = localStorage.getItem('darkThemeOn');

    if (darkThemeOn === 'true') {
        modeButton.classList.add('mode-button-js');
        modeButtonText.textContent = 'Light Mode';
        body.classList.add('body-js');

        isDarkMode = true;
    };
};

changeModeBasedOnLocalStorage();