import * as Yup from 'yup';
import { RegisterSchema, LoginSchema } from '../../screens';

export type Errors = { [key: string]: string };

export type FormValues = {
    readonly email: string;
    readonly password: string;
    readonly confirmPassword?: string;
};

export type Props = {
    readonly confirm?: boolean;
    readonly route: string;
    readonly submitButtonText: string;
    readonly navigation?: any;
    readonly onSubmit: (values: FormValues) => void;
    readonly validationSchema: any;
};
