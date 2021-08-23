import React from 'react'
import { Link } from 'react-router-dom'

// import styles for component
import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles'
    
// import images
import RMDLogo from '../../images/react-movie-logo.svg'
import TMDBLogo from '../../images/tmdb_logo.svg'

export default function Header() {
    return (
        <Wrapper>
            <Content>
                <Link to='/'>
                    <LogoImg src={RMDLogo} alt='rmdb-logo' />
                </Link>
                <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
            </Content>
        </Wrapper>
    )
}
