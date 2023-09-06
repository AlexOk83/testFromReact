import React from 'react';
import {TabPanel, TabView} from "primereact/tabview";
import {Links} from "./components/links";
import {ValidData} from "./components/valid-data";

export const App = () => {


    return (
        <TabView>
            <TabPanel header="Генерация ссылок на стенды">
                <Links />
            </TabPanel>
            <TabPanel header="Генерация валидных данных">
                <ValidData />
            </TabPanel>
        </TabView>
    );
};
