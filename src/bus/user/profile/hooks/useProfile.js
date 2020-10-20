import { useEffect } from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';

import { validationSchema } from '../../registration/hooks/validationSchema';
import { initialValues } from '../../registration/hooks/initialValues';

import { userActions } from '../../actions';
import { activityActions } from '../../../activity/actions';

export const useProfile = () => {
    const dispatch = useDispatch();

    const {isFetching, data} = useSelector(state => state.user);

    const {
        handleSubmit,
        getFieldProps,
        getFieldMeta,
        dirty,
        isValid,
        setFieldValue,
        resetForm,
        setValues,
        values
    } = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            dispatch(userActions.updateUserFetch(values));
        },
    });

    useEffect(() => (function() {
        !isFetching && data && setValues({
            'fname': data.fname,
            'lname': data.lname,
            'password': '',
            'email': data.email,
            'sex': data.sex,
            'age': data.age,
            'height': data.height,
            'weight': data.weight},
            true)
        })(), [isFetching, data]);

    const handleLogout = () => {
        dispatch(userActions.logoutUserFetch());
    };

    const handleClearRecords = () => {
        batch(() => {
            dispatch(activityActions.clearActivityReportFetch());
            dispatch(activityActions.getActivityReportFetch());
        })
    };

    return {
        handleSubmit,
        getFieldProps,
        getFieldMeta,
        dirty,
        isValid,
        setFieldValue,
        resetForm,
        handleLogout,
        values,
        handleClearRecords,
    }
}