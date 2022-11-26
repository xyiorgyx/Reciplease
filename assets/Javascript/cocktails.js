var userInput = document.querySelector('#userInput').value

var requestUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + userInput;
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
    console.log(userInput);
    
function displayCocktail(data) {
    
    for (i=0; i < data.drinks.length; i++){

    const cocktail = data.drinks[i];
    const cocktailDiv = document.getElementById("cocktail");
    const newDiv = document.createElement('div')
    cocktailDiv.append(newDiv)
    const cocktailName = cocktail.strDrink;
    const heading = document.createElement("h1");
    heading.innerHTML = cocktailName;
    newDiv.appendChild(heading);
    const cocktailImg = document.createElement("img");
    cocktailImg.src = cocktail.strDrinkThumb;
    newDiv.appendChild(cocktailImg);
    const cocktailIngredients = document.createElement("ul");
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

//     const getIngredients = Object.keys(cocktail)
//     .filter(function (ingredient) {
//         return ingredient.indexOf("strIngredient") == 0;
//     })
//     .reduce(function (ingredients, ingredient) {
//         if (cocktail[ingredient] != null) {
//             ingredients[ingredient] = cocktail[ingredient];
//         }
//         return ingredients;
//     }, {});

// for (let key in getIngredients) {
//     let value = getIngredients[key];
//     listItem = document.createElement("li");
//     listItem.innerHTML = value;
//     cocktailIngredients.appendChild(listItem);
// }
}
}
