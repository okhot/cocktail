const API_BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1'


export function searchCocktails(term) {
return fetch(`${API_BASE_URL}/search.php?s=${term}`)
    .then((response) => response.json())
    .then(data => data.drinks || []);
}

export function searhIngridients(term) {
return fetch (`${API_BASE_URL}/filter.php?i=${term}`)
.then((response) => response.json())
.then(data => data.drinks || []);
}