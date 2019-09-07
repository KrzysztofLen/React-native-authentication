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
};
