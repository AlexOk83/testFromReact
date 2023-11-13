import React, {FC, useState} from "react";
import {Button} from "primereact/button";
import {InputText} from "primereact/inputtext";
import {InputNumber} from "primereact/inputnumber";
import { InputTextarea } from 'primereact/inputtextarea';
import {Nullable} from "primereact/ts-helpers";

const replaceAt = (str: string, index: number, replacement: string) => {
    const from = str.substring(0, index);
    const to = str.substring(index, str.length);

    return `${from}${replacement}${to}`;
}

export const ValidData: FC<{}> = () => {
    const [value1, setValue1] = useState(''); // ИНН ФЛ
    const [value2, setValue2] = useState(''); // СНИЛС
    const [value3, setValue3] = useState(''); // ИНН ЮЛ
    const [value4, setValue4] = useState(''); // ОГРН
    const [value5, setValue5] = useState(''); // КПП
    const [value8, setValue8] = useState(''); // КПП
    const [value6, setValue6] = useState<Nullable<number | null>>(40); // количество
    const [value7, setValue7] = useState(''); // количество

    const zeros = (str: string, lng: number): string => {
        if (str.length < lng) {
            for (let i = 0; i<(lng-str.length); i++)
            {
                str = '0' + str;
            }
        }
        return str;
    }

    const genAnything = () => {
        setValue1(genfl())
        setValue2(genSnils())
        setValue3(genInnYl())
        setValue4(genOGRN())
        setValue5(genKPP())
    }
    const genfl = (): string => {
        const region = zeros(String(Math.floor((Math.random() * 92) + 1)),2);
        const inspection = zeros(String(Math.floor((Math.random() * 99) + 1)),2);
        const numba = zeros(String(Math.floor((Math.random() * 999999) + 1)),6);
        let rezult:string = region + inspection + numba;
        let kontr = ((
            7*Number(rezult[0]) +
            2*Number(rezult[1]) +
            4*Number(rezult[2]) +
            10*Number(rezult[3]) +
            3*Number(rezult[4]) +
            5*Number(rezult[5]) +
            9*Number(rezult[6]) +
            4*Number(rezult[7]) +
            6*Number(rezult[8]) +
            8*Number(rezult[9])
        ) % 11) % 10;
        if (kontr === 10) {
            kontr = 0
        }

        rezult = rezult + kontr;

        kontr = ((
            3*Number(rezult[0]) +
            7*Number(rezult[1]) +
            2*Number(rezult[2]) +
            4*Number(rezult[3]) +
            10*Number(rezult[4]) +
            3*Number(rezult[5]) +
            5*Number(rezult[6]) +
            9*Number(rezult[7]) +
            4*Number(rezult[8]) +
            6*Number(rezult[9]) +
            8*Number(rezult[10]
        ) % 11) % 10);
        if (kontr === 10) {
            kontr = 0
        }
        rezult = rezult + kontr;

        return rezult;
    }

    const genPass = (specialSymbols: string, length: number) => {
        let result = '';
        let result2 = '';

        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;

        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        if (specialSymbols.length > 0) {
            const specialSymbol = specialSymbols.charAt(Math.floor(Math.random() * specialSymbols.length));
            const place = Math.floor(Math.random() * length);

            result = replaceAt(result, place, specialSymbol);

        }

        return result;
    }

    const genSnils = () => {
        const rand1 = zeros(String(Math.floor((Math.random() * 998) + 2)),3);
        const rand2 = zeros(String(Math.floor((Math.random() * 999) + 1)),3);
        const rand3 = zeros(String(Math.floor((Math.random() * 999) + 1)),3);
        const rezult: string = rand1 + rand2 + rand3;

        let kontr:string = String(
            9*Number(rezult[0]) +
            8*Number(rezult[1]) +
            7*Number(rezult[2]) +
            6*Number(rezult[3]) +
            5*Number(rezult[4]) +
            4*Number(rezult[5]) +
            3*Number(rezult[6]) +
            2*Number(rezult[7]) +
            1*Number(rezult[8])
        );

        if (kontr === '100') {
            kontr = '00';
        }
        else if (Number(kontr) > 101) {
            kontr = zeros(String(Number(kontr) % 101),2);
            if (Number(kontr) > 99) {
                kontr = '00';
            }
        }

        return rezult + kontr;

    }

    const genInnYl = () => {
        const region = zeros(String(Math.floor((Math.random() * 92) + 1)),2);
        const inspection = zeros(String(Math.floor((Math.random() * 99) + 1)),2);
        const numba = zeros(String(Math.floor((Math.random() * 99999) + 1)),5);
        const rezult = region + inspection + numba;
        let kontr = ((
            2* Number(rezult[0]) +
            4* Number(rezult[1]) +
            10*Number(rezult[2]) +
            3* Number(rezult[3]) +
            5* Number(rezult[4]) +
            9* Number(rezult[5]) +
            4* Number(rezult[6]) +
            6* Number(rezult[7]) +
            8* Number(rezult[8])
        ) % 11) % 10;
        if (kontr === 10) {
            kontr = 0;
        }

        return rezult + kontr;
    }

    const genOGRN = () => {
        const priznak = String(Math.floor((Math.random() * 9) + 1));
        const godreg = zeros(String(Math.floor((Math.random() * 16) + 1)),2);
        const region = zeros(String(Math.floor((Math.random() * 92) + 1)),2);
        const inspection = zeros(String(Math.floor((Math.random() * 99) + 1)),2);
        const zapis = zeros(String(Math.floor((Math.random() * 99999) + 1)),5);
        const rezult = priznak + godreg + region + inspection + zapis;
        let kontr = (Number(rezult) % 11) % 10;
        if (kontr === 10) {
           kontr = 0;
        }

        return rezult + kontr;
    }

    const genKPP = () => {
        const region = zeros(String(Math.floor((Math.random() * 92) + 1)),2);
        const inspection = zeros(String(Math.floor((Math.random() * 99) + 1)),2);
        const prichinaRand = Math.floor((Math.random() * 4) + 1);
        let prichina = ''

        switch (prichinaRand) {
            case 1:
                prichina = '01';
                break
            case 2:
                prichina = '43';
                break
            case 3:
                prichina = '44';
                break
            case 4:
                prichina = '45';
                break
            default:
                prichina = '01';
                break
        }
        const numba = zeros(String(Math.floor((Math.random() * 999) + 1)),3);

        return region + inspection + prichina + numba;

    }

    return (
        <div className="flex w-full flex-column">
            <h1 className={'text-2xl'}>Генерация валидных данных</h1>
            <div className={'w-full flex gap-2'}>
                <Button
                    label="Сгенерировать ИНН ФЛ/ИП"
                    className={'w-full md:w-20rem mb-3'}
                    onClick={() => {setValue1(genfl())}}
                />
                <InputText
                    placeholder={'ИНН ФЛ/ИП'}
                    value={value1}
                    onChange={(e) => setValue1(e.target.value)}
                    className={'w-full md:w-20rem mb-3'}
                />
            </div>
            <div className={'w-full flex gap-2'}>
                <Button
                    label="Сгенерировать СНИЛС"
                    className={'w-full md:w-20rem mb-3'}
                    onClick={() => {setValue2(genSnils())}}
                />
                <InputText
                    placeholder={'СНИЛС'}
                    value={value2}
                    onChange={(e) => setValue2(e.target.value)} className={'w-full md:w-20rem mb-3'}
                />
            </div>
            <div className={'w-full flex gap-2'}>
                <Button
                    label="Сгенерировать ИНН ЮЛ"
                    className={'w-full md:w-20rem mb-3'}
                    onClick={() => {setValue3(genInnYl())}}
                />
                <InputText
                    placeholder={'ИНН ЮЛ'}
                    value={value3}
                    onChange={(e) => setValue3(e.target.value)} className={'w-full md:w-20rem mb-3'}
                />
            </div>
            <div className={'w-full flex gap-2'}>
                <Button
                    label="Сгенерировать ОГРН"
                    className={'w-full md:w-20rem mb-3'}
                    onClick={() => {setValue4(genOGRN())}}
                />
                <InputText
                    placeholder={'ОГРН'}
                    value={value4}
                    onChange={(e) => setValue4(e.target.value)} className={'w-full md:w-20rem mb-3'}
                />
            </div>
            <div className={'w-full flex gap-2'}>
                <Button
                    label="Сгенерировать КПП"
                    className={'w-full md:w-20rem mb-3'}
                    onClick={() => {setValue5(genKPP())}}
                />
                <InputText
                    placeholder={'КПП'}
                    value={value5}
                    onChange={(e) => setValue5(e.target.value)} className={'w-full md:w-20rem mb-3'}
                />
            </div>
            <div className={'w-full flex gap-2'}>
                <Button
                    label="Сгенерировать пароль"
                    className={'w-full md:w-20rem mb-3'}
                    onClick={() => {setValue8(genPass('!&?', 8))}}
                />
                <InputText
                    placeholder={'сгенерированный пароль'}
                    value={value8}
                    onChange={(e) => setValue8(e.target.value)} className={'w-full md:w-20rem mb-3'}
                />
            </div>
            <div className={'w-full flex gap-2'}>
                <Button
                    label="Сгенерировать все сразу"
                    className={'w-full md:w-30rem mb-3'}
                    onClick={genAnything}
                />

            </div>
            <div className={'w-full flex gap-2 align-items-center mb-3'}>
                <div className={'text-base'}>Сгенерировать много</div>
                <InputNumber value={value6} onValueChange={(e) => setValue6(e.value)} min={0} max={100} />
                <Button
                    label="ИНН ФЛ"
                    onClick={() => {
                        let result = '';
                        const count = value6 ? Number(value6) : 10;
                        for (let i= 0; i<count; i++) {
                            result += genfl() + '\n';
                        }
                        setValue7(result);
                    }}
                />
                <Button
                    label="СНИЛС"
                    onClick={() => {
                        let result = '';
                        const count = value6 ? Number(value6) : 10;
                        for (let i= 0; i<count; i++) {
                            result += genSnils() + '\n';
                        }
                        setValue7(result);
                    }}
                />
                <Button
                    label="ИНН ЮЛ"
                    onClick={() => {
                        let result = '';
                        const count = value6 ? Number(value6) : 10;
                        for (let i= 0; i<count; i++) {
                            result += genInnYl() + '\n';
                        }
                        setValue7(result);
                    }}
                />
                <Button
                    label="ОГРН"
                    onClick={() => {
                        let result = '';
                        const count = value6 ? Number(value6) : 10;
                        for (let i= 0; i<count; i++) {
                            result += genOGRN() + '\n';
                        }
                        setValue7(result);
                    }}
                />
                <Button
                    label="КПП"
                    onClick={() => {
                        let result = '';
                        const count = value6 ? Number(value6) : 10;
                        for (let i= 0; i<count; i++) {
                            result += genKPP() + '\n';
                        }
                        setValue7(result);
                    }}
                />
            </div>
            <div className={'w-full flex gap-2 align-items-center'}>
                <InputTextarea className={'w-full'} value={value7} onChange={(e) => setValue7(e.target.value)} rows={5} cols={40} />
            </div>
        </div>
    );
}