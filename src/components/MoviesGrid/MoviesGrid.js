import React from 'react'

// Styles
import { Wrapper, Content } from './Moviesgrid.styles'

const moviesgrid = ({ header, children }) => {
    return (
        <Wrapper>
            <h1>{header}</h1>
            <Content> { children } </Content>
        </Wrapper>
    )
}

export default moviesgrid;  