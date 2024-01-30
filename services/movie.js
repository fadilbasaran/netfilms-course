const API_URL = "https://api.themoviedb.org/3"

const fetchMovieApi = async (pathName, quary = '') => {
    try {
        const rest = await fetch(`${API_URL}${pathName}?api_key=${process.env.API_KEY}&${quary}`);
        return rest.json();
    } catch (error) {
        throw new Error(error)
    }
}
const getSingleIdCategory = async (genreId) => {
    return fetchMovieApi('/discover/movie', `with_genres=${genreId}`);
}
const getTopRatedMovies = async () => {
    return fetchMovieApi('/movie/top_rated', `page=1`);
}
const getPopularMovies = async () => {
    return fetchMovieApi('/movie/popular', `page=1`);
}
const getCategories = async () => {
    return fetchMovieApi('/genre/movie/list', `page=1`);
}
const getMovie= async (movieId)=>{
    return fetchMovieApi( `/movie/${movieId}`);
} 
export {
    fetchMovieApi,
    getSingleIdCategory,
    getTopRatedMovies,
    getPopularMovies,
    getCategories,
    getMovie
};