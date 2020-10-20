import { replace } from 'connected-react-router';

import { api } from '../../api/index';
import { types } from './types';
import { book } from '../../navigation/book';

export const userActions = {
    startFetching: () => {
        return {
            type: types.USER_START_FETCHING,
        }
    },
    stopFetching: () => {
        return {
            type: types.USER_STOP_FETCHING,
        }
    },
    setFetchingError: (error) => {
        return {
            type: types.USER_SET_FETCHING_ERROR,
            payload: error,
            error: true,
        }
    },
    addUser: (payload) => {
        return {
            type: types.USER_NEW_USER,
            payload,
        }
    },
    viewUser: (payload) => {
        return {
            type: types.USER_VIEW,
            payload,
        }
    },
    enterUser: (payload) => {
        return {
            type: types.USER_LOGIN,
            payload,
        }
    },
    editUser:  (payload) => {
        return {
            type: types.USER_UPDATE,
            payload,
        }
    },
    logoutUser: () => {
        return {
            type: types.USER_LOGOUT,
        }
    },

    addUserFetch: (payload) => async(dispatch) => {
        dispatch(userActions.startFetching());

        const response = await api.registartion.createUser(payload);

        if (response.status === 201) {
            const {data} = await response.json();

            dispatch(userActions.addUser(data));
        } else {
            const error = {
                status: response.status,
            };
            dispatch(userActions.setFetchingError(error));
        }
        dispatch(userActions.stopFetching());
    },

    loginUserFetch: (payload) => async(dispatch) => {
        dispatch(userActions.startFetching());

        const response = await api.login.loginUser(payload);

        if (response.status === 200) {
            const {data} = await response.json();

            dispatch(userActions.enterUser(data));
        } else {
            const error = {
                status: response.status,
                message: 'Попробуйте авторизироваться ещё раз!',
            };
            dispatch(userActions.setFetchingError(error));
            dispatch(replace(book.login));
        }
        dispatch(userActions.stopFetching());
    },

    getUserFetch: () => async(dispatch) => {
        dispatch(userActions.startFetching());

        const response = await api.profile.getUser();

        if (response.status === 200) {
            const {data} = await response.json();

            dispatch(userActions.viewUser(data));
        } else {
            const error = {
                status: response.status,
                message: 'Попробуйте авторизироваться ещё раз!',
            };
            dispatch(userActions.setFetchingError(error));
            dispatch(replace(book.login));
        }
        dispatch(userActions.stopFetching());
    },

    updateUserFetch: (payload) => async(dispatch) => {
        dispatch(userActions.startFetching());

        const response = await api.profile.updateUser(payload);

        if (response.status === 200) {
            const {data} = await response.json();

            dispatch(userActions.addUser(data));
        } else {
            const error = {
                status: response.status,
                message: 'Попробуйте авторизироваться ещё раз!',
            };
            dispatch(userActions.setFetchingError(error));
            dispatch(replace(book.login));
        }
        dispatch(userActions.stopFetching());
    },

    logoutUserFetch: () => async(dispatch) => {
        dispatch(userActions.startFetching());

        const response = await api.profile.exitUser();

        if (response.status === 204) {
            dispatch(userActions.logoutUser());
        } else {
            const error = {
                status: response.status,
                message: 'Попробуйте авторизироваться ещё раз!',
            };
            dispatch(userActions.setFetchingError(error));
            dispatch(replace(book.login));
        }
        dispatch(userActions.stopFetching());
    },
}