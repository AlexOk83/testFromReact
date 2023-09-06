import React, {useEffect, useState} from 'react';
import {Dropdown} from "primereact/dropdown";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export const App = () => {
    const [value, setValue] = useState('');
    const [stand, setSelectedStand] = useState('');
    const [service, setService] = useState('');
    const [services, setServices] = useState(['showcase-product', 'personal-area-app-of-param-setting']);
    const [forCuber, setForCuber] = useState({
        first: '',
        last: '',
    })

    useEffect(() => {
        const [first, last] = stand.split('.shard1.');
        setForCuber({
            first,
            last
        });
        console.log(first);
        console.log(last);
    }, [stand]);
    const stands = [
        {
            label: 'lk1-dev2',
            value: 'dk5-dbor04-dbor-lk1-dev2.shard1.dk5-dbor04.corp.dev.vtb'
        },
        {
            label: 'lk1-test1',
            value: 'dk5-dbor02-dbor-lk1-test1.shard1.dk5-dbor02.corp.dev.vtb'
        },
        {
            label: 'lk2-dev1',
            value: 'dk5-dbor05-dbor-lk2-dev1.shard1.dk5-dbor05.corp.dev.vtb'
        },
        {
            label: 'lk2-test1',
            value: 'dk5-dbor03-dbor-lk2-test1.shard1.dk5-dbor03.corp.dev.vtb'
        },
        {
            label: 'lk3-test1',
            value: 'dk5-dbor04-dbor-lk3-test1.shard1.dk5-dbor04.corp.dev.vtb'
        },
        {
            label: 'lk3-test2',
            value: 'dk5-dbor03-dbor-lk3-test2.shard1.dk5-dbor03.corp.dev.vtb'
        },
        {
            label: 'lk4-dev1',
            value: 'dk5-dbor05-dbor-lk4-dev1.shard1.dk5-dbor05.corp.dev.vtb'
        },
        {
            label: 'lk4-test1',
            value: 'dk5-dbor03-dbor-lk4-test1.shard1.dk5-dbor03.corp.dev.vtb'
        }
    ];

    return (
        <div className="App flex flex-column align-items-center">
            <h1 className={'text-2xl'}>Генерация ссылок на стенды</h1>
            <Dropdown
                value={stand}
                onChange={(e) => setSelectedStand(e.value)}
                options={stands}
                placeholder="Select a City"
                className="w-full md:w-14rem mb-3"
            />
            <Dropdown
                value={service}
                onChange={(e) => setService(e.value)}
                options={services}
                placeholder="Select a service"
                className="w-full md:w-14rem mb-3"
            />
            <InputText placeholder={'input new service...'} value={value} onChange={(e) => setValue(e.target.value)} className={'w-full md:w-14rem mb-3'} />
            <Button label="add service" className={'w-full md:w-14rem mb-3'} onClick={() => {
                setServices([...services, value]);
                setValue('')
            }}  />
            <div className={'mb-2'}>{stand && (<a href={`http://fe-root-adminconsole-iteration.${stand}/ac`} target={'_blank'}>Админконсоль</a>)}</div>
            <div className={'mb-2'}>{stand && (<a href={`http://fe-root-bank-iteration.${stand}/`} target={'_blank'}>банк</a>)}</div>
            <div className={'mb-2'}>{stand && (<a href={`http://fe-root-openaccount-iteration.${stand}/register`} target={'_blank'}>Регистрация</a>)}</div>
            <div className={'mb-2'}>{stand && (<a href={`http://fe-root-client-iteration.${stand}/login`} target={'_blank'}>Клиент</a>)}</div>
            <div className={'mb-2'}>{stand && (<a href={`https://console.apps.${forCuber?.last}/k8s/cluster/namespaces/${forCuber.first}`} target={'_blank'}>Kubernetes</a>)}</div>
            <div className={'mb-2'}>{stand && (<a href={`http://k8s-versions-os.${stand}/versions`} target={'_blank'}>Версии</a>)}</div>
            <div className={'mb-2'}>{stand && (<a href={`http://${service}.${stand}/swagger-ui.html`} target={'_blank'}>Swagger</a>)}</div>
        </div>
    );
};
