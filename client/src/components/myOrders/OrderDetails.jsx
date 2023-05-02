import React from 'react'

const OrderDetails = () => {
  return (
    <section className="orderDetails">
        <main>
            <h1>Order Details</h1>
            <div>
                <h1>Shipping</h1>
                <p>
                    <b>Addrees</b>
                    {'h3r34jjrb4htb4 u4tj4btn  3fd'}
                </p>
            </div>

            <div>
                <h1>Contact</h1>
                <p>
                    <b>Name</b>
                    {'Ada Doe'}
                </p>

                <p>
                    <b>Phone</b>
                    {945481558}
                </p>
            </div>
            
            <div>
                <h1>Status</h1>
                <p>
                    <b>Order</b>
                    {'Proccessing'}
                </p>

                <p>
                    <b>Placed At</b>
                    {`14-2-2023`}
                </p>
                <p>
                    <b>Deliverd At</b>
                    {`21-2-2023`}
                </p>
            </div>

            <div>
                <h1>Payment</h1>
                <p>
                    <b>Payment Method</b>
                    {'Online'}
                </p>

                <p>
                    <b>Payment Refrence</b>
                    #{`13kf4jtou4ut8784u2`}
                </p>
                <p>
                    <b>Paid At</b>
                    {`21-2-2023`}
                </p>
            </div>

            <div>
                <h1>Amount</h1>
                <p>
                    <b>Item Total</b>
                    ₹{20930}
                </p>
                <p>
                    <b>Shipping Charges</b>
                    ₹{200}
                </p>
                <p>
                    <b>Tax Charges</b>
                    ₹{2090}
                </p>
                <p>
                    <b>Total Amount</b>
                    ₹{20930 + 200 + 2090}
                </p>
            </div>

            <article>
                <h1>Ordrerd Items</h1>

                <div>
                    <h4>Chesse Burger</h4>
                    <div>
                    <span>{2}</span>×<span>{232}</span>
                    </div>
                </div>

                <div>
                    <h4>Chesse Burger</h4>
                    <div>
                    <span>{2}</span>×<span>{232}</span>
                    </div>
                </div>

                <div>
                    <h4>Chesse Burger</h4>
                    <div>
                    <span>{2}</span>×<span>{232}</span>
                    </div>
                </div>

                <div>
                    <h4 style={{fontWeight:800}}>Sub Total</h4>
                    <div style={{fontWeight:800}}>₹{6280}</div>
                </div>
            </article>
        </main>
    </section>
  )
}

export default OrderDetails