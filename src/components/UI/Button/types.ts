import { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    type?: "default" | "outline" | "icon";
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
    block?: boolean;
}

export default ButtonProps;