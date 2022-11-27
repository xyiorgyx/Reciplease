
var userInput = document.querySelector('#userInput').value;
var requestUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + userInput;
var form  = document.getElementById('form');
var submitButton = document.getElementById('submitBtn');

function FormSubmit(event){
    event.preventDefault(event);
    userInput = document.querySelector('#userInput').value
    requestUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + userInput;
    fetch(requestUrl);

}

console.log(requestUrl)
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



function displayCocktail(data) {

    for (i = 0; i < data.drinks.length; i++) {

        const cocktail = data.drinks[i];
        const cocktailDiv = document.getElementById("cocktail");
        const newDiv = document.createElement('div')
        cocktailDiv.append(newDiv)
        const drinkName = cocktail.strDrink;
        const Title = document.createElement("h1");
        Title.innerHTML = drinkName;
        newDiv.appendChild(Title);
        const cocktailImg = document.createElement("img");
        cocktailImg.src = cocktail.strDrinkThumb;
        newDiv.appendChild(cocktailImg);
        const cocktailIngredients = document.createElement("ul");
        // const cocktailMeasurements = document.innerHTML;
        // cocktailIngredients.appendChild(cocktailMeasurements);
        newDiv.appendChild(cocktailIngredients);
        const directions = document.createElement('p');
        directions.innerHTML = cocktail.strInstructions;
        newDiv.appendChild(directions);


        const getIngredients = Object.keys(cocktail)
            .filter(function (ingredient) {
                return ingredient.indexOf("strIngredient") == 0;
            })
            .reduce(function (ingredients, ingredient) {
                if (cocktail[ingredient] != null) {
                    ingredients[ingredient] = cocktail[ingredient];
                }
                return ingredients;
            }, {});

        for (let key in getIngredients) {
            let value = getIngredients[key];
            listItem = document.createElement("li");
            listItem.innerHTML = value;
            cocktailIngredients.appendChild(listItem);
        }


        // const getMeasurements = Object.keys(cocktail)
        //     .filter(function (measure) {
        //         return measure.indexOf("strMeasure") == 0;
        //     })
        //     .reduce(function (measures, measure) {
        //         if (cocktail[measure] != null) {
        //             measures[measure] = cocktail[measure];
        //         }
        //         return measures;
        //     }, {});

        // for (let key in getMeasurements) {
        //     let value = getMeasurements[key];
        //     drinkItem = document.createElement("li");
        //     drinkItem.innerHTML = value;
        //     cocktailMeasurements.appendChild(drinkItem);
        // }
        // console.log(getMeasurements)
    }
}

form.addEventListener('submit', FormSubmit)
submitButton.addEventListener('click', fetch)