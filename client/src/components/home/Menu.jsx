import React from 'react'
import MenuCard from './MenuCard'
import burgerImg from '../../assets/home-burger.png'
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const Menu = () => {

    const addToCartHandler = () => {

    }

  return <div className="menu" id='menu'>
    <hr />
    <h1>MENU</h1>
    <div>
        <MenuCard ItemNum={1} burgerSrc={burger1} price={299} title={'Cheese Burger'} handler={addToCartHandler} delay={0.2}/>
        <MenuCard ItemNum={2} burgerSrc={burger2} price={499} title={'Veg Cheese Burger'} handler={addToCartHandler} delay={0.5}/>
        <MenuCard ItemNum={3} burgerSrc={burger3} price={599} title={'Burger With Fries'} handler={addToCartHandler} delay={0.8}/>
    </div>
  </div>
}

export default Menu