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
    // searchTerm state
    const [searchText, setSearchText] = useState('')
    const [loadingMore, setLoadingMore] = useState(false)
    
    // console.log(searchText)
    
    // fetch all movies with two parameters
    const fetchMovies = async (page, searchTerm = '') => {
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
            // set loading to false once we're done loading..
            setLoading(false)
            
        } catch (error) {
            setError(true)
        }
    };
    
    // [] dependency array for useEffect, it will just run once. render when searcText changes
    useEffect(() => {
        // reset/clean movie state before fetching
        setMoviesState(initialState)
        
        // '1' because we want to fetch movies from the first page.
        fetchMovies(1, searchText) 
    }, [searchText])
    
    // Load more
    useEffect(() => {
     if(!loadingMore) return
     
    //  fetch next page by adding 1 to current page, then search text if we are searching
     fetchMovies(moviesState.page + 1, searchText)
     
     setLoadingMore(false) // set flag to false
     
    }, [loadingMore, moviesState, searchText])
    
    return { moviesState, loading, error, searchText, setSearchText, setLoadingMore }
}