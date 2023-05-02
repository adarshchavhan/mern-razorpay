import React from 'react'
import {motion} from 'framer-motion'

const Founder = () => {

    const options = {
        initial:{
            x: '-100%',
            opacity: '0'
        },
        whileInView:{
            x:'0',
            opacity: '1'
        }
    }

  return <div className="founder">
    <motion.div {...options}>
    <img src="https://media.istockphoto.com/id/1066348958/photo/close-up-portrait-of-an-attractive-middle-aged-man-having-fun-and-looking-happy-joyful.jpg?s=170667a&w=0&k=20&c=D75H8oE6sTtEwDHb7eYRAT1Afg4PhQ84taYzdOajY9Q=" alt="" />
    <h3 className="name">John Doe</h3>
    <p>
        Hello everyone I'm John Doe and I'm the founder of Burger Wala.
        Our mission is to create and serve most delcious burger in the world.
    </p>
    </motion.div>
    
  </div>
}

export default Founder