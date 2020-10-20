import React from 'react';

import Styles from './styles/index.module.scss';
import { useQuestion1 } from './hooks/useQuestion1';

export const Question1 = ({label, name, options}) => {
  const {
    handleSubmit,
    answersJsx,
  } = useQuestion1(name, options);

  return (
    <div className={Styles.question}>
    <h1>{label}</h1>
    <form onSubmit={handleSubmit}>
      <div className={Styles.answers}>
        {answersJsx}
      </div>
      <button type="submit" className={Styles.sendAnswer}>Ответить</button>
    </form>
    </div>
  )
};
