import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    margin: 0 auto;
    height: 100%;
    
    form {
        width: 100%;
        
        label {
            display: block;
            margin: 10px 0;
            font-weight: bold;
            font-size: 0.867rem;
            color: var(--medGrey);
        }
        
        input {
            width: 100%;
            padding: 15px 25px;
            border: 1px solid #cfcfcf;
            border-radius: 0.45rem;
            color: #c3c3c3;
        }
        
        button {
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
        }
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