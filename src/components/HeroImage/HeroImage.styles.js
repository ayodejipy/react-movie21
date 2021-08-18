import styled from "styled-components";

export const Wrapper = styled.div`
    background: linear-gradient(
        to bottom, 
        rgba(0, 0, 0, 0) 39%, 
        rgba(0, 0, 0, 0.65) 100%
        ), url(${ ({image}) => image }), var(--darkGrey);
    background-size: cover 100%;
    height: 600px;
    position: relative;
    animation: animateHeroImage 1.5s;
    
    @keyframes animateHeroImage {
        from {
            opacity: 0;
        }
        
        to {
            opacity: 1;
        }
    }
`

export const Content = styled.div`
    padding: 20px;
    max-width: var(--max-width);
    margin: 0 auto;

`

export const Text = styled.div`
    position: absolute;
    bottom: 40px;
    max-width: 700px;
    margin-right: 20px;
    min-height: 100px;
    color: var(--white);
    
    h1 {
        font-size: var(--fontSuperBig);
        
        @media screen and (max-width: 720px) {
            font-size: var(--fontBig)
        }
    }
`