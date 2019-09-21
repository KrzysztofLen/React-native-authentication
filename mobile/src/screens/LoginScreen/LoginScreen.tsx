import React, { useContext } from 'react';
import { View } from 'react-native';
import { Title, Button } from 'react-native-paper';
import { NavigationScreenProps } from 'react-navigation';

import AuthForm from '../../components/AuthForm/AuthForm';
import { Context as AuthContext } from './../../context/AuthContext';

import { styles } from './styles';

const LoginScreen = ({ navigation }: NavigationScreenProps) => {
    const { login } = useContext(AuthContext);

    return (
        <View style={styles.formStyle}>
            <Title style={styles.titleStyle}>Login</Title>

            <AuthForm
                route={navigation.state.routeName}
                submitButtonText={'Login'}
                onSubmit={login}
            />
            <Button
                style={styles.linkStyle}
                onPress={() => navigation.navigate('Register')}>
                Don't have an account? Register!
            </Button>
        </View>
    );
};

export default LoginScreen;
