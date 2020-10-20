import { root } from './config';

export const api = Object.freeze({
    registartion: {
        createUser: (payload) => {
            return fetch(`${root}/users`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },  
                body: JSON.stringify(payload),
            });
        },
    },
    login: {
        loginUser: (payload) => {
            return fetch(`${root}/login`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Base ${payload}`,
                },
            });
        },
    },
    profile: {
        getUser: () => {
            return fetch(`${root}/profile`, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        },
        updateUser: (payload) => {
            return fetch(`${root}/users`, {
                method: 'PUT',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });
        },
        exitUser: () => {
            return fetch(`${root}/logout`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        }
    },
    dashboard: {
        addRecords: (payload, kind) => {
            return fetch(`${root}/records?kind=${kind}`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });
        },
        getRecords: (kind) => {
            return fetch(`${root}/records?kind=${kind}`, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        },
        updateRecords: (payload, hash, kind) => {
            return fetch(`${root}/records/${hash}?kind=${kind}`, {
                method: 'PUT',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });
        },
    },
    widget: {
        getReports: () => {
            return fetch(`${root}/reports`, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        },
        resetReports: () => {
            return fetch(`${root}/reports/reset`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        },
    },
});