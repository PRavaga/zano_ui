import React from 'react';
import TitleProps from './types';
import styles from "./styles.module.scss";

// Text title component
const Title = ({children, align = "left", className}: TitleProps) => {
    return (
        <h2 style={{textAlign: align}} className={`${styles.title} ${className} ${align == "center" && styles.centered}`}>{children}</h2>
    );
};

export default Title;