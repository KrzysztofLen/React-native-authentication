import React from 'react';
import {View} from 'react-native';
import {NavigationScreenProps} from 'react-navigation';
import {Title, Button} from 'react-native-paper';
import AuthForm from '../../components/AuthForm/AuthForm';
import {styles} from './styles';

const RegisterScreen = ({navigation}: NavigationScreenProps) => {
    return (
        <View style={styles.formStyle}>
            <Title style={styles.titleStyle}>Register</Title>

            <AuthForm
                route={navigation.state.routeName}
                confirm={true}
                submitButtonText={'Register'}
            />
            <Button
                style={styles.linkStyle}
                onPress={() => navigation.navigate('Login')}>
                Already have a account? Login!
            </Button>
        </View>
    );
};

export default RegisterScreen;
