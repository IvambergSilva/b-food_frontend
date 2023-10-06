import { ThemeContext } from "styled-components";
import { SwitchContainer } from "./Switch.styles";

import { MoonStar, Sun } from 'lucide-react'
import { useContext } from "react";

interface ISwitchProps {
    onClickToggle(): void;
}

export default function Switch({ onClickToggle }: ISwitchProps) {
    const iconSize = 16

    const { title } = useContext(ThemeContext) || {};

    return (
        <SwitchContainer
            onClick={onClickToggle}
        >
            <div>
                <span>
                    {title === 'light'
                        ? <Sun size={iconSize} />
                        : <MoonStar size={iconSize} />}
                </span>
            </div>
        </SwitchContainer>
    )
}