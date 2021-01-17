import React from "react";
import {IComponentProps, IField} from "./types";
import {Field, WrappedFieldProps} from 'redux-form';
import InputMask from "react-input-mask";

import './style.sass'

export function FormField(props: IField) {

    const {label, name, componentProps} = props;

    return (
        <div className="form-control">
            <label className='label'>{label}</label>
            <Field name={name} component={FormControl} {...componentProps} />
        </div>
    );

}

export function FormControl(props: WrappedFieldProps & IComponentProps) {

    const { error, visited } = props.meta;
    const errorClass = visited && error ? 'form-element--error' : '';

    const renderInput = () => {
        if (props.mask) {
            return (
                <InputMask {...props.input} mask={props.mask} />
            );
        }

        return (
            <input type={props.type} {...props.input}  />
        );
    }

    return (
        <div className={`form-element ${errorClass}`}>
            {renderInput()}
            {visited && (
                <div className='error-message'>{error}</div>
            )}
        </div>
    );
}
