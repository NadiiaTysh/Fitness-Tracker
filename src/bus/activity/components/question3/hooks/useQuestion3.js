import React from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';

import cx from 'classnames';

import Styles from '../styles/index.module.scss';
import { activityActions } from '../../../actions';

export const useQuestion3 = (name, quantity, capacity) => {
    const dispatch = useDispatch();
    const {isFetching, record} = useSelector(state => state.activity);

    const handleClick = (number) => {
        setFieldValue('value', number);
    };

    let selectedCapacity;

    if (!isFetching && record && record[name].hash !== 0) {
        selectedCapacity = record[name].data;
    };

    const {
        handleSubmit,
        setFieldValue,
        values,
    } = useFormik({
        initialValues: {
            value: selectedCapacity,
        },
        onSubmit: (values) => {
            const nameCapitalized = name.substring(0, 1).toUpperCase() + name.substring(1);

            if (!isFetching && !record[name].hash) {
                batch(() => {
                    dispatch(activityActions[`addActivity${nameCapitalized}Fetch`](values, name));
                    dispatch(activityActions[`getActivity${nameCapitalized}Fetch`](name));
                    dispatch(activityActions.getActivityReportFetch());
                })
            } 
            else if (!isFetching && record[name].data !== values.value) {
                batch(() => {
                    dispatch(activityActions[`updateActivity${nameCapitalized}Fetch`](values, record[name].hash, name));
                    dispatch(activityActions[`getActivity${nameCapitalized}Fetch`](name));
                    dispatch(activityActions.getActivityReportFetch());
                })
            }
        }
    });

    const amount = !values.value ? 0 : values.value * Number(capacity);
    const buttonArray = Array.from(Array(Number(quantity)).keys());;

    const answersJsx = buttonArray.map((item, index) => {
        const currentGlass = item + 1;
        const styled = cx([Styles.element, item < values.value ? Styles.selected : '']);

        return (
          <button type="button" key={index} className={styled} onClick={() => handleClick(currentGlass)} />
        )
    });

    return {
        amount,
        handleSubmit,
        answersJsx,
    }
}