import styled from "styled-components";

export const Wrapper = styled.section`
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 20px;
    margin-top: 55px;
    
    h1 {
        color: var(--medGrey);
        
        @media screen and (max-width: 768px) {
            font-size: var(--fontBig);
        }
    }
`

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 2rem;
`

