import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

// import styles for component
import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles'
// import images
import RMDLogo from '../../images/react-movie-logo.svg'
import TMDBLogo from '../../images/tmdb_logo.svg'
// Context
import { userContext } from '../../context'

export default function Header() {
    const [user] = useContext(userContext)
    
    
    return (
        <Wrapper>
            <Content>
                <Link to='/'>
                    <LogoImg src={RMDLogo} alt='rmdb-logo' />
                </Link>
                { user ? 
                    <span className='loggedin'>Logged in: {user.username} </span> 
                    : <Link to='/login'><span className='login-btn'>Login</span></Link> 
                }
                <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
            </Content>
        </Wrapper>
    )
}
