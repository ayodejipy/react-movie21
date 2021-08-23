import React from 'react'
import { useParams } from 'react-router-dom';
// config 
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
// Components
import MoviesGrid from './MoviesGrid/MoviesGrid';
import Spinner from './Spinner/Spinner';
import Breadcrumb from './Breadcrumb/Brumbcrumb';
import MovieHero from './MovieHero/MovieHero';
import MovieStat from './MovieStats/MovieStats';
import Actor from './Actor/Actor';
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
            <MovieHero movie={movie} />
            <MovieStat time={movie.runtime} budget={movie.budget} revenue={movie.revenue} />
            <MoviesGrid header={'Actors'}>
                { movie.actors.map( actor => 
                    <Actor
                        key={actor.credit_id}
                        name={actor.name}
                        character={actor.character}
                        imageUrl={ actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}` : NoImage }
                    />
                )}
            </MoviesGrid>
        </div>
    )
}


export default Movie;
