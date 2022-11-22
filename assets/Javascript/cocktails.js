var userInput = document.getElementById('userInput').value
var requestUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userInput}";

function getApi() {
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            // for (var i = 0; i < data.length; i++) {
            //     var listItem = document.createElement('li');
            //     listItem.textContent = data[i].html_url;
            //     repoList.appendChild(listItem);
            // }
        });
}
getApi();







