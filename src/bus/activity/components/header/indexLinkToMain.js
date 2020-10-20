import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import Styles from './styles/index.module.scss';

export const Header = ({handleClick, handleLogout, data, dataReceived}) => {
    return (
        <div className={Styles.header}>
        <Link to="/" className={Styles.homeLink}>На главную</Link>
        {dataReceived() && <div className={cx([Styles.avatar, (data.sex === 'm') ? Styles.male : Styles.female])}>
          <div className={Styles.column}>
            {dataReceived() && <Link to="/profile"><span className={Styles.name} onClick={handleClick}>{`${data.fname} ${data.lname}`}</span></Link>}
            <Link to="/login"><button className={Styles.logout} onClick={handleLogout}>Выйти</button></Link>
          </div>
        </div>}
      </div>
    )
}