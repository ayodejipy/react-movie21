import styled from "styled-components";

export const Image = styled.img`
    width: 100%;
    max-width: 720px;
    transition: all 0.5s;
    object-fit: cover;
    border-radius: 12px;
    animation: animateThumb 1.5s;
    
    :hover {
       opacity: 0.9;
       /* transform: scale(50px, 50px); */
    }
    
    @keyframes animateThumb {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`