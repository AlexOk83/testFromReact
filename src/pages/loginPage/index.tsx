import React from "react";
import {withRouter, RouteComponentProps} from "react-router-dom";
import {FormErrors} from "redux-form";

import getForm from "../../components/form";
import {IconfigForm} from "../../components/form/types";
import LinkToPage from "../../components/link";
import {ILoginForm, LOGIN_FORM_FIELD} from "./types";

function LoginPage(props: RouteComponentProps<{}>) {

    const handleSubmit = (values: ILoginForm) => {

        const {history} = props;
        history.push('/home');
    }

    const validateForm = (values: ILoginForm): FormErrors<ILoginForm> => {
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

    const config: IconfigForm<ILoginForm> = {
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
        onSubmit: handleSubmit,
        validate: validateForm
    };

    const Form = getForm(config);

    return (
        <>
            <Form/>
            <LinkToPage to="/restore" text="Я забыл пароль"/>
            <LinkToPage to="/reg" text="Регистрация"/>
        </>
    );
}

export default withRouter(LoginPage)