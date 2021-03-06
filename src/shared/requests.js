const API_KEY = "2a2389f840f06db0a7fa913ee0a3af3c";
const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-Us`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-Us`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchCrimeMovies: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
    fetchAnimations: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
}

export default requests;