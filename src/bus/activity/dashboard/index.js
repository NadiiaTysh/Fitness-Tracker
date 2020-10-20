import React from 'react';

import Styles from './styles/index.module.scss';

import { useDashboard } from './hooks/useDashboard';
import { Sidebar } from '../components/sidebar/index';
import { Header } from '../components/header/index';
import { QuestionList } from '../components/questionList/index';
import { Widget } from '../components/widget/index';

export const Dashboard = () => {
  const {
    dataReceived,
    data,
    handleLogout,
  } = useDashboard();
  return (
    <section className={Styles.dashboard}>
      <Sidebar dataReceived={dataReceived} data={data} />
      <div className={Styles.wrap}>
        <Header handleLogout={handleLogout} data={data} dataReceived={dataReceived} />
        <div className={Styles.content}>
          <QuestionList />
          <Widget />
        </div>
      </div>
    </section>
  )
};
