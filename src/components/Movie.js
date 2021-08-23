import React from 'react'
import { useParams } from 'react-router-dom';
// config 
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
// Components
import MoviesGrid from './MoviesGrid/MoviesGrid';
import Spinner from './Spinner/Spinner';
import Breadcrumb from './Breadcrumb/Brumbcrumb';
import MovieStat from './MovieStats/MovieStats';
// Hook
import { useMovieFetch } from '../hooks/useMovieFetch';
// No Image
import NoImage from '../images/no_image.jpg'

const Movie = () => {
    const { movieId } = useParams();
    
    // remember our useMovieFetch hook needs a movieId arg
    const { state: movie, loading, error } = useMovieFetch(movieId)
    
    console.log(movie)
    
    if(loading) return <Spinner />
    if(error) return <div>Error</div>
    
    return (
        <div>
            <Breadcrumb movieTitle={movie.original_title} />
            <MovieStat movie={movie} />
        </div>
    )
}


export default Movie;
