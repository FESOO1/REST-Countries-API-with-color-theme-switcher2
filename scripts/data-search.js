const outputContainer = document.querySelector('.home-output');
const searchInput = document.getElementById('searchInput');
const randomCountries = ['Uzbekistan','USA','Brazil','Russia','France','Iran','Morocco', 'Germany'];

// UPLOADING THE DATA

async function uploadingData() {
    for (let i = 0; i < randomCountries.length; i++) {
        const response = await fetch('https://restcountries.com/v3.1/name/' + randomCountries[i]);
        const countryData = await response.json();

        outputContainer.innerHTML += `
            <a href="../pages/country-info.html" class="home-output-itself">
                <div class="home-output-itself-image">
                    <img src="${countryData[0].flags.png}" alt="${countryData[0].flags.alt}" class="home-output-itself-image-itself">
                </div>
                <div class="home-output-itself-information">
                    <h3 class="home-output-itself-information-name">${countryData[0].name.common}</h3>
                    <div class="home-output-itself-information-inner">
                        <h4 class="home-output-itself-information-inner-text"><span class="home-output-itself-information-inner-text-bold">Population:</span> ${countryData[0].population}</h4>
                        <h4 class="home-output-itself-information-inner-text"><span class="home-output-itself-information-inner-text-bold">Region:</span> ${countryData[0].region}</h4>
                        <h4 class="home-output-itself-information-inner-text"><span class="home-output-itself-information-inner-text-bold">Capital:</span> ${countryData[0].capital}</h4>
                    </div>
                </div>
            </a>
        `;

        

        // OUTPUT ITSELF
        const outputItself = document.querySelectorAll('.home-output-itself');
        const outputItselfName = document.querySelectorAll('.home-output-itself-information-name');

        for (let i = 0; i < outputContainer.childElementCount; i++) {
            outputItself[i].addEventListener('mouseenter', savingOutputInformation);
            async function savingOutputInformation() {
                const response = await fetch('https://restcountries.com/v3.1/name/' + outputItselfName[i].textContent);
                const countryData = await response.json();

                /* console.log(countryData[0]); */
                localStorage.setItem('countryFlag', countryData[0].flags.png);
                localStorage.setItem('countryFlagAlt', countryData[0].flags.alt);
                localStorage.setItem('countryCommonName', countryData[0].name.common);
                localStorage.setItem('countryNativeName', countryData[0].name.official);
                localStorage.setItem('countryPopulation', countryData[0].population);
                localStorage.setItem('countryRegion', countryData[0].region);
                localStorage.setItem('countryCapital', countryData[0].capital);
                localStorage.setItem('countryTopLevelDomain', countryData[0].tld[0]);
                /* localStorage.setItem('countryCurrencies', countryData[0].currencies[0].name); */
                /* localStorage.setItem('countryLanguages', countryData[0].languages[0]); */
            };
        };
    };
};

// SEARCH FOR A COUNTRY

async function  searchForCountry() {
    const searchInputItself = searchInput.value.toLowerCase();
    
    const response = await fetch('https://restcountries.com/v3.1/name/' + searchInputItself);
    const countryData = await response.json();

    if (searchInputItself.length > 0) {
        outputContainer.innerHTML = `
            <a href="../pages/country-info.html" class="home-output-itself">
                <div class="home-output-itself-image">
                    <img src="${countryData[0].flags.png}" alt="${countryData[0].flags.alt}" class="home-output-itself-image-itself">
                </div>
                <div class="home-output-itself-information">
                    <h3 class="home-output-itself-information-name">${countryData[0].name.common}</h3>
                    <div class="home-output-itself-information-inner">
                        <h4 class="home-output-itself-information-inner-text"><span class="home-output-itself-information-inner-text-bold">Population:</span> ${countryData[0].population}</h4>
                        <h4 class="home-output-itself-information-inner-text"><span class="home-output-itself-information-inner-text-bold">Region:</span> ${countryData[0].region}</h4>
                        <h4 class="home-output-itself-information-inner-text"><span class="home-output-itself-information-inner-text-bold">Capital:</span> ${countryData[0].capital}</h4>
                    </div>
                </div>
            </a>
        `;
    } else {
        window.removeEventListener('DOMContentLoaded', uploadingData);
        uploadingData();
    };
};

// INITIALIZING BUTTONS
window.addEventListener('DOMContentLoaded', uploadingData);
searchInput.addEventListener('input', searchForCountry);