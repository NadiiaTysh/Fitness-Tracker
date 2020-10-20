import { useDispatch, useSelector } from 'react-redux';
import { replace } from 'connected-react-router';

import { userActions } from '../../../user/actions';
import { book } from '../../../../navigation/book';

export const useDashboard = () => {
    const dispatch = useDispatch();
    const {isFetching, data} = useSelector(state => state.user);    

    const dataReceived = () => {

        try {
            const received = !isFetching && data.length !== 0 && true;

            return received;

        } catch (error) {
            dispatch(replace(book.login));
        }
    };

    const handleLogout = () => {
        dispatch(userActions.logoutUserFetch());
    };

    return {
        dataReceived,
        data,
        handleLogout,
    }
}