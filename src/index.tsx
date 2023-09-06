import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

import "primeflex/primeflex.css";

import "primeflex/themes/primeone-light.css";

import "primeicons/primeicons.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <App />,
);
