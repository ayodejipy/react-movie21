import React from 'react'
// Hook
import { useHomeFetch } from '../hooks/useHomeFetch'

// import config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config'

// import image
import NoImage from '../images/no_image.jpg'

// components
import HeroImage from './HeroImage/HeroImage'
import MoviesGrid from './MoviesGrid/MoviesGrid'
import Thumbnail from './Thumnail/Thumbnail'
import Spinner from './Spinner/Spinner'
import SearchBar from './SearchBar/SearchBar'

const Home = () => {
    const { moviesState, loading, error, setSearchText } = useHomeFetch()
    const firstMovieTitle = moviesState.results[0] && moviesState.results[0].original_title
    const firstMovieOverview = moviesState.results[0] && moviesState.results[0].overview
    const firstMovieImage = moviesState.results[0] && moviesState.results[0].backdrop_path
    
    console.log(moviesState)
    
    return (
        <>
            <HeroImage 
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${firstMovieImage}`}
                title={firstMovieTitle}
                text={firstMovieOverview}
            />
            <SearchBar setSearchTerm={setSearchText} />
            
            <MoviesGrid header="Popular Movies">
                { moviesState.results.map( movie => (
                    <Thumbnail 
                        key={movie.id} 
                        // clickable
                        image={ movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : NoImage }
                        movieId={movie.id} 
                    />
                ))}
            </MoviesGrid>
            <Spinner />
        </>
    )
}

export default Home;