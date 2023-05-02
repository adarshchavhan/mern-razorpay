import React from 'react'
import { Link } from 'react-router-dom'
import {RiFindReplaceLine} from 'react-icons/ri'

const About = () => {
  return <section className="about">
    <main>
    <h1>About Us</h1>
    <article>
        <h4>Burger Wala</h4>
        <p>We are the Burger Wala. The place for most tasty burger in the world.</p>

        <p>
            Explore the most tasty burgers. Click below to see the menu.
        </p>

        <Link to='/'>
            <RiFindReplaceLine/>
        </Link>
    </article>

    <div>
        <div>
            <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/1200px-Outdoors-man-portrait_%28cropped%29.jpg'} alt="" />
            <h2>Ada Doe</h2>
        </div>

        <p>I am Ada Doe, The founder of Burger Wala. Affileted to god taste....</p>
    </div>
    </main>
  </section>
}

export default About