import { ChangeEvent } from "react";

interface TextInputProps {
    label?: string;
    type?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    disabled?: boolean;
}

export default TextInputProps;