import React from 'react';

import Styles from './styles/index.module.scss';
import { useQuestion3 } from './hooks/useQuestion3';

export const Question3 = ({name, label, quantity, capacity}) => {
  const {
    amount,
    handleSubmit,
    answersJsx,
  } = useQuestion3(name, quantity, capacity);

  return (
    <div className={Styles.question}>
    <h1>{label}</h1>
    <form onSubmit={handleSubmit}>
      <div className={Styles.elements}>
        {answersJsx}
        <span className={Styles.size}>{amount} мл</span>
      </div>
      <button className={Styles.sendAnswer}>Ответить</button>
    </form>
    </div>
  )
};
