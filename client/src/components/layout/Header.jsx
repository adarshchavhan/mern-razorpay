import React from 'react'
import { Link } from 'react-router-dom'
import {IoFastFoodOutline} from 'react-icons/io5'
import {FiShoppingCart, FiLogIn} from 'react-icons/fi'
import {FaUser} from 'react-icons/fa'
import {motion} from 'framer-motion'

const Header = ({isAuth=false}) => {
  
  return <nav>
    <Link to='/' className='logo'>
    <motion.div initial={{x:"-100%"}} whileInView={{x:"0"}}>
        <IoFastFoodOutline/>
    </motion.div>
    </Link>

    <div>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/cart'><FiShoppingCart/></Link>
        <Link to={isAuth ? '/me' : '/login'}>
            {isAuth ? <FaUser/> : <FiLogIn/>}
        </Link>
    </div>
  </nav>
}

export default Header