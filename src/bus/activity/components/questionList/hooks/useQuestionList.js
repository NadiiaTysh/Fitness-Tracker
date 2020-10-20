import { useDispatch, useSelector } from 'react-redux';
import { activityActions } from '../../../actions';

export const useQuestionList = () => {
    const dispatch = useDispatch();
    const {record} = useSelector(state => state.activity);

    const handleClick = (name) => {

        if (record[name].hash === 0) {
            const nameCapitalized = name.substring(0, 1).toUpperCase() + name.substring(1);
            dispatch(activityActions[`getActivity${nameCapitalized}Fetch`](name));    
        }
    };

    return {
        handleClick,
    }
}