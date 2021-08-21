import React, { useState, useEffect, useRef } from 'react'
// styles
import { Wrapper, Content } from './SearchBar.styles'
// image
import SearchIcon from '../../images/search-icon.svg'

const SearchBar = ({ setSearchTerm }) => {
    const [search, setSearch ] = useState('')
    const initial = useRef(true)
    
    // create a slight delay before showing search result
    useEffect(() => {
        // disables initial render
        if(initial.current) {
            initial.current = false
            return
        }
        
        const timer = setTimeout(() => {
            setSearchTerm(search);
        }, 800)
        
        return () => clearTimeout(timer)
        
    }, [setSearchTerm, search]) 
    
    return (
        <Wrapper>
            <Content>
                <img src={SearchIcon} alt="search-icon" />
                <input 
                    type="text" 
                    placeholder="Search Movie" 
                    onChange={e => setSearch(e.target.value)}
                    value={search}
                />
            </Content>
        </Wrapper>
    )
}

export default SearchBar;
