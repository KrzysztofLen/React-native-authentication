import React from 'react';
import {View, Text} from 'react-native';
import {Title, Button} from 'react-native-paper';
import AuthForm from '../../components/AuthForm/AuthForm';
import {styles} from './styles';

const LoginScreen = ({navigation}) => {
    return (
        <View style={styles.formStyle}>
            <Title style={styles.titleStyle}>Login</Title>

            <AuthForm
                route={navigation.state.routeName}
                submitButtonText={'Login'}
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
