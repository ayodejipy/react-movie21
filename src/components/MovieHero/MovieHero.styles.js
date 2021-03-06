import styled from "styled-components";
// Config
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../config";

export const Wrapper = styled.section`
    background: ${({ backdrop }) => backdrop ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop}')` : '#000' };
    background-size: cover;
    background-position: center;
    padding: 40px 20px;
    animation: animateBG 1s;
    
    @keyframes animateBG {
        from { opacity: 0 }
        to { opacity: 1 }
    }
`
export const Content = styled.div`
    display: flex;
    max-width: var(--max-width);
    margin: 0 auto;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 20px;
    
    @media screen and (max-width: 768px) {
        display: block; 
        min-height: 100%;
    }
`

export const Text = styled.div`
    color: var(--white);
    width: 100%;
    padding: 20px 40px; 
    overflow: hidden;
    
    .rating-directors {
        display: flex;
        justify-content: start;
    }
    
    .score {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        background: var(--white);
        color: var(--darkGrey);
        font-weight: bold;
        border-radius: 50%;
    }
    
    .director {
        margin: 0 0 0 40px;
        
        p {
            margin: 0;
        }
    }
    
    h1 {
        @media screen and (max-width: 768px) {
            font-size: var(--fontBig)
        }
    }
`
