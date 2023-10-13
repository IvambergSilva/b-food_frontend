import { IconSpin } from "@/components/Button/Button.styles";
import { SecundaryHeading } from "@/styles/variables";
import styled from "styled-components";

interface IRefreshProps {
    active: boolean;
}

export const IconRefresh = styled.button<IRefreshProps>`
        cursor: pointer;
        background: none;
        border: none;
        color: ${(props) => props.theme.colors.base.gray_100};
                
        &:hover {
            transform: scale(1.1);
            transition: 0.3s;
        }

        animation: ${(props) => {
        return props.active ? IconSpin : ''
    }} 1s infinite;
`

export const DashboardContainer = styled.div`
    background: ${(props) => props.theme.colors.base.gray_500};
    height: 100vh;
    
    main {
        max-width: 70rem;
        margin: 5rem auto 0;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .dashboardTitle {
        display: flex;
        align-items: center;
        gap: 2rem;
        margin-bottom: 1rem;
    }

    section {
        border: 1px solid ${(props) => props.theme.colors.pallete.rustyRed};
        border-left-width: 10px;
        border-radius: 1rem;
        width: 100%;
        height: 7rem;
        display: flex;
        align-items: center;
        color: ${(props) => props.theme.colors.base.gray_100};
        padding: 2rem;
        background: ${(props) => props.theme.colors.base.gray_400};
        cursor: pointer;
        
        span {
            font-size: ${SecundaryHeading.size};
        }

        &:active {
            position: relative;
            top: 2px;
        }
    }

    @media screen and (max-width: 768px) {
        main {
            width: 90%;
        }
    }

`
