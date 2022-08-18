import {ILoginForm, LOGIN_FORM_FIELD} from "./types";
import {FormErrors} from "redux-form";
import {IconfigForm} from "../../components/form/types";

export const validate = (values: ILoginForm): FormErrors<ILoginForm> => {
    const errors: FormErrors<ILoginForm> = {};

    const {login, password} = values;

    if (!login) {
        errors.login = 'Укажите логин';
    }

    if (!password) {
        errors.password = 'Укажите пароль';
    }

    return errors;
};

export const config = (onSubmit: (values: ILoginForm) => void):IconfigForm<ILoginForm> => ({
    title: 'Войдите в свой профиль',
    textButton: 'Войти',
    formName: 'login',
    fields: [
        {
            label: 'Логин',
            name: LOGIN_FORM_FIELD.login,
            componentProps: {
                type: 'text'
            },
        },
        {
            label: 'Пароль',
            name: LOGIN_FORM_FIELD.password,
            componentProps: {
                type: 'password',
            },
        },
    ],
    validate,
    onSubmit,
});