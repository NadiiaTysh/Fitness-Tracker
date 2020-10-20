import { types } from './types';

const initialState = {
    record: {
        breakfast: {data: 'none', hash: 0},
        coffee:  {data: 'none', hash: 0},
        dinner: {data: 'none', hash: 0},
        fruits:  {data: 'none', hash: 0},
        junk: {data: false, hash: 0},
        lunch: {data: 'none', hash: 0},
        sleep: {data: 0, hash: 0},
        steps: {data: 0, hash: 0},
        vegetables: {data: false, hash: 0},
        water: {data: 0, hash: 0},
    },
    score: null,
    isFetching: false,
    error: null,
};

export const activityReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case types.ACTIVITY_START_FETCHING:
            return {
                ...state,
                isFetching: true,
            };
        case types.ACTIVITY_STOP_FETCHING:
            return {
                ...state,
                isFetching: false,
            };
        case types.ACTIVITY_SET_FETCHING_ERROR:
            return {
                ...state,
                error: payload,
                record: null,
            };

        case types.ACTIVITY_ADD_BREAKFAST:
            return {
                ...state,
                record: {
                    ...state.record,
                    breakfast: payload,
                },
                error: null,
            };
        case types.ACTIVITY_ADD_COFFEE:
            return {
                ...state,
                record: {
                    ...state.record,
                    coffee: payload,
                },
                error: null,
            };
        case types.ACTIVITY_ADD_DINNER:
            return {
                ...state,
                record: {
                    ...state.record,
                    dinner: payload,
                },
                error: null,
            };
        case types.ACTIVITY_ADD_FRUITS:
            return {
                ...state,
                record: {
                    ...state.record,
                    fruits: payload,
                },
                error: null,
            };
        case types.ACTIVITY_ADD_JUNK:
            return {
                ...state,
                record: {
                    ...state.record,
                    junk: payload,
                },
                error: null,
            };
        case types.ACTIVITY_ADD_LUNCH:
            return {
                ...state,
                record: {
                    ...state.record,
                    lunch: payload,
                },
                error: null,
            };
        case types.ACTIVITY_ADD_SLEEP:
            return {
                ...state,
                record: {
                    ...state.record,
                    sleep: payload,
                },
                error: null,
            };
        case types.ACTIVITY_ADD_STEPS:
            return {
                ...state,
                record: {
                    ...state.record,
                    steps: payload,
                },
                error: null,
            };
        case types.ACTIVITY_ADD_VEGETABLES:
            return {
                ...state,
                record: {
                    ...state.record,
                    vegetables: payload,
                },
                error: null,
            };
        case types.ACTIVITY_ADD_WATER:
            return {
                ...state,
                record: {
                    ...state.record,
                    water: payload,
                },
                error: null,
            };

        case types.ACTIVITY_GET_BREAKFAST:
            return {
                ...state,
                record: {
                    ...state.record,
                    breakfast: payload,
                },
                error: null,
            };
        case types.ACTIVITY_GET_COFFEE:
            return {
                ...state,
                record: {
                    ...state.record,
                    coffee: payload,
                },
                error: null,
            };
        case types.ACTIVITY_GET_DINNER:
            return {
                ...state,
                record: {
                    ...state.record,
                    dinner: payload,
                },
                error: null,
            };
        case types.ACTIVITY_GET_FRUITS:
            return {
                ...state,
                record: {
                    ...state.record,
                    fruits: payload,
                },
                error: null,
            };
        case types.ACTIVITY_GET_JUNK:
            return {
                ...state,
                record: {
                    ...state.record,
                    junk: payload,
                },
                error: null,
            };
        case types.ACTIVITY_GET_LUNCH:
            return {
                ...state,
                record: {
                    ...state.record,
                    lunch: payload,
                },
                error: null,
            };
        case types.ACTIVITY_GET_SLEEP:
            return {
                ...state,
                record: {
                    ...state.record,
                    sleep: payload,
                },
                error: null,
            };
        case types.ACTIVITY_GET_STEPS:
            return {
                ...state,
                record: {
                    ...state.record,
                    steps: payload,
                },
                error: null,
            };
        case types.ACTIVITY_GET_VEGETABLES:
            return {
                ...state,
                record: {
                    ...state.record,
                    vegetables: payload,
                },
                error: null,
            };
        case types.ACTIVITY_GET_WATER:
            return {
                ...state,
                record: {
                    ...state.record,
                    water: payload,
                },
                error: null,
            };
        
        case types.ACTIVITY_UPDATE_BREAKFAST:
            return {
                ...state,
                record: {
                    ...state.record,
                },
                error: null,
            };
        case types.ACTIVITY_UPDATE_COFFEE:
            return {
                ...state,
                record: {
                    ...state.record,
                },
                error: null,
            };
        case types.ACTIVITY_UPDATE_DINNER:
            return {
                ...state,
                record: {
                    ...state.record,
                },
                error: null,
            };
        case types.ACTIVITY_UPDATE_FRUITS:
            return {
                ...state,
                record: {
                    ...state.record,
                },
                error: null,
            };
        case types.ACTIVITY_UPDATE_JUNK:
            return {
                ...state,
                record: {
                    ...state.record,
                },
                error: null,
            };
        case types.ACTIVITY_UPDATE_LUNCH:
            return {
                ...state,
                record: {
                    ...state.record,
                },
                error: null,
            };
        case types.ACTIVITY_UPDATE_SLEEP:
            return {
                ...state,
                record: {
                    ...state.record,
                },
                error: null,
            };
        case types.ACTIVITY_UPDATE_STEPS:
            return {
                ...state,
                record: {
                    ...state.record,
                },
                error: null,
            };
        case types.ACTIVITY_UPDATE_VEGETABLES:
            return {
                ...state,
                record: {
                    ...state.record,
                },
                error: null,
            };
        case types.ACTIVITY_UPDATE_WATER:
            return {
                ...state,
                record: {
                    ...state.record,
                },
                error: null,
            };

        case types.ACTIVITY_GET_RECORDS:
            return {
                ...state,
                score: payload,
                error: null,
            };
        case types.ACTIVITY_CLEAR_RECORDS:
            return initialState;

        default:
            return state;
    }
}