import styled from "styled-components";

export const ButtonWrap = styled.button`
    background: var(--darkGrey);
    color: var(--white);
    padding: 16px 35px;
    display: block;
    width: 180px;
    margin: 0 auto;
    margin-top: 25px;
    margin-bottom: 25px;
    font-size: var(--fontSmall);
    font-weight: 500;
    border: 0;
    border-radius: 30px;
    cursor: pointer;
    transition: all 1s;
    
    :hover {
        background: var(--medGrey)
    }
`