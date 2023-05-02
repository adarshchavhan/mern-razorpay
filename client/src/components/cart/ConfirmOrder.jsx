import React, { useEffect, useState } from 'react'
import { createOrder, paymentVarification } from '../../redux/actions/orderActions';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ConfirmOrder = () => {

  const {
    cartItems,
    subTotal,
    tax,
    shippingCharges,
    totalPrice,
    shippingInfo
  } = useSelector(state => state.cart);
  const { error, message } = useSelector(state => state.order);

  const [paymentMethod, setPaymentMethod] = useState('COD');
  const [disableBtn, setDisableBtn] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setDisableBtn(true);

    if (paymentMethod === 'COD') {
      dispatch(createOrder({
        shippingInfo,
        orderItems: cartItems,
        paymentMethod,
        itemPrice: subTotal,
        taxPrice: tax,
        shippingCharges,
        totalAmount: totalPrice
      }));
    } else {

      const { data } = await axios.post('/orders/placeorder/online', {
        shippingInfo,
        orderItems: cartItems,
        paymentMethod,
        itemPrice: subTotal,
        taxPrice: tax,
        shippingCharges,
        totalAmount: totalPrice
      });
      console.log(data);
      // const options = {
      //   key: "rzp_test_iJcpcqyWLYqyE0",
      //   amount: data.order.amount,
      //   currency: "INR",
      //   name: "Burger Wala",
      //   description: "Burger shop by Adarsh",
      //   order_id: data.order.id,
      //   handler: function (response) {
      //     const {
      //       razorpay_payment_id,
      //       razorpay_order_id,
      //       razorpay_signature,
      //     } = response;

      //     dispatch(paymentVarification({
      //       razorpay_payment_id,
      //   razorpay_order_id,
      //   razorpay_signature,
      //   orderOptions: data.orderOptions
      //     }));

      //   },
      //   theme: {
      //     color: "#9c003c"
      //   }
      // };

      // const razorpay = new window.Razorpay(options);
      // razorpay.open();
    }
  }

  const navigate = useNavigate();

  useEffect(() => {

    if (error) {
      toast.error(error);
      dispatch({
        type: 'clearError'
      })
      setDisableBtn(false);
    }

    if (message) {
      toast.success(message);
      dispatch({
        type: 'clearMessage'
      })
      dispatch({
        type: 'emptyCart'
      })
      navigate('/payment/success')
    }

  }, [dispatch, navigate, error, message]);

  return <section className="confirmOrder">
    <main>
      <h1>Confirm Order</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Cash On Delivery</label>
          <input type="radio" name="payment" onChange={() => setPaymentMethod('COD')} required />
        </div>
        <div>
          <label>Online</label>
          <input type="radio" name="payment" onChange={() => setPaymentMethod('Online')} />
        </div>

        <button type='submit' disabled={disableBtn}>Place Order</button>
      </form>
    </main>
  </section>
}

export default ConfirmOrder