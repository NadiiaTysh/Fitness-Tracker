import { useSelector } from 'react-redux';

export const useAuth = () => {
    const {data} = useSelector(state => state.user);

    return {
        isAuthenticated: Boolean(data),
    }
};