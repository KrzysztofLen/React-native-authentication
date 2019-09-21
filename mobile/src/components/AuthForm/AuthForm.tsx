import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { ActivityIndicator, Button, TextInput } from 'react-native-paper';

import { Formik, FormikActions } from 'formik';

import ErrorMessage from '../ErrorMessage/ErrorMessage';

import { validate } from './../../utils/validations';
import { Context as AuthContext } from './../../context/AuthContext';

import { styles } from './styles';
import { IProps, FormValues } from './types';

const INITIAL_VALUES: FormValues = {
    email: '',
    password: '',
    confirmPassword: '',
};

const AuthForm = ({ confirm = false, onSubmit, submitButtonText }: IProps) => {
    const { error } = useContext(AuthContext);

    return (
        <React.Fragment>
            <Formik
                initialValues={INITIAL_VALUES}
                onSubmit={(
                    values: FormValues,
                    actions: FormikActions<FormValues>,
                ) => {
                    onSubmit(values);
                    actions.setSubmitting(false);
                }}
                validate={validate}>
                {({
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    errors,
                    touched,
                    isSubmitting,
                }) => (
                    <View>
                        <TextInput
                            autoCapitalize={'none'}
                            autoCorrect={false}
                            label={'Email'}
                            onBlur={handleBlur('email')}
                            onChangeText={handleChange('email')}
                            style={styles.inputStyle}
                        />
                        <TextInput
                            autoCapitalize={'none'}
                            autoCorrect={false}
                            label={'Password'}
                            onBlur={handleBlur('password')}
                            onChangeText={handleChange('password')}
                            secureTextEntry
                            style={styles.inputStyle}
                        />

                        {confirm && (
                            <TextInput
                                autoCapitalize={'none'}
                                autoCorrect={false}
                                label={'Confirm password'}
                                onBlur={handleBlur('confirmPassword')}
                                onChangeText={handleChange('confirmPassword')}
                                secureTextEntry
                                style={styles.inputStyle}
                            />
                        )}
                        {errors.email && touched.email && (
                            <ErrorMessage text={errors.email} />
                        )}

                        {error != null && <ErrorMessage text={error} />}

                        {isSubmitting ? (
                            <ActivityIndicator animating={true} />
                        ) : (
                            <Button
                                icon="lock-open"
                                mode="contained"
                                style={styles.buttonStyle}
                                onPress={handleSubmit}>
                                {submitButtonText}
                            </Button>
                        )}
                    </View>
                )}
            </Formik>
        </React.Fragment>
    );
};

export default withNavigation(AuthForm);
