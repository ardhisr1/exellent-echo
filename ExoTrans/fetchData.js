// FETCH DATA LANGTITUDE AND LONGTITUDE BY CITY NAME




// FETCH DATA Tours API 

const key = `O50vAqEGxXdd2r0xqzATPdF2mcTQZMEE`;
const secret = `pEr3mCeqrm9cQR8S`;

const getDataTours = () => {
fetch('https://test.api.amadeus.com/v1/security/oauth2/token', {
method: 'POST',
body: 'grant_type=client_credentials&client_id=' + key + '&client_secret=' + secret,
headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}).then(function (resp) {

    // Return the response as JSON
    return resp.json();

}).then(function (data) {

    // Log the API data
    //console.log(data);
    return fetch('https://test.api.amadeus.com/v1/shopping/activities?latitude=-6.200000&longitude=106.816666&radius=20', {
    headers: {
        'Authorization': data.token_type + ' ' + data.access_token,
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    });
})
.then(function (resp) {

// Return the API response as JSON
return resp.json();

}).then(function (data) {

// Log the tours & activity data
console.log(data['data']);

}).catch(function (err) {

    // Log any errors
    console.log('something went wrong', err);

});
}; 



console.log(getDataTours())