import React from 'react';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';

import Styles from '../styles/index.module.scss';

import { useQuestionList } from '../hooks/useQuestionList';

export const QuestionListJsx = () => {
    const {handleClick} = useQuestionList();

    const description = [
        {linkTo: "breakfast", style: "category1", title: "Добавить завтрак", description: "Хороший завтрак очень важен"},
        {linkTo: "lunch", style: "category2", title: "Добавить обед", description: "Успешные люди обедают"},
        {linkTo: "dinner", style: "category3", title: "Добавить ужин", description: "Лучше не ужинать вообще"},
        {linkTo: "steps", style: "category4", title: "Добавить активность", description: "Пешие прогулки это минимум"},
        {linkTo: "fruits", style: "category5", title: "Добавить фрукты", description: "Фрукты подымают настроение"},
        {linkTo: "vegetables", style: "category6", title: "Добавить овощи", description: "Овощи очень важны"},
        {linkTo: "junk", style: "category7", title: "Добавить фастфуд", description: "Эта еда очень вредная"},
        {linkTo: "water", style: "category8", title: "Добавить воду", description: "Вода это жизнь"},
        {linkTo: "sleep", style: "category9", title: "Добавить сон", description: "Спать нужно всем"},
        {linkTo: "coffee", style: "category10", title: "Добавить кофе", description: "Можно и без него"},
      ];

      const questionsJsx = description.map((item, index) => {

          return (
            <NavLink
              key={index}
              to={`/${item.linkTo}`}
              className={cx([Styles.link, Styles[item.style]])}
              onClick={() => handleClick(item.linkTo)}
            >
              <span className={Styles.title}>{item.title}</span>
              <span className={Styles.description}>{item.description}</span>
            </NavLink>
          );
      });

    return (
        <>
            {questionsJsx}
        </>
    )
};