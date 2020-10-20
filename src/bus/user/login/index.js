import React from 'react';

import Styles from './styles/index.module.scss';

import { useLogin } from './hooks/useLogin';
import { TextInput } from './formComponents/textInput';

export const Login = () => {
  const {
    handleSubmit,
    getFieldProps,
    getFieldMeta,
    dirty,
    isValid,
    error,
  } = useLogin();

  return (
    <section className={Styles.login}>
      <div className={Styles.content}>
        <h1>Добро пожаловать!</h1>
          <form onSubmit={handleSubmit}>
            <TextInput
            label="Электропочта"
            type="email"
            name="email"
            placeholder="Введите свой email"
            meta={getFieldMeta("email")}
            {...getFieldProps("email")}
          />
          <TextInput
            label="Пароль"
            type="password"
            name="password"
            placeholder="Введите свой пароль"
            meta={getFieldMeta("password")}
            {...getFieldProps("password")}
          />
          {error && (<p className={Styles.error}>{error.message}</p>)}
          <button type="submit" disabled={!dirty || !isValid}>Войти в систему</button>
        </form>
      </div>
    </section>
  )
};
