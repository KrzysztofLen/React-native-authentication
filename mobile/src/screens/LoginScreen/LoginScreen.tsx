import React, { useContext } from 'react';
import { ScrollView, KeyboardAvoidingView } from 'react-native';
import { Title, Button } from 'react-native-paper';
import * as Yup from 'yup';

import AuthForm from '../../components/AuthForm/AuthForm';
import { Context as AuthContext } from './../../context/AuthContext';

import { styles } from './styles';

export const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    password: Yup.string()
        .min(6)
        .required('Password is required'),
});

const LoginScreen = ({ navigation }: any) => {
    const { login } = useContext(AuthContext);

    return (
        <KeyboardAvoidingView
            style={styles.formStyle}
            behavior="padding"
            enabled>
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: 'center',
                }}>
                <Title style={styles.titleStyle}>Login</Title>

                <AuthForm
                    route={navigation.state.routeName}
                    submitButtonText={'Login'}
                    onSubmit={login}
                    validationSchema={LoginSchema}
                />
                <Button
                    style={styles.linkStyle}
                    onPress={() => navigation.navigate('Register')}>
                    Don't have an account? Register!
                </Button>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default LoginScreen;
