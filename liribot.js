require("dotenv").config();
var keys = require("./keys.js");
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
    getBands(input)
    break;
  case "spotify-this-song":
    if (input === "") {
      input = defaultSong;
    }
    getSongs(input)
    break;
  case "movie-this":
    if (input == "") {
      input = defaultMovie;
    }
    getMovies(input)
    break;
  case "do-what-it-says":
    doWhatItSays()
    break;
  default:
    break;
}

