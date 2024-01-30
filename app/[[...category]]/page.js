import React from 'react'
import HomeContainer from '@/containers/home'
import { getSingleIdCategory,
    getTopRatedMovies,
    getPopularMovies,
    getCategories
} from '@/services/movie'
// async function delay(ms) {
//     return new Promise((resolve) => setTimeout(resolve, ms));
// }
async function HomePage({ params }) {

    const [{ results: topRatedMovies },
        {results:popularMovies},
        {genres:categories}]= 
        await Promise.all([getTopRatedMovies(),
            getPopularMovies(),
            getCategories()])
    // await delay(2000)

    let selectedCategory;
    if (params.category?.length > 0) {
        const {results} = await getSingleIdCategory(params.category[0] ) ;
        selectedCategory=results;
    }

    return (
        <HomeContainer
            topRatedMovies={topRatedMovies}
            popularMovies={popularMovies}
            categories={categories}
            selectedCategory={
                {
                    id: params.category?.[0] ?? '',
                    movies: selectedCategory ? selectedCategory.slice(1, 11) : []
                }
            } />
    )
}

export default HomePage