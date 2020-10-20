import React from 'react';
import cx from 'classnames';

import Styles from './styles/index.module.scss';

export const Sidebar = ({dataReceived, data}) => {
    return (
        <>
            {dataReceived() && <div className={cx([Styles.sidebar, (data.sex === 'm') ? Styles.male : Styles.female])}></div>}
        </>
    )
}