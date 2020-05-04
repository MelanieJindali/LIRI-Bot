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
    console.log(response.data);
    console.log('Name of venue: ' + response.data[0].venue.name);
    console.log('Venue location: ' + response.data[0].venue.city);
    console.log(response.data[0].datetime);
   }) 
  .catch(function(error) {
      console.log(error)
  });
}

function getSongs(song) {
var song = input
spotify.search({ 
    type: 'track',
    query: song})
  .then(function(data) {
    // console.log(data.tracks.items[0]);
    console.log('Artist: ', data.tracks.items[0].album.artists[0].name);
    console.log('Preview Song: ' + data.tracks.items[0].external_urls.spotify)
    console.log('Album Name: ' + data.tracks.items[0].album.name)
  })
  .catch(function(err) {
    console.log(err);
  });
}

function getMovies(movie) {
  var movie = input
  axios.get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy").then(
  function(response) {
    // console.log(response.data)
    console.log('\n=====================================\n');
    console.log('Movie title: ' + response.data.Title);
    console.log('Year released: ' + response.data.Year);
    console.log('IMDB rating: ' + response.data.Ratings[0].Value);
    console.log('Rotten Tomatoes rating: ' + response.data.Ratings[1].Value);
    console.log('Country movie was produced in: ' + response.data.Country);
    console.log('Language of the movie: ' + response.data.Language);
    console.log('Plot: ' + response.data.Plot);
    console.log('Actors: ' + response.data.Actors);
    console.log('\n====================================\n');
  })
}