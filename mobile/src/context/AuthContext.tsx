import React, {useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import {server} from './../api/server';
import {navigate} from './../routes/NavigationService';
import {FormValues} from '../components/AuthForm/types';

export const AuthContext: any = React.createContext({});
export const AuthConsumer = AuthContext.Consumer;

const AuthProvider = (props) => {
    const [token, setToken] = useState(null);
    const [error, setError] = useState('');

    const login = async (values: FormValues) => {
        const {email, password} = values;
        try {
            const response = await server.post('/login', {email, password});
            await AsyncStorage.setItem('token', response.data.token);

            // dispatch({
            //     type: 'login',
            //     payload: response.data.token,
            // });
            //navigation.navigate('Dashboard');
        } catch (error) {
            console.log(error);
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
            navigate('Dashboard');
        } catch (error) {
            setError(error.response.data.message);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                token,
                error,
                register: register,
                login: login,
            }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
