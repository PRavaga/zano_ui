import { ReactNode } from "react";

interface TitleProps {
    children: ReactNode;    
    className?: string;
    align?: "left" | "center" | "right"
}

export default TitleProps;