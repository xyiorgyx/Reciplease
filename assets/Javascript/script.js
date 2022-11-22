var searchResultContainer = document.querySelector('#searchResultContainer');
var searchButton = document.getElementById('searchBtn');
var searchBar = document.querySelector('.searchBar');
var apiKey = "&apiKey=67c5935d239e403fba7b639eaf1d6eaa";
var georgesApiKey = "&apiKey=1309e9b059aa45948273416e525ab69c";
var search = document.getElementById('default-search');

function handleUserInput() {
  var input = search.value
  console.log(input);
  getRecipeId(input)
}

function getRecipeId(input) {
  var requestUrl = 'https://api.spoonacular.com/recipes/complexSearch?query=' + input + georgesApiKey + '&number=20';
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log(data);
      var recipeNameArray = [data.results[0], data.results[1], data.results[2], data.results[3], data.results[4], data.results[5], data.results[6],
      data.results[7], data.results[8], data.results[9], data.results[10], data.results[11], data.results[12], data.results[13], data.results[14], data.results[15],
      data.results[16], data.results[17], data.results[18], data.results[19]]

      for (let i = 0; i < recipeNameArray.length; i++) {
        var recipeTitle = recipeNameArray[i].title;
        var recipePic = recipeNameArray[i].image;
        var recipeId = recipeNameArray[i].id;

        var div = document.createElement('div');
        var liRecipeTitle = document.createElement('li');
        var liRecipePic = document.createElement('li');
        var liRecipeId = document.createElement('li');

        liRecipeTitle.textContent = recipeTitle
        liRecipePic.textContent = recipePic
        liRecipeId.textContent = recipeId

        // div.setAttribute('class', 'col-2')
        div.append(liRecipeTitle, liRecipePic, liRecipeId)
        searchResultContainer.append(div)
      }
    })
}
getRecipeId();
// need to display the titles and maybe images for the recipe the user searches
// then the user should be able to click the image or the title
// from there it will need to grab the id of the recipe and the push it through the get recipeapi function below
// function getRecipeApi(recipeId) {
//   var recipeUrl = 'https://api.spoonacular.com/recipes/' + recipeId + '/information';
//   fetch(recipeUrl)
//     .then(function (response) {
//       return response.json();
//     }).then(function (data) {
//       console.log(data);
//     })
// }
// getRecipeApi();


// need to add buttons
// make a function that takes 

searchButton.addEventListener('click', handleUserInput);