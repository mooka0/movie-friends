import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

// sample function defined to compute total quantity of cart
// function computeQuantity(cart) {
//     return cart.reduce((count, itemInCart) => count + itemInCart.quantity, 0);
// }




// similar functions can be defined to compute total price, email of the user, etc.

class CheckoutWithStripe extends React.Component {
    onToken = (res) => {
        fetch('/save-stripe-token', {
            method: 'POST',
            body: JSON.stringify(res),
        }).then(res => {
            res.json().then(data => {
                console.log(`Payment token generated, ${data.name}`)
            })
        })
    };

    render() {
        return (
            <StripeCheckout
                amount = '10.00'
                name="STRIPE_INTEGRATION"
                // functions defined above can be used to add more information while making the API call.
                // description={`Order of ${computeQuantity(cart)} items!`}
                image='LINKTOIMAGE'
                stripeKey="pk_test_51IdhWuJMvTOS5UtZHZQWBAS2wyLIkOBx69d3x3j9cYcVgOwXTrpwZv9ScTxEz37Y48hY0yIhvunfiyTOGFUxwh7v00VK4RjFEt"
                currency="INR"
                email='USER_EMAIL'
                token={this.onToken}/>          
        );
    }
}

export default CheckoutWithStripe