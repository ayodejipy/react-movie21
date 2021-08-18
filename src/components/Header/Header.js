import React from 'react'

// import styles for component
import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles'
    
// import images
import RMDLogo from '../../images/react-movie-logo.svg'
import TMDBLogo from '../../images/tmdb_logo.svg'

export default function Header() {
    return (
        <Wrapper>
            <Content>
                <LogoImg src={RMDLogo} alt='rmdb-logo' />
                <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
            </Content>
        </Wrapper>
    )
}
