require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var moment = require("moment");
var fs = require("fs")

var command = process.argv[2];
var input = process.argv[3];

var defaultSong = "The Sign";
var defaultMovie = "Mr. Nobody";

switch (command) {
  case "concert-this":
    getBands()
    break;
  case "spotify-this-song":
    if (input === "") {
      input = defaultSong;
    }
    getSongs()
    break;
  case "movie-this":
    if (input == "") {
      input = defaultMovie;
    }
    getMovies()
    break;
  case "do-what-it-says":
    doWhatItSays()
    break;
  default:
    break;
}

function getBands(artist) {
var artist = input

axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
.then(function(response) {
    // console.log(response);
    console.log('Name of venue: ' + response.data[0].venue.name);
    console.log('Venue location:' + response.data[0].venue.city);
    console.log(response.data[0].datetime);
   }) 
  .catch(function(error) {
      console.log(error)
  });
}
