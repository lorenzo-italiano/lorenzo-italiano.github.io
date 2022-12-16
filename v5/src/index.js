import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles/styles.scss"
import './i18n';
import {BrowserRouter} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import {ContextProvider} from "./context/context";


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <ContextProvider>
            <AnimatePresence>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </AnimatePresence>
        </ContextProvider>
    </React.StrictMode>
)

