import React, {useContext} from 'react';
import {withNavigation} from 'react-navigation';
import {Formik, FormikActions} from 'formik';
import {Text, View} from 'react-native';
import {ActivityIndicator, Button, TextInput} from 'react-native-paper';
import {styles} from './styles';
import {validate} from './../../utils/validations';
import {IProps, FormValues} from './types';
import {AuthContext} from './../../context';

const AuthForm = ({confirm = false, route, submitButtonText}: IProps) => {
    const {error, login, register} = useContext(AuthContext);

    const onSubmit = (
        values: FormValues,
        actions: FormikActions<FormValues>,
    ) => {
        if (route === 'Login') {
            actions.setSubmitting(false);
            login(values);
        }

        if (route === 'Register') {
            actions.setSubmitting(false);
            register(values);
        }
    };

    return (
        <React.Fragment>
            <Formik
                initialValues={{email: '', password: ''}}
                onSubmit={(values, actions) => {
                    onSubmit(values, actions);
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
                            <Text style={styles.errorStyle}>
                                {errors.email}
                            </Text>
                        )}

                        {error !== '' && (
                            <Text style={styles.errorStyle}>{error}</Text>
                        )}
                        {isSubmitting ? (
                            <ActivityIndicator animating={true} />
                        ) : (
                            <Button
                                icon="lock-open"
                                mode="contained"
                                style={styles.buttonStyle}
                                onPress={() => handleSubmit()}>
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
