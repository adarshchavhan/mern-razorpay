import React, { useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser } from './redux/actions/userActions'
import {toast, Toaster} from 'react-hot-toast'
import {ProtectedRoute} from 'protected-route-react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './components/home/Home'
import Contact from './components/contact/Contact'
import Cart from './components/cart/Cart'
import Shipping from './components/Shipping/Shipping'
import ConfirmOrder from './components/cart/ConfirmOrder'
import PaymentSuccess from './components/cart/PaymentSuccess'
import Login from './components/login/login'
import Profile from './components/profile/Profile'
import MyOrders from './components/myOrders/myOrders'
import OrderDetails from './components/myOrders/OrderDetails'
import Dashboard from './components/Admin/Dashboard'
import Users from './components/Admin/Users'
import Orders from './components/Admin/Orders'
import About from './components/about/About'
import NotFound from './components/layout/NotFound'

import './styles/header.scss'
import './styles/home.scss'
import './styles/founder.scss'
import './styles/menu.scss'
import './styles/footer.scss'
import './styles/contact.scss'
import './styles/cart.scss'
import './styles/shipping.scss'
import './styles/confirmOrder.scss'
import './styles/paymentSuccess.scss'
import './styles/login.scss'
import './styles/profile.scss'
import './styles/table.scss'
import './styles/orderDetails.scss'
import './styles/dashboard.scss'
import './styles/about.scss'
import './styles/notFound.scss'

const App = () => {
  const dispatch = useDispatch();
  const {loading, error, message, user, isAuth} = useSelector(state => state.user);

  useEffect(()=>{
    dispatch(loadUser());
  },[dispatch])

  useEffect(()=>{
    if(error){
      toast.error(error)
      dispatch({
        type: 'clearError'
      });
    }
    if(message){
      toast.success(message)
      dispatch({
        type: 'clearMessage'
      });
    }
  },[dispatch, error, message])

  return (
    <Router>
      <Header isAuth={isAuth}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<NotFound/>}/>

        {loading===false && <>
          <Route path='/login' element={
              <ProtectedRoute isAuthenticated={!isAuth} redirect='/me'>
                <Login/>
                </ProtectedRoute>
        }/>

        <Route element={<ProtectedRoute isAuthenticated={isAuth}/>}>
          <Route path='/me' element={<Profile/>}/>
          <Route path='/shipping' element={<Shipping/>}/>
          <Route path='/confirm/order' element={<ConfirmOrder/>}/>
          <Route path='/payment/success' element={<PaymentSuccess/>}/>
          <Route path='/myorders' element={<MyOrders/>}/>
          <Route path='/order/:id' element={<OrderDetails/>}/>
        </Route>

        <Route element={<ProtectedRoute isAuthenticated={isAuth} adminRoute={true} isAdmin={user?.role==='admin' && true} redirectAdmin='/me' />}>
          <Route path='/admin/dashboard' element={<Dashboard/>}/>
          <Route path='/admin/users' element={<Users/>}/>
          <Route path='/admin/orders' element={<Orders/>}/>
        </Route>
        </>}

      </Routes>
      <Footer/>
      <Toaster/>
    </Router>
  )
}

export default App