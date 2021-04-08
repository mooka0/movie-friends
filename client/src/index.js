import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'core-js';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";

import Reducer from './_reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

const CheckoutForm = () => {
    const stripe = useStripe();

    return <form> <CardElement /><button type="submit" disabled={stripe}>Donate</button></form>;
};


const stripePromise = loadStripe('pk_test_51IdhWuJMvTOS5UtZHZQWBAS2wyLIkOBx69d3x3j9cYcVgOwXTrpwZv9ScTxEz37Y48hY0yIhvunfiyTOGFUxwh7v00VK4RjFEt');

const Index = () => {
    return <Elements stripe={stripePromise}><CheckoutForm /></Elements>
};

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore);

ReactDOM.render(
    <Provider
        store={createStoreWithMiddleware(
            Reducer,
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
        )}
    >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export default Index;
