const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
.then(data => data.json())
.then(final => cities.push(...final))
console.log(cities);

function findMatches(wordToMatch, cities) {
    return cities.filter(city => {
        const regex = new RegExp(wordToMatch, 'gi');
        return city.city.match(regex) || city.state.match(regex);
    });
}

function displayMatches () {
    const matchArray = findMatches(this.value, cities);
    const html =matchArray.map(place => {
        const regex = new RegExp(this.value,'ig');
        const cityName = place.city.replace(regex, `<span class = "hl">${this.value}</span>`)
        const stateName = place.state.replace(regex, `<span class = "hl">${this.value}</span>`)
        return `
        <li>
           <span class="name">${cityName}, ${stateName}</span>
           <span class="population">${place.population}</span>`
    }).join('');
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('keyup', displayMatches);