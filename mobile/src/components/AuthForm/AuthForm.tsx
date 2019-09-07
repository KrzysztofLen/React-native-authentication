import React, {useState} from 'react';
import {Formik} from 'formik';
import {SafeAreaView, Text, View} from 'react-native';
import {
    ActivityIndicator,
    Button,
    Snackbar,
    TextInput,
} from 'react-native-paper';
import {styles} from './styles';
import {validate} from './../../utils/validations';
import {server} from './../../api/server';
import {IProps, FormValues} from './types';

const reducer = (state, action) => {
    switch (action.type) {
        case 'login':
            return {errorMessage: '', token: action.payload};
        default:
            return state;
    }
};

export const AuthForm = ({
    confirm = false,
    route,
    submitButtonText,
}: IProps) => {
    // const [visible, setVisible] = useState(true);
    const [error, setError] = useState('');

    const login = async ({email, password}) => {
        try {
            const response = await server.post('/login', {email, password});
            console.log(response.data.token);
        } catch (error) {
            console.log(error);
        }
    };

    const register = async ({email, password}) => {
        try {
            console.log('Register', email, password);
        } catch (error) {
            console.log(error);
        }
    };

    const onSubmit = (values: FormValues, actions) => {
        if (route === 'Login') {
            actions.setSubmitting(false);
            login(values);
        }

        if (route === 'Register') {
            if (values.password !== values.confirmPassword) {
                setError("Provided passwords doesn't match");
                actions.setSubmitting(false);
                return;
            } else {
                actions.setSubmitting(false);
                register(values);
            }
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
            {/* {visible && (
                <Snackbar
                    duration={100000}
                    visible={visible}
                    onDismiss={() => setVisible(false)}
                    action={{
                        label: "Close",
                        onPress: () => setVisible(false)
                    }}
                    theme={{ colors: { accent: colors.white } }}
                    style={styles.snackBarStyle}
                >
                    Login successful
                </Snackbar>
            )} */}
        </React.Fragment>
    );
};
