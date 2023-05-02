import React, { useEffect, useState } from 'react'
import {AiOutlineEye} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import axios from 'axios'

const MyOrders = () => {
    const [orders, setOrders] = useState([]);

    const dispatch = useDispatch();

    useEffect(()=>{
        const fetchOrders  = async() => {
           const {data} = await axios.get('/orders/myorders');
           
           setOrders(data.orders)
        }
        fetchOrders();
    },[]);

  return(
    <div className="tableClass">
        <main>
            <table>
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Status</th>
                        <th>Item Quantity</th>
                        <th>Ammount</th>
                        <th>Payment Method</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {orders.map(order => (
                        <tr key={order._id}>
                            <td>{order._id}</td>
                            <td>{order.orderStatus}</td>
                            <td>21</td>
                            <td>₹{order.itemPrice}</td>
                            <td>{order.paymentMethod}</td>
                            <td>
                                <Link to={`/order/${order._id}`}><AiOutlineEye/></Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    </div>
  )
}

export default MyOrders