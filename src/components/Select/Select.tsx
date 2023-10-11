import { SelectHTMLAttributes } from "react";
import { SelectContainer } from "./Select.styles";

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {}

export function Select({ ...rest }: ISelectProps) {
    return (
        <SelectContainer {...rest} />
    )
}
