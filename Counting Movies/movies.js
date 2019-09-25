// Counting Movies
// In this challenge you will write an HTTP GET method to retrieve
// information from a movie database. You will be given a search term,
// and your function must return the value of the total field in the returned
// JSON object.

// Function description.
// Complete the function getNumberOfMovies in the editor below. The function must
// return the value of the total field in the returned JSON object.

// getNumberOfMovies has the folowing parameter(s):
// substr: the string to search for in the movie database.

// It must query https://jsonmock.hackerrank.com/api/movies/search/?Title=[substr]
// and return the total number of movie titles having the substr in their title.
// The query response is a JSON object with the following five fields:
// page: The current page.
// per_page: The maximum number of results per page.
// total: The total number of movies having the substring substr in their title.
// total_pages: The total number of pages which must be queried to get all the results.
// data: An array of JSON objects containing movie information where the Title field 
// denotes the title of the movie.

// Constrains.
// 0 < |substr| < 20

// - Sample Case 0.
// Sample Input.
// maze
// Sample Output.
// 97

const fetch = require("node-fetch");

const getNumberOfMovies = async substr => {
  return await fetch(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${substr}`)
    .then(await (res => res.json()))
    .then(await (data => console.log(data.total)))
    .catch(err => console.log(err))
}

getNumberOfMovies("maze");