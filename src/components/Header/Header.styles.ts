import { DarkMode, LightMode } from "@/styles/variables";
import styled from "styled-components";

const heightSize = '6rem';

interface IHeaderContainerProps {
    visibleMenu: boolean;
}

export const HeaderContainer = styled.header<IHeaderContainerProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: ${heightSize};
    padding: 1rem 3rem;
    box-shadow: 0px 0px 2px ${(props) => props.theme.colors.base.gray_200};
    background: ${(props) => props.theme.colors.base.gray_400};

    img {
        height: 100%;
    }

    .iconMenuHeader {
        color: ${(props) => props.theme.colors.base.gray_100};
        cursor: pointer;
        display: none;

        &:hover {
            transform: scale(1.1);
            transition: 0.3s;
        }

        @media screen and (max-width: 700px) {
            display: flex;
        }
    }

    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;

        span {
            color: ${(props) => props.theme.colors.base.gray_100};
            font-size: 1.5rem;
            font-weight: 500;
            position: relative;
            padding: 0.5rem 1rem;

            &::before, &::after {
                content: " ";
                width: 0%;
                height: 0.2rem;
                background: ${(props) => props.theme.colors.base.gray_200};
                position: absolute;
                left: 50%;
                transform: translate(-50%);
                transition: 0.3s ease-in-out;
            }
            
            &::before {
                top: 0;
            }

            &::after {
                bottom: 0;
            }

            &:hover::before, &:hover::after {
                width: 100%;
            }
        }

        button {
            background: none;
            border: none;
            color: ${(props) => props.theme.colors.base.gray_100};
            margin-left: 1rem;

            &:hover {
                transform: scale(1.1);
                transition: 0.3s;
            }

            &:active {
                position: relative;
                top: 1px;
            }
        }

        @media screen and (max-width: 700px) {
            display: ${(props) => props.visibleMenu ? 'flex' : 'none'};
            position: absolute;
            top: calc(${heightSize} + 3px);
            background: ${(props) => props.theme.colors.base.gray_300};
            right: 3rem;
            border-radius: 0.5rem;
            flex-direction: column;
            z-index: 1;
            gap: 0.5rem;
            padding: 0;

            a {
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
                width: 100%;
                background: ${(props) => props.theme.colors.base.gray_200};
                text-align: center;
                overflow: hidden;
                
                &:first-child {
                    border-radius: 0.5rem 0.5rem 0 0 ;
                }

                &:nth-last-child(2) {
                    border-radius: 0 0 0.5rem 0.5rem;
                }

                span {
                    display: block;
                    padding: 0.8rem 3rem;
                    background: ${LightMode.colors.highlight.sereneIndigo};
                    width: 100%;

                    &:hover {
                        transition: 0.2s;
                        color: ${DarkMode.colors.base.gray_100};
                        background: ${(props) => props.theme.colors.pallete.success};
                    }

                    color: ${(props) => props.theme.colors.base.gray_300};

                    &::before, &::after {
                        content: none;
                    }
                }
            }
            
            button {
                display: none;
            }
        }
    }
`