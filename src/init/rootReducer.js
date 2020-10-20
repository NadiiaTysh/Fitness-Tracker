import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { userReducer as user } from '../bus/user/reducer';
import { activityReducer as activity } from '../bus/activity/reducer';

export const rootReducer = (history) => {
    return combineReducers({
    router: connectRouter(history),
    user,
    activity,
})}