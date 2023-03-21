import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from 'axios'
import { Provider } from 'react-redux';
import store from './reduxToolkit/store/store';

axios.defaults.baseURL = 'https://fastball-production.up.railway.app/api'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
