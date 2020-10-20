import React from 'react';

import Styles from './styles/index.module.scss';

import { useQuestion2 } from './hooks/useQuestion2';

export const Question2 = ({name, question}) => {
  const {
    handleChange,
    handleSubmit,
    getFieldProps,
  } = useQuestion2(name);

  return (
    <div className={Styles.question}>
      <form onSubmit={handleSubmit}>
        <h1>{question}</h1>
        <div className={Styles.inputRow}>
          <input
            type="number"
            name="value"
            placeholder="Введите свое число"
            onChange={handleChange}
            {...getFieldProps("value")}
          />
        </div>
        <button className={Styles.sendAnswer}>Ответить</button>
      </form>
    </div>
  );
};
