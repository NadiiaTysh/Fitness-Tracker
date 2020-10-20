import { useSelector } from 'react-redux';

export const useWidget = () => {
    const {score} = useSelector(state => state.activity);
    const widgetDataAll = score ? score/2 : 0;

    return {
        widgetDataAll,
    }
};