/**
 * Created by jwilliamson on 3/16/17.
 */

let baseUrl = 'https://api.giphy.com/v1/gifs';
let apiKeyParam = '&api_key=dc6zaTOxFJmzC';

function search(query) {
    let url = baseUrl + '/search?q=' + query + '&limit=5' + apiKeyParam;
    return fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
            //console.log(responseJson.data[0]);
            return responseJson.data;
        })
        .catch((error) => {
            console.error(error);
        });
}

function random(query) {
    let url = baseUrl + '/random' + apiKeyParam;
    return fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
            //console.log(responseJson.data[0]);
            return responseJson.data;
        })
        .catch((error) => {
            console.error(error);
        });
}

module.exports = {
    search: search
};
