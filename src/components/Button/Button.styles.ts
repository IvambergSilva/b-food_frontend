import { keyframes, styled } from 'styled-components'

const IconSpin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

export const ButtonContainer = styled.button`
    width: 100%;
    border-radius: 0.5rem;
    border: none;
    padding: 0.8rem;

    p {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: ${(props) => {
        return props.disabled ? 'not-allowed' : ''
    }};
        animation: ${(props) => {
        return props.disabled ? IconSpin : ''
    }} 1s infinite;
    }

    &:active {
        position: relative;
        top: 1px;
    }
`