import { styled } from 'styled-components'

export const InputContainer = styled.input`
    width: 100%;
    border-radius: 0.5rem;
    border: 1px solid ${(props) => props.theme.colors.base.gray_300};
    outline: none;
    background: ${(props) => props.theme.colors.base.gray_400};
    height: 3.2rem;
    color: ${(props) => props.theme.colors.base.gray_200};
    padding: 0 1rem;

    &::placeholder {
        color: ${(props) => props.theme.colors.base.gray_200};
    }

    &:focus {
        border: 1px solid ${(props) => props.theme.colors.highlight.sereneIndigo};
    }
`
export const TextAreaContainer = styled.textarea`
    width: 100%;
    resize: none;
    padding: 0.8rem 1rem;
    min-height: 12rem;
    border-radius: 0.5rem;
    border: 1px solid ${(props) => props.theme.colors.base.gray_300};
    outline: none;
    background: ${(props) => props.theme.colors.base.gray_400};
    color: ${(props) => props.theme.colors.base.gray_200};

    &::placeholder {
        color: ${(props) => props.theme.colors.base.gray_200};
    }

    &:focus {
        border: 1px solid ${(props) => props.theme.colors.highlight.sereneIndigo};
    }
`
