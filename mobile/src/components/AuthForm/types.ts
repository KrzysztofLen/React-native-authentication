import { NavigationProp } from "react-navigation-stack/lib/typescript/types";

export type Errors = {[k: string]: string};

export type FormValues = {
    readonly confirmPassword?: string;
    readonly email: string;
    readonly password: string;
};

export type IProps = {
    readonly confirm?: boolean;
    readonly route: string;
    readonly submitButtonText: string;
    readonly navigation?: NavigationProp;
};
