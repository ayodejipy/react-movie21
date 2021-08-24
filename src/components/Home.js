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
import Button from './Button/Button'

// Inline Style
const NoResult = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '250px',
    margin: '50px 0',
    padding: '0 20px',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#3c3c3c'
}

const Home = () => {
    const { moviesState, loading, error, searchText, setSearchText, setLoadingMore } = useHomeFetch()
    
    // extract and store title, description and image path from movie state to variables
    const firstMovieTitle = moviesState.results[0] && moviesState.results[0].original_title
    const firstMovieOverview = moviesState.results[0] && moviesState.results[0].overview
    const firstMovieImage = moviesState.results[0] && moviesState.results[0].backdrop_path
    
    // console.log(moviesState)
    
    if(error) return <div>Error: Cannot load up...</div>
    
    return (
        <>
            { !searchText &&
                <HeroImage 
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${firstMovieImage}`}
                    title={firstMovieTitle}
                    text={firstMovieOverview}
                />
            }
            <SearchBar setSearchTerm={setSearchText} />
            
            { moviesState.results.length === 0 ? <div style={NoResult}>Oops! No data for search term...</div>
                : <MoviesGrid header={ !searchText ? 'Popular Movies': 'Search Result'} >
                    { moviesState.results.map( movie => (
                        <Thumbnail 
                            key={movie.id} 
                            clickable
                            image={ movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : NoImage }
                            movieId={movie.id} 
                        />
                    ))}
                </MoviesGrid>
            }
            
            { loading && <Spinner />}
            {moviesState.page < moviesState.total_pages && !loading && (
                <Button text='Load more' callback={() => setLoadingMore(true)} />
            )}
        </>
    )
}

export default Home;