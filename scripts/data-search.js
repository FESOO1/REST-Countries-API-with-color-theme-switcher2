const outputContainer = document.querySelector('.home-output');
const searchInput = document.getElementById('searchInput');
const randomCountries = ['Uzbekistan','USA','Brazil','Russia','France','Iran','Morocco', 'Germany'];

// UPLOADING THE DATA

async function uploadingData() {
    for (let i = 0; i < randomCountries.length; i++) {
        const response = await fetch('https://restcountries.com/v3.1/name/' + randomCountries[i]);
        const countryData = await response.json();

        console.log(countryData[0])

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
    };
};

uploadingData();

// INITIALIZING BUTTONS