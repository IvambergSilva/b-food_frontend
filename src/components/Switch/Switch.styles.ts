import { DarkMode, LightMode } from "@/styles/variables";
import styled from "styled-components";

let iconBackgroundSize = 3
let iconBorderSize = 1
let translateAmout = `${(iconBackgroundSize + iconBorderSize) / 2}rem`

export const SwitchContainer = styled.button`
    background: ${props => props.theme.colors.base.gray_300};
    border: 1px solid ${props => props.theme.colors.base.gray_100};
    width: ${iconBackgroundSize * 1.5}rem;
    border-radius: ${iconBackgroundSize / 2}rem;
    height: ${iconBackgroundSize / 1.5}rem;
    position: relative;
    
    div {
        width: ${iconBackgroundSize + iconBorderSize / 1.5}rem;
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        position: absolute;
        top: -${(iconBackgroundSize + iconBorderSize * 2.8) * (1 / (iconBackgroundSize * 2))}rem;
        
        transform: translateX(${props => props.theme.title === 'light' ? translateAmout : `-${translateAmout}`});
        
        display: flex;
        align-items: center;
        justify-content: center;
        
        background: ${DarkMode.colors.base.gray_300};

        &:hover {
            background: ${DarkMode.colors.base.gray_300};
            transition: all 0.2s ease-in-out;
        }
    }
    
    span {
        background: ${props => props.theme.title === 'light'
        ? DarkMode.colors.pallete.lightMustard
        : DarkMode.colors.pallete.sereneIndigo
    };
    color: ${(props) => props.theme.colors.base.gray_100};

        border-radius: 50%;
        width: ${iconBackgroundSize / 0.9}rem;
        aspect-ratio: 1 / 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`