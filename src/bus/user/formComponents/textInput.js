import React from 'react';

export const TextInput = ({label, meta, ...props}) => {

    return (
        <>
            <div className={props.className}>
                <label htmlFor={props.id || props.name}>{label}</label>
                <input {...props} />
            </div>
            {(meta.touched || meta.error) && (<p className={props.error}>{meta.error}</p>)}
        </>
    )
}