import React from 'react'
import {Icon} from 'antd';


import StripeBtn from "../StripeBtn/StripeBtn"


function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem'
        }}>
           <p> Contact Us</p>

              <header className="App-header">


          <StripeBtn />
        </header>
           
        </div>
    )
}

export default Footer
