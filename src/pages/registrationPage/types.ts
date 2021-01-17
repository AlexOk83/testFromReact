export interface IRegistrationForm {
    fio: string;
    email: string;
    phone: string;
    city: string;
    country: string;
    systemPhone: string;
}

export const REGISTRATION_FORM_FIELD = {
    fio: 'fio',
    email: 'email',
    phone: 'phone',
    city: 'city',
    country: 'country',
    systemPhone: 'systemPhone',
}