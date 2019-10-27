import React, { useContext } from 'react';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { ActivityIndicator, Button, TextInput } from 'react-native-paper';
import { Formik, FormikActions } from 'formik';

import { Context as AuthContext } from './../../context/AuthContext';
import { ErrorMessage } from '@components/ErrorMessage';

import { styles } from './styles';
import { Props, FormValues } from './types';

const INITIAL_VALUES: FormValues = {
    email: '',
    password: '',
    confirmPassword: '',
};

const AuthForm = ({ confirm = false, onSubmit, submitButtonText, validationSchema }: Props) => {
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
                validationSchema={validationSchema}>
                {({
                    handleChange,
                    handleSubmit,
                    errors,
                    touched,
                    isSubmitting,
                    isValid,
                    setFieldTouched,
                }) => (
                    <View>
                        <TextInput
                            autoCapitalize={'none'}
                            autoCorrect={false}
                            label={'Email'}
                            onBlur={() => setFieldTouched('email')}
                            onChangeText={handleChange('email')}
                            style={styles.inputStyle}
                        />

                        {errors.email && touched.email ? (
                            <ErrorMessage text={errors.email} />
                        ) : null}

                        <TextInput
                            autoCapitalize={'none'}
                            autoCorrect={false}
                            label={'Password'}
                            onBlur={() => setFieldTouched('password')}
                            onChangeText={handleChange('password')}
                            secureTextEntry
                            style={styles.inputStyle}
                        />

                        {errors.password && touched.password ? (
                            <ErrorMessage text={errors.password} />
                        ) : null}

                        {confirm && (
                            <TextInput
                                autoCapitalize={'none'}
                                autoCorrect={false}
                                label={'Confirm password'}
                                onBlur={() => setFieldTouched('confirmPassword')}
                                onChangeText={handleChange('confirmPassword')}
                                secureTextEntry
                                style={styles.inputStyle}
                            />
                        )}

                        {errors.confirmPassword && touched.confirmPassword ? (
                            <ErrorMessage text={errors.confirmPassword} />
                        ) : null}

                        {error != null && <ErrorMessage text={error} />}

                        {isSubmitting ? (
                            <ActivityIndicator animating={true} />
                        ) : (
                            <Button
                                mode="contained"
                                style={styles.buttonStyle}
                                disabled={!isValid}
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
