import { DarkMode } from "@/styles/variables";
import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 6rem;
    background: #000;
    padding: 1rem 3rem;
    box-shadow: 0px 0px 2px ${(props) => props.theme.colors.base.gray_300};
    
    img {
        height: 100%;
    }
    
    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;

        span {
            color: ${(props) => props.theme.colors.base.gray_100};
            font-size: 1.5rem;
            font-weight: 500;
        }

        button {
            background: none;
            border: none;
            color: ${(props) => props.theme.colors.base.gray_100};
            margin-left: 1rem;

            &:hover {
                transform: scale(1.1);
            }

            &:active {
                position: relative;
                top: 1px;
            }
        }
    }
`