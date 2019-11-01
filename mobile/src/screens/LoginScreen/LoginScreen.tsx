import React, { useContext } from 'react';
import { ScrollView, KeyboardAvoidingView } from 'react-native';
import { Title, Button } from 'react-native-paper';
import * as Yup from 'yup';

import { Context as AuthContext } from './../../context/AuthContext';

import AuthForm from '@components/AuthForm/AuthForm';
import { SnackbarMessage } from '@components/SnackbarMessage';

import { styles } from './styles';

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  password: Yup.string()
    .min(6)
    .required('Password is required'),
});

export const LoginScreen = ({ navigation }: any) => {
  const { state, login } = useContext(AuthContext);

  const goToRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <KeyboardAvoidingView style={styles.formStyle} behavior="padding" enabled>
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
        <Button style={styles.linkStyle} onPress={goToRegister}>
          Don't have an account? Register!
        </Button>

        {state.snackbarMessage != null && (
          <SnackbarMessage message={state.snackbarMessage} />
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
