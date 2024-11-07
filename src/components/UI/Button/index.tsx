import React from 'react';
import styles from "./styles.module.scss";
import ButtonProps from './types';

// Button component (default, icon, outlined)
const Button = ({children, className, type = "default", onClick, block = false}: ButtonProps) => {
    return (
        <button onClick={onClick} className={` ${className} ${styles.btn} ${type == "outline" && styles.outlined} ${type == "icon" && styles.icon} ${block && styles.block}`}>{children}</button>
    );
};

export default Button;