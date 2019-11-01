import React, { useContext } from 'react';
import { KeyboardAvoidingView, ScrollView } from 'react-native';
import { Title, Button } from 'react-native-paper';
import * as Yup from 'yup';

import AuthForm from '@components/AuthForm/AuthForm';
import { Context as AuthContext } from './../../context/AuthContext';

import { styles } from './styles';

export const RegisterSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  password: Yup.string()
    .min(6)
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
});

export const RegisterScreen = ({ navigation }: any) => {
  const { register } = useContext(AuthContext);

  const goToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <KeyboardAvoidingView style={styles.formStyle} behavior="padding" enabled>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
        }}>
        <Title style={styles.titleStyle}>Register</Title>

        <AuthForm
          route={navigation.state.routeName}
          confirm={true}
          submitButtonText={'Register'}
          onSubmit={register}
          validationSchema={RegisterSchema}
        />
        <Button style={styles.linkStyle} onPress={goToLogin}>
          Already have a account? Login!
        </Button>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
