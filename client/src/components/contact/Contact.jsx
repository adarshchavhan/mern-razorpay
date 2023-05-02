import React from 'react'
import {motion} from 'framer-motion'

const Contact = () => {

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

    const handleChange = () => {}

  return <section className="contact">

    <motion.form {...options}>

        <h2>Contact Form</h2>
        
        <input type="text" name="name" placeholder='Name' onChange={handleChange} />
        <input type="email" name="email" placeholder='Email' onChange={handleChange} />
        <textarea rows={5} name="message" placeholder='Message..' onChange={handleChange} />
        <button type="submit">Send</button>
      
    </motion.form> 

  </section>
}

export default Contact