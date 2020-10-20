import React from 'react';

import Styles from '../dashboard/styles/index.module.scss';

import { useDashboard } from '../dashboard/hooks/useDashboard';
import { Sidebar } from '../components/sidebar/index';
import { Header } from '../components/header/indexLinkToMain';
import { Question2 } from '../components/question2/index';
import { Widget } from '../components/widget/index';

export const Sleep = () => {
  const {
    handleClick,
    dataReceived,
    data,
    handleLogout,
  } = useDashboard();
  return (
    <section className={Styles.dashboard}>
      <Sidebar dataReceived={dataReceived} data={data} />
      <div className={Styles.wrap}>
        <Header handleClick={handleClick} handleLogout={handleLogout} data={data} dataReceived={dataReceived} />
        <div className={Styles.content}>
          <Question2 name="sleep" question="Сколько часов ты сегодня спал?" />
          <Widget />
        </div>
      </div>
    </section>
  )
};