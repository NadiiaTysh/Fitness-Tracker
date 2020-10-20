import { useEffect } from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';

import { activityActions } from '../../../actions';

export const useQuestion2 = (name) => {
    const dispatch = useDispatch();
    const {isFetching, record} = useSelector(state => state.activity);

    const {
        handleChange,
        handleSubmit,
        setFieldValue,
        getFieldProps,
    } = useFormik({
        initialValues: {
            value: '',
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

    useEffect(() => (function() {
          !isFetching && record && record[name].hash !== 0 &&
            setFieldValue('value', record[name].data, false);
        })(), [isFetching, record]);

    return {
        handleChange,
        handleSubmit,
        getFieldProps,
    }
}