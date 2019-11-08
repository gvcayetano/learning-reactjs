import http from "./httpService";

const apiEndpoint = "http://localhost:3900/api/movies";
export function getMovies() {
  return http.get(apiEndpoint);
}

// export function getMovie(id) {
//   return http.get("http://localhost:3900/api/movies/" + id);
// }

// export function saveMovie(movie) {
//   let movieInDb = movies.find(m => m._id === movie._id) || {};
//   movieInDb.title = movie.title;
//   movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
//   movieInDb.numberInStock = movie.numberInStock;
//   movieInDb.dailyRentalRate = movie.dailyRentalRate;

//   if (!movieInDb._id) {
//     movieInDb._id = Date.now().toString();
//     movies.push(movieInDb);
//     http.post("http://localhost:3900/api/movies", movieInDb);
//   } else {
//     http.put("http://localhost:3900/api/movies", movieInDb);
//   }
// }

export function deleteMovie(id) {
  return http.delete(apiEndpoint + "/" + id);
}
