import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 6rem;
    padding: 1rem 3rem;
    box-shadow: 0px 0px 2px ${(props) => props.theme.colors.base.gray_200};
    
    img {
        height: 100%;
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
    }
`