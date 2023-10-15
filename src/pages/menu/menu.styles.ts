import { DarkMode, LightMode, Paragraph, TertiaryHeading } from "@/styles/variables";
import styled from "styled-components";

export const MenuContainer = styled.div`
    background: ${(props) => props.theme.colors.base.gray_500};
    min-height: 100vh;

    .mainContent {
        max-width: 70rem;
        width: 90%;
        gap: 2.5rem;
        padding: 3.5rem 0;
        margin: auto;
        display: flex;
        flex-direction: column;

        .menuTitle {
            display: flex;
            align-items: center;
            gap: 2rem;
        }
        
        h2, h3 {
            color: ${DarkMode.colors.highlight.sereneIndigo};
            font-size: ${TertiaryHeading.size};
        }
        
        h2, p {
            font-style: italic;
        }

        p {
            font-size: ${Paragraph.size};
            font-weight: ${Paragraph.weight};
            margin-top: 0.5rem;
            color: ${DarkMode.colors.pallete.rustyRed};
        }

        .tableContainer {
            width: 100%;
            display: flex;
            flex-direction: column;
            margin: 1.5rem auto 0;

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
                grid-template-columns: 10% 40% 20% 30%;
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
                    grid-template-columns: 10% 40% 20% 30%;
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
                            padding: 0 1rem;
                        }
                    }
                }
            }
        }
    }
`