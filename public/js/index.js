import React from "react"
import { BrowserRouter } from "react-router-dom"
import ReactDOM from "react-dom"
import App from "./container/App"
import {Provider} from 'react-redux';
import {store, persistor} from './store/index';
import { PersistGate } from 'redux-persist/integration/react'
ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </PersistGate>
    </Provider>
        , document.getElementById("root"));
