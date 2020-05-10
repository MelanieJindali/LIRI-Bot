require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var moment = require("moment");
var fs = require("fs");

var command = process.argv[2];
var input = process.argv.slice(3).join(" ");

var defaultSong = "The Sign";
var defaultMovie = "Mr. Nobody";

switch (command) {
  case "concert-this":
    getBands(input)
    break;
  case "spotify-this-song":
    getSongs(input)

    break;
  case "movie-this":
    getMovies(input)

    break;
  case "do-what-it-says":
    doWhatItSays(input)

  default:
    break;
}

function getBands(artist) {
  var artist = input

axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
.then(function(response) {
    // console.log(response.data);
    console.log('\n========================================================================\n');
    console.log(`Name of venue: ${response.data[0].venue.name}`);
    console.log(`Venue location: ${response.data[0].venue.city}`);
    // Format using moment
    // console.log(response.data[0].datetime);
    var eDate = moment(response.data[0].datetime).format('MM/DD/YYYY');
    console.log('Date of the Event: ' + eDate);
    console.log('\n========================================================================\n');
   }) 
  .catch(function(error) {
      console.log(error)
  });
}

function getSongs(song) {
  var song = input
  if (song === undefined) {
    song = defaultSong;
  }
spotify.search({ type: 'track', query: song })
  .then(function(data) {
    // console.log(data.tracks.items[0]);
    console.log('\n========================================================================\n');
    console.log(`Song Name: ${data.tracks.items[0].name}`);
    console.log(`Artist(s) Name: ${data.tracks.items[0].album.artists[0].name}`);
    console.log(`Preview Song: ${data.tracks.items[0].external_urls.spotify}`);
    console.log(`Album Name: ${data.tracks.items[0].album.name}`);
    console.log('\n========================================================================\n');
  })
  .catch(function(err) {
    console.log(err);
  });
}

function getMovies(movie) {
    input = movie
    if (movie === undefined) {
      movie = defaultMovie;
    }
  axios.get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy").then(
  function(response) {
    // console.log(response.data)
    console.log('\n=========================================================================\n');
    console.log(`Movie title: ${response.data.Title}`);
    console.log(`Year released: ${response.data.Year}`);
    console.log(`IMDB rating: ${response.data.Ratings[0].Value}`);
    console.log(`Rotten Tomatoes rating: ${response.data.Ratings[1].Value}`);
    console.log(`Country movie was produced in: ${response.data.Country}`);
    console.log(`Language of the movie: ${response.data.Language}`);
    console.log(`Plot: ${response.data.Plot}`);
    console.log(`Actors: ${response.data.Actors}`);
    console.log('\n========================================================================\n');
  })
}

function doWhatItSays() {
fs.readFile("random.txt", "utf8", function(error, data) {

  if (error) {
    return console.log(error);
  }
  data = data.split(",");
  // console.log(data);

  command = data[0];
  input = data[1];

  doWhatItSays();

  });
}