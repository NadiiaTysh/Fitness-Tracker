import React from 'react';
import cx from 'classnames';

export const SelectButton = ({meta, setFieldValue, ...props}) => {
    const genderArray = [{sex: 'female', short: 'f', name: 'Женщина'}, {sex: 'male', short: 'm', name: 'Мужчина'}];

    const handleClick = (gender) => {
        setFieldValue("sex", gender);
    };

    const buttonJsx = genderArray.map((item) => {
        const buttonGender = cx([(props.male.includes(item.sex) ? props.male : props.female), (meta.value.sex === item.short) ? props.selected : '']);

        return (
            <div key={item.short} className={buttonGender} onClick={()=>handleClick(item.short)}>
                <span>{item.name}</span>
            </div>
        )
    });

    return (
        <>
        <div className={props.className}>
            {buttonJsx}
        </div>
        {(meta.touched || meta.error.sex) && (<p className={props.error}>{meta.error.sex}</p>)}
        </>
    )
}