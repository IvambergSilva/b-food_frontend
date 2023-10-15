import styled from "styled-components";

export const CategoryContainer = styled.div`
    height: 100vh;
    background: ${(props) => props.theme.colors.base.gray_500};
    
    .categoryMain {
        padding: 3.5rem 0;
        display: flex;
        flex-direction: column;
        margin: auto;
        max-width: 70rem;
        width: 90%;
        gap: 2.5rem;
        
        .categoryForm {
            width: 100%;
            display: flex;
            gap: 2rem;
            flex-direction: column;
        }
    }
`