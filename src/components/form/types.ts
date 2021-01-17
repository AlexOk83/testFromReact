import {IField} from "../formField/types";
import {FormErrors} from "redux-form";

export interface IconfigForm<TFormData> {
    title: string;
    textButton: string;
    formName: string;
    fields: IField[];
    validate(values: TFormData): FormErrors<TFormData>;
    onSubmit(values: TFormData): void;
}