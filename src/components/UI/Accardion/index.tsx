import React from 'react';
import styles from "./styles.module.scss";
import AccardionProps from './types';
import PlusIcon from "@/assets/plus.svg";

// Accordion component
const Accardion = ({title, body, isActive, onOpen}: AccardionProps) => {
    return (
        <div onClick={onOpen} className={`${styles.accordion} ${isActive && styles.active}`}>
            <div className={styles.accordion__header}>
                <h5>{title}</h5>    
                <PlusIcon width={24} height={24} /> 
            </div>

            <div className={styles.accordion__body}>
                {body}
            </div>
        </div>
    );
};

export default Accardion;