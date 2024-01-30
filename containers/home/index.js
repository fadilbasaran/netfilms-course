import React from 'react'
import FeaturedMovie  from '@/components/featured-movie'
import Categories from '@/components/categories'
import MovieSection from '@/components/movie-sections'
function HomeContainer({topRatedMovies=[],popularMovies=[],categories=[],selectedCategory}) {

 

  return (
    <div>
      <FeaturedMovie  movie={topRatedMovies?.[0]}/>
      
      <Categories categories={categories.slice(0,5)}/>
      {
        selectedCategory.movies.length >0 &&
        (
          <MovieSection title={
            categories.find(genre => `${genre.id}`=== selectedCategory.id).name
          } movies={selectedCategory.movies}
          />
        )
      }
      <MovieSection title="Popular Films" movies={topRatedMovies.slice(1,7)} />
      <MovieSection title="Your Favorites" movies={popularMovies.slice(7,13)}/>
      </div>
  )
}

export default HomeContainer