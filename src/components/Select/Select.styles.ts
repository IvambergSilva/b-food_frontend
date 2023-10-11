import styled from "styled-components";

export const SelectContainer = styled.select`
    width: 100%;
    border-radius: 0.5rem;
    border: 1px solid ${(props) => props.theme.colors.base.gray_300};
    outline: none;
    background: ${(props) => props.theme.colors.base.gray_400};
    height: 3.2rem;
    color: ${(props) => props.theme.colors.base.gray_200};
    padding: 0 1rem;
    cursor: pointer;
    appearance: none; 

    &::placeholder {
        color: ${(props) => props.theme.colors.base.gray_200};
    }

    &:focus {
        border: 1px solid ${(props) => props.theme.colors.highlight.sereneIndigo};
    }

`