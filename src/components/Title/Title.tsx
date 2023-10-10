import React from "react";
import { TitleContainer } from "./Title.styles";

interface ITitleProps {
    name: string;
}

export default function Title({ name }: ITitleProps) {
    return (
        <TitleContainer>{name}</TitleContainer>
    )
}
