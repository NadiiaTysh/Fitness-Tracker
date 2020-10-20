import React, { useEffect } from 'react';

import { book } from '../../navigation/book';
import { history } from '../../navigation/history';

import { useAuth } from './hooks/useAuth';

export const Guardian = ({children}) => {
    const {isAuthenticated} = useAuth();

    useEffect(() => {
        if(!isAuthenticated) {
            history.replace(book.login);
        }
    }, [history, isAuthenticated]);

    return <>
        {children}
    </>
}