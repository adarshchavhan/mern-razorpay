import React from 'react'
import CartItem from './CartItem'
import burgerImg from '../../assets/home-burger.png'
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {
    const {
      cartItems: {
        cheeseBurger: {
          quantity: cheeseBurger
        },
        vegCheeseBurger: {
          quantity: vegCheeseBurger
        },
        burgerWithFries: {
          quantity: burgerWithFries
        }
      },
      subTotal,
      tax,
      shippingCharges,
      totalPrice,
      shippingInfo
    } = useSelector(state => state.cart);

    const dispatch = useDispatch();

    const increment = (item) =>  {
      switch (item) {
        case 1:
          if(cheeseBurger === 5) break;
            dispatch({
              type: 'cheeseBurgerIncrement'
            })
            dispatch({
              type: 'calculatePrice'
            })
          break;
        case 2:
          if(vegCheeseBurger === 5) break;
            dispatch({
              type: 'vegCheeseBurgerIncrement'
            })
            dispatch({
              type: 'calculatePrice'
            })
          break;

        case 3:
          if(burgerWithFries === 5) break;
            dispatch({
              type: 'burgerWithFriesIncrement'
            })
            dispatch({
              type: 'calculatePrice'
            })
          break;

        default:
          if(cheeseBurger === 5) break;
          dispatch({
            type: 'cheeseBurgerIncrement'
          })
          dispatch({
            type: 'calculatePrice'
          })
          break;
      }
    }
    const decrement = (item) =>  {
      switch (item) {
        case 1:
            if(cheeseBurger === 0) break;
            dispatch({
              type: 'cheeseBurgerDecrement'
            })
            dispatch({
              type: 'calculatePrice'
            })
          break;
        case 2:
          if(vegCheeseBurger === 0) break;
            dispatch({
              type: 'vegCheeseBurgerDecrement'
            })
            dispatch({
              type: 'calculatePrice'
            })
          break;

        case 3:
          if(burgerWithFries === 0) break;
            dispatch({
              type: 'burgerWithFriesDecrement'
            })
            dispatch({
              type: 'calculatePrice'
            })
          break;

        default:
          if(cheeseBurger === 0) break;
          dispatch({
            type: 'cheeseBurgerDecrement'
          })
          dispatch({
            type: 'calculatePrice'
          })
          break;
      }
    }

  return <section className="cart">
    <main>
    <CartItem itemNum={1} img={burger1} price={299} title={'Cheese Burger'} {...{increment, decrement}} value={cheeseBurger}/>
    <CartItem itemNum={2} img={burger2} price={499} title={'Veg Cheese Burger'} {...{increment, decrement}} value={vegCheeseBurger}/>
    <CartItem itemNum={3} img={burger3} price={599} title={'Burger With Fries'} {...{increment, decrement}} value={burgerWithFries}/>

    <article>
            <div>
            <h4>Sub Total</h4>
            <p>₹{subTotal}</p>
            </div>
            
            <div>
            <h4>Tax</h4>
            <p>₹{tax}</p>
            </div>
            
            <div>
            <h4>Shipping Charges</h4>
            <p>₹{shippingCharges}</p>
            </div>
            <div>
            <h4>Total Charges</h4>
            <p>₹{totalPrice}</p>
            </div>

        <Link to='/shipping'>Checkout</Link>
    </article>
    </main>
  </section>
}

export default Cart