import { replace } from 'connected-react-router';

import { api } from '../../api/index';
import { types } from './types';
import { book } from '../../navigation/book';

export const activityActions = {
    startFetching: () => {
        return {
            type: types.ACTIVITY_START_FETCHING,
        }
    },
    stopFetching: () => {
        return {
            type: types.ACTIVITY_STOP_FETCHING,
        }
    },
    setFetchingError: (error) => {
        return {
            type: types.ACTIVITY_SET_FETCHING_ERROR,
            payload: error,
            error: true,
        }
    },

    addActivityBreakfast: (payload) => {
        return {
            type: types.ACTIVITY_ADD_BREAKFAST,
            payload,
        }
    },
    addActivityCoffee: (payload) => {
        return {
            type: types.ACTIVITY_ADD_COFFEE,
            payload,
        }
    },
    addActivityDinner: (payload) => {
        return {
            type: types.ACTIVITY_ADD_DINNER,
            payload,
        }
    },
    addActivityFruits: (payload) => {
        return {
            type: types.ACTIVITY_ADD_FRUITS,
            payload,
        }
    },
    addActivityJunk: (payload) => {
        return {
            type: types.ACTIVITY_ADD_JUNK,
            payload,
        }
    },
    addActivityLunch: (payload) => {
        return {
            type: types.ACTIVITY_ADD_LUNCH,
            payload,
        }
    },
    addActivitySleep: (payload) => {
        return {
            type: types.ACTIVITY_ADD_SLEEP,
            payload,
        }
    },
    addActivitySteps: (payload) => {
        return {
            type: types.ACTIVITY_ADD_STEPS,
            payload,
        }
    },
    addActivityVegetables: (payload) => {
        return {
            type: types.ACTIVITY_ADD_VEGETABLES,
            payload,
        }
    },
    addActivityWater: (payload) => {
        return {
            type: types.ACTIVITY_ADD_WATER,
            payload,
        }
    },

    getActivityBreakfast: (payload) => {
        return {
            type: types.ACTIVITY_GET_BREAKFAST,
            payload,
        }
    },
    getActivityCoffee: (payload) => {
        return {
            type: types.ACTIVITY_GET_COFFEE,
            payload,
        }
    },
    getActivityDinner: (payload) => {
        return {
            type: types.ACTIVITY_GET_DINNER,
            payload,
        }
    },
    getActivityFruits: (payload) => {
        return {
            type: types.ACTIVITY_GET_FRUITS,
            payload,
        }
    },
    getActivityJunk: (payload) => {
        return {
            type: types.ACTIVITY_GET_JUNK,
            payload,
        }
    },
    getActivityLunch: (payload) => {
        return {
            type: types.ACTIVITY_GET_LUNCH,
            payload,
        }
    },
    getActivitySleep: (payload) => {
        return {
            type: types.ACTIVITY_GET_SLEEP,
            payload,
        }
    },
    getActivitySteps: (payload) => {
        return {
            type: types.ACTIVITY_GET_STEPS,
            payload,
        }
    },
    getActivityVegetables: (payload) => {
        return {
            type: types.ACTIVITY_GET_VEGETABLES,
            payload,
        }
    },
    getActivityWater: (payload) => {
        return {
            type: types.ACTIVITY_GET_WATER,
            payload,
        }
    },

    updateActivityBreakfast: () => {
        return {
            type: types.ACTIVITY_UPDATE_BREAKFAST,
        }
    },
    updateActivityCoffee: () => {
        return {
            type: types.ACTIVITY_UPDATE_COFFEE,
        }
    },
    updateActivityDinner: () => {
        return {
            type: types.ACTIVITY_UPDATE_DINNER,
        }
    },
    updateActivityFruits: () => {
        return {
            type: types.ACTIVITY_UPDATE_FRUITS,
        }
    },
    updateActivityJunk: () => {
        return {
            type: types.ACTIVITY_UPDATE_JUNK,
        }
    },
    updateActivityLunch: () => {
        return {
            type: types.ACTIVITY_UPDATE_LUNCH,
        }
    },
    updateActivitySleep: () => {
        return {
            type: types.ACTIVITY_UPDATE_SLEEP,
        }
    },
    updateActivitySteps: () => {
        return {
            type: types.ACTIVITY_UPDATE_STEPS,
        }
    },
    updateActivityVegetables: () => {
        return {
            type: types.ACTIVITY_UPDATE_VEGETABLES,
        }
    },
    updateActivityWater: () => {
        return {
            type: types.ACTIVITY_UPDATE_WATER,
        }
    },

    getActivityReport: (payload) => {
        return {
            type: types.ACTIVITY_GET_RECORDS,
            payload,
        }
    },
    clearActivityReport: () => {
        return {
            type: types.ACTIVITY_CLEAR_RECORDS,
        }
    },

    addActivityBreakfastFetch: (payload, kind) => async(dispatch) => {
        dispatch(activityActions.startFetching());

        const response = await api.dashboard.addRecords(payload, kind);

        if (response.status === 201) {
            const {data} = await response.json();

            dispatch(activityActions.addActivityBreakfast(data));
        } else {
            const error = {
                status: response.status,
                message: 'Попробуйте авторизироваться ещё раз!',
            };
            dispatch(activityActions.setFetchingError(error));
            dispatch(replace(book.login));
        }
        dispatch(activityActions.stopFetching());
    },

    addActivityCoffeeFetch: (payload, kind) => async(dispatch) => {
        dispatch(activityActions.startFetching());

        const response = await api.dashboard.addRecords(payload, kind);

        if (response.status === 201) {
            const {data} = await response.json();

            dispatch(activityActions.addActivityCoffee(data));
        } else {
            const error = {
                status: response.status,
                message: 'Попробуйте авторизироваться ещё раз!',
            };
            dispatch(activityActions.setFetchingError(error));
            dispatch(replace(book.login));
        }
        dispatch(activityActions.stopFetching());
    },

    addActivityDinnerFetch: (payload, kind) => async(dispatch) => {
        dispatch(activityActions.startFetching());

        const response = await api.dashboard.addRecords(payload, kind);

        if (response.status === 201) {
            const {data} = await response.json();

            dispatch(activityActions.addActivityDinner(data));
        } else {
            const error = {
                status: response.status,
                message: 'Попробуйте авторизироваться ещё раз!',
            };
            dispatch(activityActions.setFetchingError(error));
            dispatch(replace(book.login));
        }
        dispatch(activityActions.stopFetching());
    },
    
    addActivityFruitsFetch: (payload, kind) => async(dispatch) => {
        dispatch(activityActions.startFetching());

        const response = await api.dashboard.addRecords(payload, kind);

        if (response.status === 201) {
            const {data} = await response.json();

            dispatch(activityActions.addActivityFruits(data));
        } else {
            const error = {
                status: response.status,
                message: 'Попробуйте авторизироваться ещё раз!',
            };
            dispatch(activityActions.setFetchingError(error));
            dispatch(replace(book.login));
        }
        dispatch(activityActions.stopFetching());
    },

    addActivityJunkFetch: (payload, kind) => async(dispatch) => {
        dispatch(activityActions.startFetching());

        const response = await api.dashboard.addRecords(payload, kind);

        if (response.status === 201) {
            const {data} = await response.json();

            dispatch(activityActions.addActivityJunk(data));
        } else {
            const error = {
                status: response.status,
                message: 'Попробуйте авторизироваться ещё раз!',
            };
            dispatch(activityActions.setFetchingError(error));
            dispatch(replace(book.login));
        }
        dispatch(activityActions.stopFetching());
    },

    addActivityLunchFetch: (payload, kind) => async(dispatch) => {
        dispatch(activityActions.startFetching());

        const response = await api.dashboard.addRecords(payload, kind);

        if (response.status === 201) {
            const {data} = await response.json();

            dispatch(activityActions.addActivityLunch(data));
        } else {
            const error = {
                status: response.status,
                message: 'Попробуйте авторизироваться ещё раз!',
            };
            dispatch(activityActions.setFetchingError(error));
            dispatch(replace(book.login));
        }
        dispatch(activityActions.stopFetching());
    },

    addActivitySleepFetch: (payload, kind) => async(dispatch) => {
        dispatch(activityActions.startFetching());

        const response = await api.dashboard.addRecords(payload, kind);

        if (response.status === 201) {
            const {data} = await response.json();

            dispatch(activityActions.addActivitySleep(data));
        } else {
            const error = {
                status: response.status,
                message: 'Попробуйте авторизироваться ещё раз!',
            };
            dispatch(activityActions.setFetchingError(error));
            dispatch(replace(book.login));
        }
        dispatch(activityActions.stopFetching());
    },

    addActivityStepsFetch: (payload, kind) => async(dispatch) => {
        dispatch(activityActions.startFetching());

        const response = await api.dashboard.addRecords(payload, kind);

        if (response.status === 201) {
            const {data} = await response.json();

            dispatch(activityActions.addActivitySteps(data));
        } else {
            const error = {
                status: response.status,
                message: 'Попробуйте авторизироваться ещё раз!',
            };
            dispatch(activityActions.setFetchingError(error));
            dispatch(replace(book.login));
        }
        dispatch(activityActions.stopFetching());
    },

    addActivityVegetablesFetch: (payload, kind) => async(dispatch) => {
        dispatch(activityActions.startFetching());

        const response = await api.dashboard.addRecords(payload, kind);

        if (response.status === 201) {
            const {data} = await response.json();

            dispatch(activityActions.addActivityVegetables(data));
        } else {
            const error = {
                status: response.status,
                message: 'Попробуйте авторизироваться ещё раз!',
            };
            dispatch(activityActions.setFetchingError(error));
            dispatch(replace(book.login));
        }
        dispatch(activityActions.stopFetching());
    },

    addActivityWaterFetch: (payload, kind) => async(dispatch) => {
        dispatch(activityActions.startFetching());

        const response = await api.dashboard.addRecords(payload, kind);

        if (response.status === 201) {
            const {data} = await response.json();

            dispatch(activityActions.addActivityWater(data));
        } else {
            const error = {
                status: response.status,
                message: 'Попробуйте авторизироваться ещё раз!',
            };
            dispatch(activityActions.setFetchingError(error));
            dispatch(replace(book.login));
        }
        dispatch(activityActions.stopFetching());
    },

    getActivityBreakfastFetch: (kind) => async(dispatch) => {
        dispatch(activityActions.startFetching());

        const response = await api.dashboard.getRecords(kind);

        if (response.status === 200) {
            const data = await response.json();

            dispatch(activityActions.getActivityBreakfast(data));
        } else {
            const error = {
                status: response.status,
                message: 'Попробуйте авторизироваться ещё раз!',
            };
            dispatch(activityActions.setFetchingError(error));
            dispatch(replace(book.login));
        }
        dispatch(activityActions.stopFetching());
    },

    getActivityCoffeeFetch: (kind) => async(dispatch) => {
        dispatch(activityActions.startFetching());

        const response = await api.dashboard.getRecords(kind);

        if (response.status === 200) {
            const data = await response.json();

            dispatch(activityActions.getActivityCoffee(data));
        } else {
            const error = {
                status: response.status,
                message: 'Попробуйте авторизироваться ещё раз!',
            };
            dispatch(activityActions.setFetchingError(error));
            dispatch(replace(book.login));
        }
        dispatch(activityActions.stopFetching());
    },

    getActivityDinnerFetch: (kind) => async(dispatch) => {
        dispatch(activityActions.startFetching());

        const response = await api.dashboard.getRecords(kind);

        if (response.status === 200) {
            const data = await response.json();

            dispatch(activityActions.getActivityDinner(data));
        } else {
            const error = {
                status: response.status,
                message: 'Попробуйте авторизироваться ещё раз!',
            };
            dispatch(activityActions.setFetchingError(error));
            dispatch(replace(book.login));
        }
        dispatch(activityActions.stopFetching());
    },

    getActivityFruitsFetch: (kind) => async(dispatch) => {
        dispatch(activityActions.startFetching());

        const response = await api.dashboard.getRecords(kind);

        if (response.status === 200) {
            const data = await response.json();

            dispatch(activityActions.getActivityFruits(data));
        } else {
            const error = {
                status: response.status,
                message: 'Попробуйте авторизироваться ещё раз!',
            };
            dispatch(activityActions.setFetchingError(error));
            dispatch(replace(book.login));
        }
        dispatch(activityActions.stopFetching());
    },

    getActivityJunkFetch: (kind) => async(dispatch) => {
        dispatch(activityActions.startFetching());

        const response = await api.dashboard.getRecords(kind);

        if (response.status === 200) {
            const data = await response.json();

            dispatch(activityActions.getActivityJunk(data));
        } else {
            const error = {
                status: response.status,
                message: 'Попробуйте авторизироваться ещё раз!',
            };
            dispatch(activityActions.setFetchingError(error));
            dispatch(replace(book.login));
        }
        dispatch(activityActions.stopFetching());
    },

    getActivityLunchFetch: (kind) => async(dispatch) => {
        dispatch(activityActions.startFetching());

        const response = await api.dashboard.getRecords(kind);

        if (response.status === 200) {
            const data = await response.json();

            dispatch(activityActions.getActivityLunch(data));
        } else {
            const error = {
                status: response.status,
                message: 'Попробуйте авторизироваться ещё раз!',
            };
            dispatch(activityActions.setFetchingError(error));
            dispatch(replace(book.login));
        }
        dispatch(activityActions.stopFetching());
    },
    
    getActivitySleepFetch: (kind) => async(dispatch) => {
        dispatch(activityActions.startFetching());

        const response = await api.dashboard.getRecords(kind);

        if (response.status === 200) {
            const data = await response.json();

            dispatch(activityActions.getActivitySleep(data));
        } else {
            const error = {
                status: response.status,
                message: 'Попробуйте авторизироваться ещё раз!',
            };
            dispatch(activityActions.setFetchingError(error));
            dispatch(replace(book.login));
        }
        dispatch(activityActions.stopFetching());
    },

    getActivityStepsFetch: (kind) => async(dispatch) => {
        dispatch(activityActions.startFetching());

        const response = await api.dashboard.getRecords(kind);

        if (response.status === 200) {
            const data = await response.json();

            dispatch(activityActions.getActivitySteps(data));
        } else {
            const error = {
                status: response.status,
                message: 'Попробуйте авторизироваться ещё раз!',
            };
            dispatch(activityActions.setFetchingError(error));
            dispatch(replace(book.login));
        }
        dispatch(activityActions.stopFetching());
    },

    getActivityVegetablesFetch: (kind) => async(dispatch) => {
        dispatch(activityActions.startFetching());

        const response = await api.dashboard.getRecords(kind);

        if (response.status === 200) {
            const data = await response.json();

            dispatch(activityActions.getActivityVegetables(data));
        } else {
            const error = {
                status: response.status,
                message: 'Попробуйте авторизироваться ещё раз!',
            };
            dispatch(activityActions.setFetchingError(error));
            dispatch(replace(book.login));
        }
        dispatch(activityActions.stopFetching());
    },
    
    getActivityWaterFetch: (kind) => async(dispatch) => {
        dispatch(activityActions.startFetching());

        const response = await api.dashboard.getRecords(kind);

        if (response.status === 200) {
            const data = await response.json();

            dispatch(activityActions.getActivityWater(data));
        } else {
            const error = {
                status: response.status,
                message: 'Попробуйте авторизироваться ещё раз!',
            };
            dispatch(activityActions.setFetchingError(error));
            dispatch(replace(book.login));
        }
        dispatch(activityActions.stopFetching());
    },

    updateActivityBreakfastFetch: (payload, hash, kind) => async(dispatch) => {
        dispatch(activityActions.startFetching());

        const response = await api.dashboard.updateRecords(payload, hash, kind);

        if (response.status === 204) {
            dispatch(activityActions.updateActivityBreakfast());
        } else {
            const error = {
                status: response.status,
                message: 'Попробуйте авторизироваться ещё раз!',
            };
            dispatch(activityActions.setFetchingError(error));
            dispatch(replace(book.login));
        }
        dispatch(activityActions.stopFetching());
    },
    
    updateActivityCoffeeFetch: (payload, hash, kind) => async(dispatch) => {
        dispatch(activityActions.startFetching());

        const response = await api.dashboard.updateRecords(payload, hash, kind);

        if (response.status === 204) {
            dispatch(activityActions.updateActivityCoffee());
        } else {
            const error = {
                status: response.status,
                message: 'Попробуйте авторизироваться ещё раз!',
            };
            dispatch(activityActions.setFetchingError(error));
            dispatch(replace(book.login));
        }
        dispatch(activityActions.stopFetching());
    },
    
    updateActivityDinnerFetch: (payload, hash, kind) => async(dispatch) => {
        dispatch(activityActions.startFetching());

        const response = await api.dashboard.updateRecords(payload, hash, kind);

        if (response.status === 204) {
            dispatch(activityActions.updateActivityDinner());
        } else {
            const error = {
                status: response.status,
                message: 'Попробуйте авторизироваться ещё раз!',
            };
            dispatch(activityActions.setFetchingError(error));
            dispatch(replace(book.login));
        }
        dispatch(activityActions.stopFetching());
    },
    
    updateActivityFruitsFetch: (payload, hash, kind) => async(dispatch) => {
        dispatch(activityActions.startFetching());

        const response = await api.dashboard.updateRecords(payload, hash, kind);

        if (response.status === 204) {
            dispatch(activityActions.updateActivityFruits());
        } else {
            const error = {
                status: response.status,
                message: 'Попробуйте авторизироваться ещё раз!',
            };
            dispatch(activityActions.setFetchingError(error));
            dispatch(replace(book.login));
        }
        dispatch(activityActions.stopFetching());
    },
    
    updateActivityJunkFetch: (payload, hash, kind) => async(dispatch) => {
        dispatch(activityActions.startFetching());

        const response = await api.dashboard.updateRecords(payload, hash, kind);

        if (response.status === 204) {
            dispatch(activityActions.updateActivityJunk());
        } else {
            const error = {
                status: response.status,
                message: 'Попробуйте авторизироваться ещё раз!',
            };
            dispatch(activityActions.setFetchingError(error));
            dispatch(replace(book.login));
        }
        dispatch(activityActions.stopFetching());
    },
    
    updateActivityLunchFetch: (payload, hash, kind) => async(dispatch) => {
        dispatch(activityActions.startFetching());

        const response = await api.dashboard.updateRecords(payload, hash, kind);

        if (response.status === 204) {
            dispatch(activityActions.updateActivityLunch());
        } else {
            const error = {
                status: response.status,
                message: 'Попробуйте авторизироваться ещё раз!',
            };
            dispatch(activityActions.setFetchingError(error));
            dispatch(replace(book.login));
        }
        dispatch(activityActions.stopFetching());
    },
    
    updateActivitySleepFetch: (payload, hash, kind) => async(dispatch) => {
        dispatch(activityActions.startFetching());

        const response = await api.dashboard.updateRecords(payload, hash, kind);

        if (response.status === 204) {
            dispatch(activityActions.updateActivitySleep());
        } else {
            const error = {
                status: response.status,
                message: 'Попробуйте авторизироваться ещё раз!',
            };
            dispatch(activityActions.setFetchingError(error));
            dispatch(replace(book.login));
        }
        dispatch(activityActions.stopFetching());
    },

    updateActivityStepsFetch: (payload, hash, kind) => async(dispatch) => {
        dispatch(activityActions.startFetching());

        const response = await api.dashboard.updateRecords(payload, hash, kind);

        if (response.status === 204) {
            dispatch(activityActions.updateActivitySteps());
        } else {
            const error = {
                status: response.status,
                message: 'Попробуйте авторизироваться ещё раз!',
            };
            dispatch(activityActions.setFetchingError(error));
            dispatch(replace(book.login));
        }
        dispatch(activityActions.stopFetching());
    },

    updateActivityVegetablesFetch: (payload, hash, kind) => async(dispatch) => {
        dispatch(activityActions.startFetching());

        const response = await api.dashboard.updateRecords(payload, hash, kind);

        if (response.status === 204) {
            dispatch(activityActions.updateActivityVegetables());
        } else {
            const error = {
                status: response.status,
                message: 'Попробуйте авторизироваться ещё раз!',
            };
            dispatch(activityActions.setFetchingError(error));
            dispatch(replace(book.login));
        }
        dispatch(activityActions.stopFetching());
    },
        
    updateActivityWaterFetch: (payload, hash, kind) => async(dispatch) => {
        dispatch(activityActions.startFetching());

        const response = await api.dashboard.updateRecords(payload, hash, kind);

        if (response.status === 204) {
            dispatch(activityActions.updateActivityWater());
        } else {
            const error = {
                status: response.status,
                message: 'Попробуйте авторизироваться ещё раз!',
            };
            dispatch(activityActions.setFetchingError(error));
            dispatch(replace(book.login));
        }
        dispatch(activityActions.stopFetching());
    },

    getActivityReportFetch: () => async(dispatch) => {
        dispatch(activityActions.startFetching());

        const response = await api.widget.getReports();

        if (response.status === 200) {
            const {data} = await response.json();

            dispatch(activityActions.getActivityReport(data));
        } else {
            const error = {
                status: response.status,
                message: 'Попробуйте авторизироваться ещё раз!',
            };
            dispatch(activityActions.setFetchingError(error));
            dispatch(replace(book.login));
        }
        dispatch(activityActions.stopFetching());
    },

    clearActivityReportFetch: () => async(dispatch) => {
        dispatch(activityActions.startFetching());

        const response = await api.widget.resetReports();

        if (response.status === 204) {

            dispatch(activityActions.clearActivityReport());
        } else {
            const error = {
                status: response.status,
                message: 'Попробуйте авторизироваться ещё раз!',
            };
            dispatch(activityActions.setFetchingError(error));
            dispatch(replace(book.login));
        }
        dispatch(activityActions.stopFetching());
    },
}