import React from 'react'
import { Link } from 'react-router-dom'

const PaymentSuccess = () => {
  return <div className="paymentSuccess">
    <main>
        <h1>Order Confirmed</h1>
        <p>Order Placed Successfully, You can check order status below</p>
        <Link to='/myorders'>Check Status</Link>
    </main>
  </div>
}

export default PaymentSuccess