import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    margin: 0 auto;
    height: 100%;
    
    
    label {
        display: block;
        margin: 10px 0;
        font-weight: bold;
        font-size: 0.867rem;
        color: var(--medGrey);
    }
    
    input {
        padding: 15px 25px;
        border: 1px solid #cfcfcf;
        border-radius: 0.45rem;
        color: #c3c3c3;
    }
    
    .error {
        padding: 15px 8px;
        border-radius: 0.45rem;
        border: 1px solid #fd5757;
        color: #fd5757;
        font-weight: bold;
        margin: 25px 0;
    }
`