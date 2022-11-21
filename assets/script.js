var repoList = document.querySelector('.searchResultContainer');
var fetchButton = document.getElementById('searchBtn');
var searchBar = document.querySelector('.searchBar')
var apiKey = "&apiKey=67c5935d239e403fba7b639eaf1d6eaa";
var userInput = searchBar.value;
// function getApi() {
//     var requestUrl = 'https://api.spoonacular.com/recipes/complexSearch?query=' + userinput + apiKey + '&number=2';
//     fetch(requestUrl)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
//             for (var i = 0; i < data.length; i++) {
//                 var listItem = document.createElement('li');
//                 listItem.textContent = data[i].html_url;
//                 repoList.appendChild(listItem);
//             }
//         });
// }
// getApi();
// fetchButton.addEventListener('click', getApi);

function handleUserInput() {
    var collection = document.querySelectorAll('li');
    //for loope to remove previous li's that the current weather was listed in
    var searchInput = input.value
    getApi(searchInput)
}

function getApi(searchInput) {
    var requestUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=' + searchInput + '&limit=1&appid=b2888db4f0baa774a62c34dc4c426cad';
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            // var lat = data[0].lat;
            // var lon = data[0].lon;
            // var cityName = data[0].name
            // saveHistory(cityName)
            // getCurrentWeather(lat, lon);
            // getFutureWeather(lat, lon)
        })
    console.log(data);
}
