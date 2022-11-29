var userInput = document.querySelector('#userInput').value;
var requestUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + userInput;
var form = document.getElementById('form');
var submitButton = document.getElementById('submitBtn');
const cocktailDiv = document.getElementById("cocktail");
function fetchDrinks(requestUrl) {
    fetch(requestUrl)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("NETWORK RESPONSE ERROR");
            }
        })
        .then(data => {
            console.log(data);
            displayCocktail(data)
        })
        .catch((error) => console.error("FETCH ERROR:", error));
}
console.log(requestUrl)
function FormSubmit(event) {
    event.preventDefault(event);
    cocktailDiv.innerHTML = ''
    userInput = document.querySelector('#userInput').value
    requestUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + userInput;
    fetchDrinks(requestUrl);
}







