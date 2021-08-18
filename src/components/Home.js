import React, { useState, useEffect } from 'react'
// Hook
import { useHomeFetch } from '../hooks/useHomeFetch'

// import config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config'

// import image
import NoImage from '../images/no_image.jpg'

// components
import HeroImage from './HeroImage/HeroImage'

const Home = () => {
    const { moviesState, loading, error } = useHomeFetch()
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
        </>
    )
}

export default Home;