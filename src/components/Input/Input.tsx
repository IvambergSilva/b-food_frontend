import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { InputContainer, TextAreaContainer } from "./Input.styles";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> { }

interface ITextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> { }

export function Input({ ...rest }: IInputProps) {
    return (
        <InputContainer {...rest} />
    )
}

export function TextArea({ ...rest }: ITextAreaProps) {
    return (
        <TextAreaContainer {...rest} />
    )
}
