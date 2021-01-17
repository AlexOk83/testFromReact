import React from "react";
import {withRouter, RouteComponentProps} from "react-router-dom";
import {FormErrors} from "redux-form";
import {IconfigForm} from "../../components/form/types";
import getForm from "../../components/form";
import LinkToPage from "../../components/link";
import {IRegistrationForm} from "./types";
import {CONFIG_REGISTRATION_FIELDS} from "./constants";

class RegistrationPage extends React.Component<RouteComponentProps<{}>> {

    handleSubmit = (values: IRegistrationForm) => {
        console.log('asdasd', values);
    }

    validateForm = (values: IRegistrationForm): FormErrors<IRegistrationForm> => {
        const errors: FormErrors<IRegistrationForm> = {};

        const { fio, phone, email } = values;

        if (!fio) {
            errors.fio = 'Укажите ФИО';
        }

        if (email && !email.match(/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/)) {
            errors.email = 'Электронная почта указана не коректно'
        }

        if (!phone || !phone.match(/^\+?[78][-\(]?\d{3}\)?-?\d{2}-?\d{2}-?\d{2}$/)) {
            errors.phone = 'Телефон указан не полностью'
        }

        return errors;
    };

    render() {
        const config: IconfigForm<IRegistrationForm> = {
            title: 'Регистрация',
            textButton: 'Зарегистрироваться',
            formName: 'registration',
            fields: CONFIG_REGISTRATION_FIELDS,
            onSubmit: this.handleSubmit,
            validate: this.validateForm
        };

        const Form = getForm(config);

        return (
            <>
                <Form />
                <LinkToPage to="/restore" text="Я забыл пароль" />
                <LinkToPage to="/" text="Вход" />
            </>
        );
    }
}

export default withRouter(RegistrationPage)