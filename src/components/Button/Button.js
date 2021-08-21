import React from 'react'
// styles
import { ButtonWrap } from './Button.styles';

const Button = ({ text, callback }) => {
    return (
        <ButtonWrap type="button" onClick={callback}>
            { text }
        </ButtonWrap>
    )
}

export default Button;