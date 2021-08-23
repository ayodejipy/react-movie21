import styled from "styled-components";

export const Wrapper = styled.section`
    background: var(--darkGrey);
    color: var(--white);
    border-radius: 10px;
    padding: 8px;
    text-align: justify;
    
    h3 {
        margin: 10px 0 5px 5px;
    }
    
    p {
        margin: 5px 5px 0;
        font-style: italic;
        font-size: 0.895rem;
    }
    
`

export const Image = styled.img`
    display: block;
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
`