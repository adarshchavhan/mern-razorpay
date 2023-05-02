import React from 'react'
import { motion } from 'framer-motion'

const MenuCard = ({ItemNum, burgerSrc, price, title, handler, delay=0}) => {
    const options = {
        initial:{
            x: '-100%',
            opacity: '0'
        },
        whileInView:{
            x:'0',
            opacity: '1'
        },
        transition: {
            delay: delay
        }
    }

  return (
    <motion.div className='menuCard' {...options}>
        <div>Item {ItemNum}</div>
        <main>
            <img src={burgerSrc} alt="" />
            <h5>₹{price}</h5>
            <p>{title}</p>
            <button onClick={()=> handler()}>Buy Now</button>
        </main>
    </motion.div>
  )
}

export default MenuCard