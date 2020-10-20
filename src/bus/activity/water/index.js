import React from 'react';

import Styles from '../dashboard/styles/index.module.scss';

import { useDashboard } from '../dashboard/hooks/useDashboard';
import { Sidebar } from '../components/sidebar/index';
import { Header } from '../components/header/indexLinkToMain';
import { Question3 } from '../components/question3/index';
import { Widget } from '../components/widget/index';

export const Water = () => {
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
        <Header
          handleClick={handleClick}
          handleLogout={handleLogout}
          data={data}
          dataReceived={dataReceived}
        />
        <div className={Styles.content}>
          <Question3
            name="water"
            label="Сколько воды ты сегодня выпил?"
            quantity="13"
            capacity="250"
          />
          <Widget />
        </div>
      </div>
    </section>
  );
};