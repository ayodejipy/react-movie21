import { useState, useEffect, useRef } from "react"

// API
import API from '../API'

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
}

export const useHomeFetch = () => {
    // create state using react useState hook
    const [moviesState, setMoviesState ] = useState(initialState);
    const [loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(false)
    
    // fetch all movies with two parameters
    const fetchMovies = async (page, searchTerm = "") => {
        try {
            setLoading(true)
            const movies = await API.fetchMovies(searchTerm, page) 
            // console.log(movies)
            
            /**
             * in result property, we're checking if page number is greater than one, 
             * then we append new movies to state, if not
             * just add the movies to the array
             * */ 
            
            setMoviesState((prev) => ({
                ...movies,
                results: page > 1 ? [...prev.results, ...movies.results] : [...movies.results] 
            }))
            
        } catch (error) {
            setError(true)
        }
    };
    
    // [] dependency array for useEffect, it will just run once
    useEffect(() => {
        // '1' because we want to fetch movies from the first page.
        fetchMovies(1) 
    }, [])
    
    return { moviesState, loading, error }
}