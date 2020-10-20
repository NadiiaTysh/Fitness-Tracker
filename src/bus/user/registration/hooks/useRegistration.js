import { useDispatch, batch } from 'react-redux';
import { useFormik } from 'formik';
import { push } from 'connected-react-router';

import { initialValues } from './initialValues';
import { validationSchema } from './validationSchema';

import { userActions } from '../../actions';

export const useRegistration = () => {
    const dispatch = useDispatch();

    const {
        handleSubmit,
        getFieldProps,
        getFieldMeta,
        dirty,
        isValid,
        setFieldValue,
        resetForm,
    } = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            batch(() => {
                dispatch(userActions.addUserFetch(values));
                dispatch(push('/login'));
            })
        },
    });

return {
        handleSubmit,
        getFieldProps,
        getFieldMeta,
        dirty,
        isValid,
        setFieldValue,
        resetForm,
        initialValues
    }
}