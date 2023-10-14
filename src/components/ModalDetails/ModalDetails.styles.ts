import { DarkMode, Description, Paragraph, TertiaryHeading } from "@/styles/variables";
import styled from "styled-components";

export const ModalContainer = styled.article`
    color: ${(props) => props.theme.colors.base.gray_100};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid ${(props) => props.theme.colors.pallete.rustyRed};
    width: 60%;
    padding: 3.5rem;
    border-radius: 1rem;
    background: ${DarkMode.colors.base.gray_400};
    
    header {
        position: relative;
        button {
            position: absolute;
            right: 0;
            top: 0;
            background: none;
            border: none;
            color: ${(props) => props.theme.colors.pallete.rustyRed};
            cursor: pointer;
            
            &:hover {
                transform: scale(1.2);
                transition: 0.3s;
            } 
        }
    }

    h1 {
        color: ${DarkMode.colors.base.gray_100};
    }

    h2 {
        font-size: ${TertiaryHeading.size};
        margin-top: 2rem;
        color: ${(props) => props.theme.colors.pallete.lightMustard};
    }

    main {
        margin-top: 2rem;
        
        ul {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            width: 100%;
            
            li {
                list-style-type: none;
                display: flex;
                flex-direction: column;
                gap: 1rem;
                
                p {
                    font-size: ${Paragraph.size};
                    font-weight: ${Paragraph.weight};
                    color: ${(props) => props.theme.colors.pallete.brightOrange};
                    word-wrap: break-word;
                }

                span {
                    font-size: ${Description.size};
                    font-style: italic;
                    word-wrap: break-word;
                    color: ${DarkMode.colors.base.gray_100};
                }
            }
        }   
    }
`