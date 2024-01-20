import React from 'react'
import CategoriesLoading from '@/components/categories/loading';
import FeatureMovieLoading from '@/components/featured-movie/loading';
import MoviesSectionLoading from '@/components/movie-sections/loading';


function Loading() {
  return (
    <div>
      <FeatureMovieLoading />
      <CategoriesLoading />
      <MoviesSectionLoading/>
      <MoviesSectionLoading/>
      <MoviesSectionLoading/>
    </div>
  )
}

export default Loading;