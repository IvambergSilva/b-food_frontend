import { Base, Highlight } from '@/styles/variables'
import { styled } from 'styled-components'

export const InputContainer = styled.input`
    width: 100%;
    border-radius: 0.5rem;
    border: 1px solid ${Base.gray_300};
    outline: none;
    text-align: center;
    background: ${Base.gray_400};
    height: 3.2rem;
    color: ${Base.gray_200};

    &::placeholder {
        color: ${Base.gray_200};
    }

    &:focus {
        border: 1px solid ${Highlight.purple};
    }
`
export const TextAreaContainer = styled.textarea`
    width: 100%;
`
