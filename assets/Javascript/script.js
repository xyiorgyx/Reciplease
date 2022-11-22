var searchResultContainer = document.querySelector('.searchResultContainer');
var fetchButton = document.getElementById('searchBtn');
var searchBar = document.querySelector('.searchBar')
var apiKey = "&apiKey=67c5935d239e403fba7b639eaf1d6eaa";
// var userInput = searchBar.value;
function handleUserInput() {
  var searchInput = input.value
  getRecipeId(searchInput)
}
function getRecipeId(searchInput) {
  var requestUrl = 'https://api.spoonacular.com/recipes/complexSearch?query=' + 'pasta' + apiKey + '&number=20';
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log(data);
      var recipeNameArray = [data.results[0], data.results[1], data.results[2], data.results[3], data.results[4], data.results[5], data.results[6],
      data.results[7], data.results[8], data.results[9], data.results[10], data.results[11], data.results[12], data.results[13], data.results[14], data.results[15],
      data.results[16], data.results[17], data.results[18], data.results[19]]
      var recipeId = data.results[0].id;
      for (let i = 0; i < recipeNameArray.length; i++) {
        var recipeTitle = recipeNameArray[i].results.title;
        var recipePic = recipeNameArray[i].results.image;
        var recipeId = recipeNameArray[i].results.id;
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