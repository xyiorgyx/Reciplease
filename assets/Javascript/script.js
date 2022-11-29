var searchResultContainer = document.querySelector("#searchResultContainer");
var recipeContainer = document.querySelector("#recipeContainer");
var recipeImageContainer = document.querySelector("#recipeImageContainer");
var searchButton = document.getElementById("searchBtn");
var searchForm = document.getElementById("search-form");
var searchBar = document.querySelector(".searchBar");
var apiKey = "&apiKey=67c5935d239e403fba7b639eaf1d6eaa";
var georgesApiKey = "&apiKey=1309e9b059aa45948273416e525ab69c";
var davidsApiKey = "&apiKey=fdec5f97efd148e4829c9cad588a4666";
var input = document.getElementById("default-search");
var recipeHistory = JSON.parse(localStorage.getItem("savedRecipe")) || [];

function handleUserInput(event) {
  event.preventDefault();
  getRecipeId(input.value);
}

function getRecipeId(input) {
  searchResultContainer.classList.remove("hidden");
  recipeContainer.classList.add("hidden");
  var requestUrl =
    "https://api.spoonacular.com/recipes/complexSearch?query=" +
    input +
    davidsApiKey +
    "&number=20";
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      searchResultContainer.innerHTML = "";
      for (let i = 0; i < data.results.length; i++) {
        var recipeTitle = data.results[i].title;
        var recipePic = data.results[i].image;
        var recipeId = data.results[i].id;
        var div = document.createElement("div");
        var liRecipeTitle = document.createElement("a");
        liRecipeTitle.setAttribute("data-recipeId", recipeId);
        liRecipeTitle.classList.add("titleId");
        liRecipeTitle.textContent = recipeTitle;
        liRecipeTitle.addEventListener("click", userSelectRecipe);
        div.append(liRecipeTitle);
        searchResultContainer.append(div);
      }
    });
}

function userSelectRecipe(event) {
  if (!event.target.matches(".titleId")) {
    return;
  }
  var receipeEventListener = event.target.getAttribute("data-recipeId");
  var recipeUrl =
    "https://api.spoonacular.com/recipes/" +
    receipeEventListener +
    "/information?" +
    davidsApiKey;
  fetch(recipeUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      searchResultContainer.classList.add("hidden");
      recipeContainer.classList.remove("hidden");
      recipeContainer.innerHTML = "";
      // recipeContainer.empty()
      console.log(data);
      var title = data.title;
      getSavedresult(title);
      var recipeImage = data.image;
      var summary = data.summary;
      var recipeSteps = data.instructions;
      var ingredientsArray = data.extendedIngredients;
      var p = document.createElement("p");
      var p2 = document.createElement("p");
      var h2 = document.createElement("h2");
      var savebtn = document.createElement("button");
      var image = document.createElement("img");
      var liRecipeInformation = document.createElement("p");
      liRecipeInformation.innerHTML = recipeSteps;
      titleForRecipe = title;
      image.setAttribute("src", recipeImage);
      h2.append(titleForRecipe);
      p.innerHTML = summary;
      recipeImageContainer.append(image);
      recipeContainer.append(h2, p, liRecipeInformation);

      for (let index = 0; index < ingredientsArray.length; index++) {
        const ingredients = ingredientsArray[index].original;
        var liIngredients = document.createElement("li");
        // liIngredients.append(ingredients);
        // recipeContainer.append(h2, image, p, liRecipeInformation)
        liIngredients.append(ingredients);
        recipeContainer.append(liIngredients);
      }
      // recipeContainer.append(h2, image, p, liRecipeInformation)
    });
}

function getSavedresult(recipeName) {
  console.log(recipeName);
  //as the user clicks on the button, push the title into the empty array for local storage
  recipeHistory.push(recipeName);
  //will also need to create a button
  localStorage.setItem("savedRecipe", JSON.stringify(recipeHistory));
}
searchForm.addEventListener("submit", handleUserInput);

//create a save recipe button
//store the recipe name in local storage
//when the user selects the recipe name from their favorites list,
//have it run the exact word for word title through the api, and limit the api
//search to only one seach and have it automatically run the second function
// by sending the data automatically all in one function
