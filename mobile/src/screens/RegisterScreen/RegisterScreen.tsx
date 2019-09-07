import React from 'react';
import {View, Text} from 'react-native';
import {Title} from 'react-native-paper';

const RegisterScreen = () => {
    return (
        <View style={{flex: 1}}>
            <Title>Register</Title>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text>Register</Text>
            </View>
        </View>
    );
};

export default RegisterScreen;
