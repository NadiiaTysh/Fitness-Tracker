import React from 'react';
import Styles from '../styles/index.module.scss';

export const TextInput = ({label, meta, ...props}) => {

    return (
        <>
            <div className={Styles.inputRow}>
                <label htmlFor={props.id || props.name}>{label}</label>
                <input {...props} />
            </div>
            {(meta.touched || meta.error) && (<p className={Styles.error}>{meta.error}</p>)}
        </>
    )
}