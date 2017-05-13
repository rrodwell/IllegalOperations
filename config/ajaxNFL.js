/**
 * Created by ryanrodwell on 5/13/17.
 */
var nflKeys = require("./nflKeys");
var request = require('ajax-request');

//Keys
var accessToken = nflKeys.access_token;
var tokenType =nflKeys.token_type;
var refreshToken = nflKeys.refresh_token;

//Query, method
var queryURL = 'https://api.nfl.com//persons/0d58ad70-9f49-4c08-b184-b725a2cfb106?fs={ id, displayName, firstName, lastName, birthDate, heightInches, weightLbs, player, playerStats{careerStats, gameStats}, college{name} }&s={ "playerStats": { "gameStats": { "$takeFirst": 3 } } }' + accessToken;

$.ajax({
    url: queryURL,
    method: "GET"
}).done(function(response){
    console.log(response);
});

request({
    url: queryURL,
    method: 'GET',
    data: {
        query1: 'value1'
    }
}, function(err, res, body) {

});