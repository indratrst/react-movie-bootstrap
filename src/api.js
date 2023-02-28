import axios from "axios";
// const baseUrl = process.env.REACT_APP_BASEURL
const key = process.env.REACT_APP_KEY


// export const getMovies = async () => {
//   const movie = await axios.get(`${baseUrl}/movie/popular?page=1&api_key=${key}`)
//   return movie.data.results
// }



// export const searchMovie = async (q) => {
//   const search = await axios.get(`${baseUrl}/search/movie?api_key=${key}&query=${q}&page=1`)
//   return search.data

// }


export const getMovies = async () => {
  const movie = await axios.get(`https://www.omdbapi.com/?apikey=${key}&s=avengers`)
  // console.log({ movies: movie });
  return movie.data.Search

}
export const getDetail = async (id) => {
  const detail = await axios.get(`https://www.omdbapi.com/?apikey=${key}&i=${!id ? "tt0848228" : id}&plot=full`)
  // console.log({ movie: detail.data });
  return detail.data

}



export const searchMovie = async (q) => {
  const search = await axios.get(`https://www.omdbapi.com/?apikey=${key}&s=${!q ? "avengers" : q}`)
  return search.data

}
