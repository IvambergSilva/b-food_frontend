import { ButtonHTMLAttributes } from "react";
import { Loader2 } from 'lucide-react'
import { ButtonContainer } from "./Button.styles";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    name: string
    loading?: boolean
}

export default function Button({ name, loading, ...rest }: IButtonProps) {
    return (
        <ButtonContainer
            disabled={loading}
            {...rest}
        >
            <p>
                {loading ? (<Loader2 />) : (<>{name}</>)}
            </p>
        </ButtonContainer>
    )
}
