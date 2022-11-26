var searchResultContainer = document.querySelector('#searchResultContainer');
var recipeContainer = document.querySelector('#recipeContainer');
var searchButton = document.getElementById('searchBtn');
var searchForm = document.getElementById('search-form');
var searchBar = document.querySelector('.searchBar');
var modal = document.querySelector('.modal');
var apiKey = "&apiKey=67c5935d239e403fba7b639eaf1d6eaa";
var georgesApiKey = "&apiKey=1309e9b059aa45948273416e525ab69c";
var davidsApiKey = "&apiKey=fdec5f97efd148e4829c9cad588a4666";

function handleUserInput(event) {
  event.preventDefault();
  var collection = document.querySelectorAll('li');
  for (let i = 0; i < collection.length; i++) {
    collection[i].remove();
  }
  var input = document.getElementById('default-search').value;
  getRecipeId(input)
}

function getRecipeId(input) {
  var requestUrl = 'https://api.spoonacular.com/recipes/complexSearch?query=' + input + georgesApiKey + '&number=20';
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    }).then(function (data) {
      var recipeNameArray = [data.results[0], data.results[1], data.results[2], data.results[3], data.results[4], data.results[5], data.results[6],
      data.results[7], data.results[8], data.results[9], data.results[10], data.results[11], data.results[12], data.results[13], data.results[14], data.results[15],
      data.results[16], data.results[17], data.results[18], data.results[19]]

      for (let i = 0; i < recipeNameArray.length; i++) {
        var recipeTitle = recipeNameArray[i].title;
        var recipePic = recipeNameArray[i].image;
        var recipeId = recipeNameArray[i].id;

        var div = document.createElement('div');
        var liRecipeTitle = document.createElement('a');
        liRecipeTitle.setAttribute('data-recipeId', recipeId)
        liRecipeTitle.classList.add('titleId')
        // var liRecipePic = document.createElement('li');

        liRecipeTitle.textContent = recipeTitle
        // liRecipePic.textContent = recipePic

        div.append(liRecipeTitle)
        searchResultContainer.append(div)
      }
    })

}

getRecipeId();

function userSelectRecipe(event) {
  if (!event.target.matches('.titleId')) {
    return
  }
  var receipeEventListener = event.target.getAttribute('data-recipeId')
  // console.log(receipeEventListener);
  var recipeUrl = 'https://api.spoonacular.com/recipes/' + receipeEventListener + '/information?' + georgesApiKey;
  fetch(recipeUrl)
    .then(function (response) {
      return response.json();
    }).then(function (data) {
      // console.log(data);
      var title = data.title;
      var image = data.image;
      var summary = data.summary;
      var recipeSteps = data.instructions;
      var ingredientsArray = data.extendedIngredients;
      for (let index = 0; index < ingredientsArray.length; index++) {
        const ingredients = ingredientsArray[index];
        console.log(ingredients)

        $('#searchResultContainer').remove();
      }
      var div = document.createElement('div');

      var liRecipeInformation = document.createElement('ol');
      liRecipeInformation.textContent = recipeSteps

      div.append(liRecipeInformation)
      recipeContainer.append(div)
      console.log(title);
      console.log(image);
      console.log(summary);
      console.log(recipeSteps);

    })
}
searchResultContainer.addEventListener('click', userSelectRecipe);
searchForm.addEventListener('submit', handleUserInput);