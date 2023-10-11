import { PrimaryHeading } from "@/styles/variables";
import styled from "styled-components";

export const TitleContainer = styled.h1`
    font-size: ${PrimaryHeading.size};
    font-weight: ${PrimaryHeading.weight};
    color: ${(props) => props.theme.colors.base.gray_100};
    font-size: 2.5rem;
    margin: 3rem 0 0.5rem;
`
