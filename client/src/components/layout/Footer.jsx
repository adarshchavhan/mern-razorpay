import React from 'react'
import {AiFillLinkedin, AiFillInstagram, AiFillGithub} from 'react-icons/ai'

const Footer = () => {
  return <div className="footer">
    <div>
        <h2>Burger Wala</h2>
        <p>We are trying to give u the best taste possible.</p>
        <br/>
        <em>We give attention to genuiune feeback.</em>
        <strong>All rights reserved @burgerwala</strong>
    </div>
    <aside>
        <h4>Follow Us</h4>

        <div>
        <a href="/">
            <AiFillLinkedin/>
        </a>
        <a href="/">
            <AiFillInstagram/>
        </a>
        <a href="/">
            <AiFillGithub/>
        </a>
        </div>
    </aside>
  </div>
}

export default Footer