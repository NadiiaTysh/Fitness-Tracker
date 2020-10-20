import React from 'react';

import Styles from '../dashboard/styles/index.module.scss';

import { useDashboard } from '../dashboard/hooks/useDashboard';
import { Sidebar } from '../components/sidebar/index';
import { Header } from '../components/header/indexLinkToMain';
import { Question1 } from '../components/question1/index';
import { Widget } from '../components/widget/index';

export const Coffee = () => {
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
          <Question1
            label="Ты сегодня пил кофе?"
            name="coffee"
            options={[
              {value: "none", name: "Я не пил совсем"},
              {value: "light", name: "Выпил 1 стакан"},
              {value: "heavy", name: "Выпил 2 или больше стаканов"}
            ]}
          />
          <Widget />
        </div>
      </div>
    </section>
  )
};
