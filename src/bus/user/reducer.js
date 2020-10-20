import { types } from './types';

const initialState = {
    data: {},
    isFetching: false,
    error: null,
}

export const userReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case types.USER_START_FETCHING:
            return {
                ...state,
                isFetching: true,
            };
        case types.USER_STOP_FETCHING:
            return {
                ...state,
                isFetching: false,
            };
        case types.USER_SET_FETCHING_ERROR:
            return {
                ...state,
                error: payload,
                data: null,
            };
        case types.USER_NEW_USER:
            return {
                ...state,
                data: payload,
                error: null,
            };
        case types.USER_LOGIN:
            return {
                ...state,
                data: payload,
                error: null,
            };
        case types.USER_VIEW:
            return {
                ...state,
                data: payload,
                error: null,
            };
        case types.USER_UPDATE:
            return {
                ...state,
                data: payload,
                error: null,
            };
        case types.USER_LOGOUT:
            return {
                data: null,
                error: null,
                isFetching: false,
            };

        default:
            return state;
    }
}