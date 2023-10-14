import { IconSpin } from "@/components/Button/Button.styles";
import { Paragraph, SecundaryHeading } from "@/styles/variables";
import styled from "styled-components";

interface IRefreshProps {
    status: boolean;
}

export const IconRefresh = styled.button<IRefreshProps>`
        cursor: pointer;
        background: none;
        border: none;
        color: ${(props) => props.theme.colors.pallete.success};
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
            transform: scale(1.1);
            transition: 0.3s;
        }

        animation: ${(props) => {
        return props.status ? IconSpin : ''
    }} 1s linear infinite;
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

        h2 {
            color: ${(props) => props.theme.colors.pallete.brightOrange};
            font-size: ${Paragraph.size};
            font-style: italic;
        }
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

    z-index: 1;
`

export const ModalContent = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    
    .modalBG {
        background: ${(props) => props.theme.colors.base.gray_200};
        width: 100%;
        opacity: 0.9;
        height: 100vh;
        position: absolute;
    }
`