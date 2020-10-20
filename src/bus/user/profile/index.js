import React from 'react';
import { Link } from 'react-router-dom';

import cx from 'classnames';

import Styles from './styles/index.module.scss';

import { useProfile } from './hooks/useProfile';
import { TextInput } from '../formComponents/textInput';
import { SelectButton } from '../formComponents/selectButton';

export const Profile = () => {
  const {
    handleSubmit,
    getFieldProps,
    getFieldMeta,
    dirty,
    isValid,
    setFieldValue,
    resetForm,
    values,
    handleLogout,
    handleClearRecords,
  } = useProfile();

  return (
    <section className={Styles.profile}>
      <div className={cx([Styles.sidebar, (values.sex === 'm') ? Styles.male : Styles.female])}></div>
      <div className={Styles.wrap}>
        <div className={Styles.header}>
          <Link to="/" className={Styles.homeLink}>На главную</Link>
          <div className={cx([Styles.avatar, (values.sex === 'm') ? Styles.male : Styles.female])}>
            <div className={Styles.column}>
              <Link to="/profile" className={Styles.profileLink}><span className={Styles.name}>{`${values.fname} ${values.lname}`}</span></Link>
              <Link to="/login"><button className={Styles.logout} onClick={handleLogout}>Выйти</button></Link>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={Styles.content}>
            <h1>Профиль</h1>
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
                onClick={() => resetForm(values)}
                className={Styles.clearData}
                disabled={!dirty || !isValid}
              >
                Сбросить
              </button>
              <button
                type="submit"
                disabled={!dirty || !isValid}
              >
                Обновить профиль
              </button>
            </div>
          </div>
        </form> 
      </div>
      <button className={Styles.clearAllRecords} onClick={handleClearRecords}>Очистить все данные</button>
    </section>
  )
};
