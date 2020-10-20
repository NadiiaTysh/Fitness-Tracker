import React from 'react';

import Styles from './styles/index.module.scss';

import { useRegistration } from './hooks/useRegistration';
import { TextInput } from '../formComponents/textInput';
import { SelectButton } from '../formComponents/selectButton';

export const Registration = () => {
  const {
    handleSubmit,
    getFieldProps,
    getFieldMeta,
    dirty,
    isValid,
    setFieldValue,
    resetForm,
    initialValues,
  } = useRegistration();

  return (
    <section className={Styles.registration}>
      <div className={Styles.left}>
        <form onSubmit={handleSubmit}>
          <div className={Styles.content}>
            <h1>Регистрация</h1>
            <SelectButton
              meta={getFieldMeta()}
              {...getFieldProps()}
              setFieldValue={setFieldValue}
              className={Styles.gender}
              error={Styles.error}
              male={Styles.male}
              female={Styles.female}
              selected={Styles.selected}
            />
            <TextInput
              label="Электропочта"
              type="email"
              name="email"
              placeholder="Введите свой email"
              meta={getFieldMeta("email")}
              {...getFieldProps("email")}
              className={Styles.inputRow}
              error={Styles.error}
            />
            <TextInput
              label="Имя"
              type="text"
              name="fname"
              placeholder="Введите свое имя"
              meta={getFieldMeta("fname")}
              {...getFieldProps("fname")}
              className={Styles.inputRow}
              error={Styles.error}
            />
            <TextInput
              label="Фамилия"
              type="text"
              name="lname"
              placeholder="Введите свою фамилию"
              meta={getFieldMeta("lname")}
              {...getFieldProps("lname")}
              className={Styles.inputRow}
              error={Styles.error}
            />
            <TextInput
              label="Пароль"
              type="password"
              name="password"
              placeholder="Введите свой пароль"
              meta={getFieldMeta("password")}
              {...getFieldProps("password")}
              className={Styles.inputRow}
              error={Styles.error}
            />
            <TextInput
              label="Возраст"
              type="number"
              name="age"
              placeholder="Введите свой возраст"
              meta={getFieldMeta("age")}
              {...getFieldProps("age")}
              className={Styles.inputRow}
              error={Styles.error}
            />
            <TextInput
              label="Рост"
              type="number"
              name="height"
              placeholder="Введите свой рост"
              meta={getFieldMeta("height")}
              {...getFieldProps("height")}
              className={Styles.inputRow}
              error={Styles.error}
            />
            <TextInput
              label="Вес"
              type="number"
              name="weight"
              placeholder="Введите свой вес"
              meta={getFieldMeta("weight")}
              {...getFieldProps("weight")}
              className={Styles.inputRow}
              error={Styles.error}
            />
            <div className={Styles.controls}>
              <button
                onClick={() => resetForm(initialValues)}
                className={Styles.clearData}
                disabled={!dirty || !isValid}
              >
                Сбросить
              </button>
              <button
                type="submit"
                disabled={!dirty || !isValid}
              >
                Зарегистрироваться
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className={Styles.right}></div>
    </section>
  );
};
