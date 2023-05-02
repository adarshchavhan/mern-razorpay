import React from 'react'
import {AiOutlineEye} from 'react-icons/ai'
import {GiArmoredBoomerang} from 'react-icons/gi'
import { Link } from 'react-router-dom'

const Orders = () => {
  return (
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
                        <th>User</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                <tr>
                        <td>#13wi2jei</td>
                        <td>Proccessing</td>
                        <td>21</td>
                        <td>₹{20200}</td>
                        <td>Online</td>
                        <td>Ada Doe</td>
                        <td>
                            <Link to={`/order/${2}`}><AiOutlineEye/></Link>
                            <button><GiArmoredBoomerang/></button>
                        </td>
                    </tr>

                    <tr>
                        <td>#13wi2jei</td>
                        <td>Proccessing</td>
                        <td>21</td>
                        <td>₹{20200}</td>
                        <td>Online</td>
                        <td>Ada Doe</td>
                        <td>
                            <Link to={`/order/${2}`}><AiOutlineEye/></Link>
                            <button><GiArmoredBoomerang/></button>
                        </td>
                    </tr>


                    <tr>
                        <td>#13wi2jei</td>
                        <td>Proccessing</td>
                        <td>21</td>
                        <td>₹{20200}</td>
                        <td>Online</td>
                        <td>Ada Doe</td>
                        <td>
                            <Link to={`/order/${2}`}><AiOutlineEye/></Link>
                            <button><GiArmoredBoomerang/></button>
                        </td>
                    </tr>
                    <tr>
                        <td>#13wi2jei</td>
                        <td>Proccessing</td>
                        <td>21</td>
                        <td>₹{20200}</td>
                        <td>Online</td>
                        <td>Ada Doe</td>
                        <td>
                            <Link to={`/order/${2}`}><AiOutlineEye/></Link>
                            <button><GiArmoredBoomerang/></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </main>
    </div>
  )
}

export default Orders