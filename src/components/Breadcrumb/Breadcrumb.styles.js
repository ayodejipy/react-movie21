import styled from "styled-components";

export const Wrapper = styled.article`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70px;
    background: var(--medGrey);
    color: var(--white);
`

export const Content = styled.section`
    display: flex;
    width: 100%;
    max-width: var(--max-width);
    padding: 0 20px;
    
    a { text-decoration: none; }
    
    span {
        color: var(--white);
        font-size: var(--fontMed);
        padding-right: 10px;
        
        
        @media screen and (max-width: 768px) {
            font-size: (--fontSmall);
        }
    }
`