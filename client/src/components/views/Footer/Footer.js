import React from 'react'
import StripeBtn from "../StripeBtn/StripeBtn"


function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem'
        }}>
           <p> Contact Us </p>

          <StripeBtn />
        </div>
    )
}

export default Footer
