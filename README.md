# Project: LIRI-Bot

## Overview

In this assignment, I will make LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

### Technology used:

GitHub - file repository

Visual Studio Code - text editor

Node.js

APIs:

* Spotify (https://developer.spotify.com/)
* OMDB (http://www.omdbapi.com)
* Bands In Town (http://www.artists.bandsintown.com/bandsintown-api)

NPM Packages:

* Node-Spotify-API (https://www.npmjs.com/package/node-spotify-api)
* Axios (https://www.npmjs.com/package/axios)
* Moment (https://www.npmjs.com/package/moment)
* DotEnv (https://www.npmjs.com/package/dotenv)

### What Each Command Does

LIRI searches Bands in Town for concerts, Spotify for songs, and OMDB for movies.

1. `node liri.js concert-this '<artist/band name here>'`

Searches the Bands in Town Artist Events API for an artist and renders the following information about each event to the terminal:

  * Name of the venue

  * Venue location

  * Date of the Event (using the format "MM/DD/YYYY")
  
  ![](https://media.giphy.com/media/YTJrRfZuflwN2JITQ5/giphy.gif)

2. `node liri.js spotify-this-song '<song name here>'`

Displays the following information about the selected song in your terminal/bash window

  * Artist(s)

  * The song's name

  * A preview link of the song from Spotify

  * The album containing the song
  
  ![](https://media.giphy.com/media/PjxtgY4zRgglLTujgP/giphy.gif)

    * If no song is provided, the program defaults to "The Sign" by Ace of Base.
    
  ![](https://media.giphy.com/media/fAJ8tO7jNSX4vYyHvA/giphy.gif)
   


3. `node liri.js movie-this '<movie name here>'`

This will output the following movie information to your terminal/bash window:

  * Title
  * Year movie was released
  * IMDB Rating
  * Rotten Tomatoes Rating
  * Country where movie was produced
  * Language(s)
  * Plot of the movie
  * Actors in the movie
  
  ![](https://media.giphy.com/media/lQ7Pb6KioTMW7lTXLW/giphy.gif)
  
    * If the user does not enter a movie selection, the program outputs data for the movie 'Mr. Nobody.'
    
  ![](https://media.giphy.com/media/SANbT2OKTOX4jNpubU/giphy.gif)
    
 

4. `node liri.js do-what-it-says`

Runs spotify-this-song for "I Want it That Way".

![](https://media.giphy.com/media/QyDFyBqitothiucluF/giphy.gif)
