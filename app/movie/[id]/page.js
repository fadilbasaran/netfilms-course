import React from 'react'
import MovieContainer from '@/containers/movie'

import { notFound } from 'next/navigation'
import { getMovie } from '@/services/movie';

// async function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }
// const API_URL = "https://api.themoviedb.org/3"

// const getMovie= async (movieId)=>{
//     const rest = await fetch(`${API_URL}/movie/${movieId}?api_key=${process.env.API_KEY}`);
//     return rest.json(); 
// } 


async function MoviePage({ params, searchParams }) {
  //  await delay(2000);
  const movieDetails = await getMovie(params.id);
  // const movieDetails = Movies.results.find((movie) => movie.id.toString() === params.id)
  
  if (!movieDetails) {
    notFound();/** Eğer id bulunamzsa buraya yönlendirecek */
  }
  // if (searchParams.error === "true") {
  //   throw new Error("Error happened");
  // }
  return (
    <MovieContainer movie={movieDetails} />
  )
}

export default MoviePage