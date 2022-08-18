import React from "react";
import {withRouter, RouteComponentProps} from "react-router-dom";

import getForm from "../../components/form";
import LinkToPage from "../../components/link";
import {ILoginForm} from "./types";
import {config} from "./constants";

function LoginPage(props: RouteComponentProps<{}>) {

    const handleSubmit = (values: ILoginForm) => {

        const {history} = props;
        history.push('/home');
    }

    const Form = getForm(config(handleSubmit));

    return (
        <>
            <Form/>
            <LinkToPage to="/restore" text="Я забыл пароль"/>
            <LinkToPage to="/reg" text="Регистрация"/>
        </>
    );
}

export default withRouter(LoginPage)