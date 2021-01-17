import {REGISTRATION_FORM_FIELD} from "./types";
import {IField} from "../../components/formField/types";

export const CONFIG_REGISTRATION_FIELDS: IField[] = [
    {
        label: 'ФИО',
        name: REGISTRATION_FORM_FIELD.fio,
        componentProps: {
            type: 'text',
        },
    },
    {
        label: 'Электронная почта',
        name: REGISTRATION_FORM_FIELD.email,
        componentProps: {
            type: 'text',
        },
    },
    {
        label: 'Телефон',
        name: REGISTRATION_FORM_FIELD.phone,
        componentProps: {
            type: 'text',
            mask: '+7(999)99-99-99',
        },
    },
    {
        label: 'Страна',
        name: REGISTRATION_FORM_FIELD.country,
        componentProps: {
            type: 'text',
        },
    },
    {
        label: 'Город',
        name: REGISTRATION_FORM_FIELD.city,
        componentProps: {
            type: 'text',
        },
    },
    {
        label: 'ОС телефона',
        name: REGISTRATION_FORM_FIELD.systemPhone,
        componentProps: {
            type: 'text',
        },
    },
]