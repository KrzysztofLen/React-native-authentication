import {FormValues, Errors} from './../components/AuthForm/types';

export const validate = (values: FormValues) => {
    let errors: Errors = {};

    if (!values.email || !values.password) {
        errors.email = 'Email and password are required';
    } else if (emailValidation(values.email)) {
        errors.email = 'Invalid email address';
    }

    return errors;
};

export const emailValidation = (email: string) =>
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
