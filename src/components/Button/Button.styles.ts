import { DarkMode } from '@/styles/variables'
import { keyframes, styled } from 'styled-components'

export const IconSpin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

interface IButtonContainerProps {
    model: string
}

export const ButtonContainer = styled.button<IButtonContainerProps>`
    width: 100%;
    border-radius: 0.5rem;
    border: none;
    padding: 0.8rem;
    background: ${(props) => {
        return props.type === 'submit' || props.model === 'conclude'
            ? DarkMode.colors.pallete.success
            : DarkMode.colors.highlight.sereneIndigo
    }};
    color: ${DarkMode.colors.base.gray_400};

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

    &:hover {
        filter: brightness(1.1);
    }
`