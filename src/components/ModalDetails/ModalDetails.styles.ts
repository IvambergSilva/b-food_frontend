import { DarkMode, Description, LightMode, Paragraph, TertiaryHeading } from "@/styles/variables";
import styled from "styled-components";

export const ModalContainer = styled.article`
    color: ${(props) => props.theme.colors.base.gray_100};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid ${(props) => props.theme.colors.pallete.rustyRed};
    width: 70%;
    padding: 3.5rem;
    border-radius: 1rem;
    background: ${DarkMode.colors.base.gray_400};
    
    .modalHeader {
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

    h2 {
        font-size: ${TertiaryHeading.size};
        margin-top: 2rem;
        color: ${(props) => props.theme.colors.pallete.lightMustard};
        text-align: center;
    }

    .modalDetailsContent {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        
        .tableContainer {
            width: 60%;
            display: flex;
            flex-direction: column;
            gap: 2rem;
            margin: auto;

            table {
                width: 100%;
                border-collapse: collapse;
                border-radius: 0.5rem;
            }
            
            thead {
                border-radius: 0.5rem 0.5rem 0 0;
                background: ${LightMode.colors.pallete.success};
                width: 100%;
                display: grid;
                grid-template-columns: 50% 50%;
                height: 3rem;
                align-items: center;
                font-size: ${Paragraph.size};
                
                th {
                    color: ${DarkMode.colors.base.gray_100};
                    width: 100%;
                    text-align: center;
                }
            }
            
            tbody {
                tr {
                    width: 100%;
                    display: grid;
                    grid-template-columns: 50% 50%;
                    border: 1px solid ${LightMode.colors.pallete.success};
                    
                    &:nth-child(even) {
                        background: ${DarkMode.colors.base.gray_400};
                        color: ${DarkMode.colors.base.gray_100};
                    }
                    
                    &:nth-child(odd) {
                        background: ${DarkMode.colors.base.gray_300};
                        color: ${DarkMode.colors.base.gray_200};
                    }
                    
                    &:last-child {
                        border-radius: 0 0 0.5rem 0.5rem;
                    }
                    
                    td, span {
                        font-size: ${Paragraph.size};
                        height: 2.5rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        &:nth-child(3) {
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                        }
                    }
                }
            }
        }
    }
`