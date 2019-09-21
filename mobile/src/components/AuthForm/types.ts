import { NavigationProp } from 'react-navigation-stack/lib/typescript/types';

export type Errors = { [key: string]: string };

export type FormValues = {
    readonly email: string;
    readonly password: string;
    readonly confirmPassword?: string;
};

export type IProps = {
    readonly confirm?: boolean;
    readonly route: string;
    readonly submitButtonText: string;
    readonly navigation?: NavigationProp;
    readonly onSubmit: (values: FormValues) => void;
};
