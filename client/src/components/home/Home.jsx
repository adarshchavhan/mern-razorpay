import React from 'react'
import homeBurger from '../../assets/home-burger.png'
import { motion } from 'framer-motion'
import Founder from './Founder'
import Menu from './Menu'

const Home = () => {

    const options = {
        initial: {
            x: '-100%',
            opacity: 0
        },
        whileInView: {
            x: '0%',
            opacity: 1
        }
    }

    return <>
    <section className="home">
        <div className='text'>
            <motion.h1 {...options}>Burger Shop</motion.h1>
            <motion.p {...options}>Give yourself tasty burger.</motion.p>
            <motion.a href="#menu">Explore Menu</motion.a>
        </div>
        <div className='img'>
            <img src={homeBurger} alt="" />
        </div>
    </section>

    <Founder/>
    <Menu/>
</>
}

export default Home