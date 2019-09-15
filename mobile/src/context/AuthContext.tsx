import React, {useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import {server} from './../api/server';
import {navigate} from './../routes/NavigationService';
import {FormValues} from '../components/AuthForm/types';

export const AuthContext: any = React.createContext({});
export const AuthConsumer = AuthContext.Consumer;

interface Props {
    children: JSX.Element[] | JSX.Element;
}

const AuthProvider = (props: Props) => {
    const [token, setToken] = useState<string | null>(null);
    const [snackbarMessage, setSnackbarMessage] = useState<string>('');
    const [error, setError] = useState<string>('');
  
    const tryLogin = async () => {
        const token = await AsyncStorage.getItem('token');

        if (token) {
            setToken(token);
            setSnackbarMessage('Login success');
            navigate('Dashboard');
        } else {
            navigate('Register');
        }
    };

    const login = async (values: FormValues) => {
        const {email, password} = values;
        try {
            const response = await server.post('/login', {email, password});
            await AsyncStorage.setItem('token', response.data.token);

            setToken(response.data.token);
            navigate('Dashboard');
        } catch (error) {
            setError(error.response.data.message);
        }
    };

    const register = async (values: FormValues) => {
        const {email, password, confirmPassword} = values;

        if (password !== confirmPassword) {
            setError("Provided passwords doesn't match");
            return;
        }

        try {
            const response = await server.post('/register', {email, password});
            await AsyncStorage.setItem('token', response.data.token);

            setToken(response.data.token);
            setSnackbarMessage('Welcome, register success');
            navigate('Dashboard');
        } catch (error) {
            setError(error.response.data.message);
        }
    };

    const logout = async () => {
        await AsyncStorage.removeItem('token');
        setToken(null);
        setError('');
        navigate('Login');
    };

    return (
        <AuthContext.Provider
            value={{
                token,
                snackbarMessage,
                error,
                register: register,
                login: login,
                tryLogin: tryLogin,
                logout: logout,
            }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
