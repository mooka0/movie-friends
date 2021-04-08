import React from 'react'
import {Icon} from 'antd';

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


function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem'
        }}>
           <p> Contact Us</p>
        </div>
    )
}

export default Footer
