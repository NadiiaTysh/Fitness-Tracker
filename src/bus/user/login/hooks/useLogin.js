import { useDispatch, batch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { push } from 'connected-react-router';

import { initialValues } from './initialValues';
import { validationSchema } from './validationSchema';

import { userActions } from '../../actions';

export const useLogin = () => {
    const dispatch = useDispatch();
    const {error} = useSelector(state => state.user);

    const {
        handleSubmit,
        getFieldProps,
        getFieldMeta,
        dirty,
        isValid,
    } = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            const valuesBase64 = btoa(`${values.email}:${values.password}`);
            batch(() => {
                dispatch(userActions.loginUserFetch(valuesBase64));
                dispatch(userActions.getUserFetch());
                dispatch(push('/'));
            });
        },
    });

return {
        handleSubmit,
        getFieldProps,
        getFieldMeta,
        dirty,
        isValid,
        error,
    }
}