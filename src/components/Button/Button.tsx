import { ButtonHTMLAttributes } from "react";
import { Loader2 } from 'lucide-react'
import { ButtonContainer } from "./Button.styles";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    name: string
    loading?: boolean
    model?: string 
}

export default function Button({ name, loading, model, ...rest }: IButtonProps) {
    return (
        <ButtonContainer
            disabled={loading}
            model={model}
            {...rest}
        >
            <p>
                {loading ? (<Loader2 />) : (<>{name}</>)}
            </p>
        </ButtonContainer>
    )
}
