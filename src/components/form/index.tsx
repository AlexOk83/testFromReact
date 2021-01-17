import React from "react";
import { InjectedFormProps, reduxForm } from 'redux-form';

import { FormField } from '../formField';
import { IconfigForm } from "./types";

import './style.sass'

export default function getForm(config: IconfigForm<unknown>) {
    function Form(props: InjectedFormProps) {

           const { title, textButton, onSubmit, fields } = config;
           const { handleSubmit, invalid } = props;

            return (
                <div className='form'>
                    <h1 className='form__title'>{title}</h1>

                    {fields.map((item) => (
                        <FormField key={item.name} {...item} />
                    ))}

                    <button className="form__button" disabled={invalid} onClick={handleSubmit(onSubmit)}>
                        {textButton}
                    </button>

                </div>
            );
    }

    return reduxForm({
        form: config.formName,
        validate: config.validate,
    })(Form);
}
