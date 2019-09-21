import React, { Dispatch } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import { server } from './../api/server';
import { navigate } from './../routes/NavigationService';
import { FormValues } from '../components/AuthForm/types';

import createContext from './createContext';

interface INITIAL_STATE {
    token: null;
    error: '';
    snackbarMessage: '';
}

type ActionType = {
    type: 'REGISTER' | 'LOGIN_SUCCESS' | 'LOGIN' | 'LOGOUT' | 'ERROR';
    payload: any;
};

const authReducer = (state: INITIAL_STATE, action: ActionType) => {
    switch (action.type) {
        case 'REGISTER':
            return {
                token: action.payload,
                error: '',
                snackbarMessage: 'Welcome, register success',
            };
        case 'LOGIN_SUCCESS':
            return {
                token: action.payload,
                error: '',
                snackbarMessage: 'Login success',
            };
        case 'LOGIN':
            return {
                token: action.payload,
                error: '',
                snackbarMessage: 'Login success',
            };
        case 'LOGOUT':
            return { error: '', token: null, snackbarMessage: '' };
        case 'ERROR':
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

const register = (dispatch: Dispatch<any>) => async (values: FormValues) => {
    const { email, password, confirmPassword } = values;

    if (password !== confirmPassword) {
        dispatch({
            type: 'ERROR',
            payload: "Provided passwords doesn't match",
        });
        return;
    }

    try {
        const response = await server.post('/register', {
            email,
            password,
        });
        await AsyncStorage.setItem('token', response.data.token);

        dispatch({
            type: 'REGISTER',
            payload: response.data.token,
        });

        navigate('Dashboard');
    } catch (error) {
        dispatch({
            type: 'ERROR',
            payload: error.response.data.message,
        });
    }
};

const tryLogin = (dispatch: Dispatch<any>) => async () => {
    const token = await AsyncStorage.getItem('token');

    if (token) {
        dispatch({
            type: 'LOGIN_SUCCESS',
            payload: token,
        });
        navigate('Dashboard');
    } else {
        navigate('Register');
    }
};

const login = (dispatch: Dispatch<any>) => async (values: FormValues) => {
    const { email, password } = values;
    try {
        const response = await server.post('/login', { email, password });
        await AsyncStorage.setItem('token', response.data.token);

        dispatch({
            type: 'LOGIN',
            payload: response.data.token,
        });
        navigate('Dashboard');
    } catch (error) {
        dispatch({
            type: 'ERROR',
            payload: error.response.data.message,
        });
    }
};

const logout = (dispatch: Dispatch<any>) => async () => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'LOGOUT' });
    navigate('Login');
};

export const { Provider, Context } = createContext(
    authReducer,
    { logout, login, register, tryLogin },
    {
        token: null,
        error: '',
        snackbarMessage: '',
    },
);
