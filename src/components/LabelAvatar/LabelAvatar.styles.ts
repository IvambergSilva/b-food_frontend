import { DarkMode } from "@/styles/variables";
import styled from "styled-components";

interface ILabelAvatarProps {
    avatarImage: boolean
}

export const LabelAvatarContainer = styled.label<ILabelAvatarProps>`
    width: 100%;
    height: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    border: 1px solid ${(props) => props.theme.colors.base.gray_300};
    background: ${(props) => props.theme.colors.base.gray_400};
    cursor: pointer;
    position: relative;

    &::placeholder {
        color: ${(props) => props.theme.colors.base.gray_200};
    }

    &:hover  {
        border: 1px solid ${(props) => props.theme.colors.highlight.sereneIndigo};
        background: ${(props) => {
        return props.avatarImage ? DarkMode.colors.base.gray_500 : ''
    }};
        
        img {
            opacity: 0.5;
            transition: 0.2s;
        }

        span {
            display: block;
            color: ${(props) => {
        if (props.avatarImage) {
            return props.theme.title === 'light'
                ? DarkMode.colors.base.gray_100 : props.theme.colors.base.gray_100
        }
        return DarkMode.colors.base.gray_100
    }};
        }
    }

    span {
        color: ${(props) => props.theme.colors.base.gray_100};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: ${(props) => {
        return props.avatarImage ? 'none' : 'block'
    }};
    }

    input {
        display: none;
    }

    img {
        width: 100%;
        height: 100%;
        border-radius: 0.5rem;
        object-fit: cover;
    }
`