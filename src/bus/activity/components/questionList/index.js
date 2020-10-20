import React from 'react';
import Styles from './styles/index.module.scss';

import { QuestionListJsx } from './component/questionListJsx';

export const QuestionList = () => {
  return (
    <div className={Styles.navigation}>
      <h1>Как у тебя проходит день?</h1>
      <div className={Styles.items}>
        <QuestionListJsx />
      </div>
    </div>
  );
};