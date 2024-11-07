import React from 'react';
import TextInputProps from './types';
import styles from "./styles.module.scss";

// Custom input component
const TextInput:React.FC<TextInputProps> = ({label, type, onChange, placeholder, disabled = false}) => {
    return (
        <>
            {label && <label className={styles.label}>{label}</label>}
            <input className={styles.input} onChange={onChange} type={type} placeholder={placeholder} disabled={disabled} />
        </>
    );
};

export default TextInput;