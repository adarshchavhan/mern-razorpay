import React from 'react'

const CartItem = ({itemNum, value, title, img, increment, decrement}) => {
  return <div className="cartItem">
    <div>
        <h4>{title}</h4>
        <img src={img} alt="" />
    </div>

    <div>
        <button onClick={()=> decrement(itemNum)}>-</button>
        <input type="number" value={value} readOnly />
        <button onClick={() => increment(itemNum)}>+</button>
    </div>
  </div>
}

export default CartItem