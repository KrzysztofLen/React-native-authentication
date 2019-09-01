import { FormValues, Errors } from "./../components/AuthForm/types";

export const validate = (values: FormValues) => {
    let errors: Errors = {};

    if (!values.email || !values.password) {
        errors.email = "Email and password are required";
    } else if (emailValidation(values)) {
        errors.email = "Invalid email address";
    }

    return errors;
};

export const emailValidation = values =>
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email);