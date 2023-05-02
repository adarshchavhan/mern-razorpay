import React from 'react'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import {MdDashboard} from 'react-icons/md'
import {useDispatch, useSelector} from 'react-redux'
import { logout } from '../../redux/actions/userActions'
import Loader from '../layout/Loader'

const Profile = () => {
    const {loading, user} = useSelector(state => state.user);

    const options = {
        initial:{
            x: '-100%',
            opacity: '0'
        },
        animate:{
            x:'0',
            opacity: '1'
        }
    }

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    }

  return <section className="profile">
    
    {loading === false ? <main>
        <motion.img {...options} src={user?.photo} alt="" />
        <motion.h5 {...options} transition={{delay:'.3'}}>
            {user?.name}
        </motion.h5>
        <div>
            {user?.role ==='admin' && <motion.div {...options} transition={{delay:'.5'}}>
                <Link to='/admin/dashboard'><MdDashboard/>Dashboard</Link>
            </motion.div>}
            <motion.div {...options} transition={{delay:'.6'}}>
                <Link to='/myorders'>My Orders</Link>
            </motion.div>
        </div>

        <motion.button {...options} transition={{delay:'.8'}} onClick={handleLogout}>Logout</motion.button>
    </main> : <Loader/>}
    
  </section>
}

export default Profile