'use client'

import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';


function ContactPage() {
  const [success, setSuccess] = useState(false);
  const form = useRef();
  const [error, setError] = useState(false);
  const text = "Contact Me";
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };


  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(process.env.NEXT_PUBLIC_MAIL_ID, process.env.NEXT_PUBLIC_TEMP_ID, form.current, process.env.NEXT_PUBLIC_PUB_KEY)
      .then((result) => {
        console.log(result)
        setSuccess(true);
        setError(false);
        form.current.reset();
      }, (error) => {
        console.log(error)
        setError(true)
        setSuccess(false)
      });
  };
  return (
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
      <div className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 '>
        {/* text */}
        <div className="h-[20%] lg:h-full lg:w-1/2 flex text-center justify-center items-center text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span key={index} initial={{opacity:1}} animate={{opacity:0}} transition={{duration:3,repeat:Infinity,delay: index * 0.1}} style={{ color: getRandomColor(), fontWeight:"bold" }} >{letter }</motion.span>
            ))}
            😇
          </div>


        </div>
        {/* form */}
        <form ref={form} className="h-[80%] lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col  gap-8 justify-center p-24" onSubmit={sendEmail}>
          <span>Dear, Giorgi Lomaia</span>
          <textarea rows="8" className='bg-transparent border-b-2 border-b-black outline-none resize-none' name='user_message'/>
          <span>My email address is</span>
          <input type="text"  className='bg-transparent border-b-2 border-b-black outline-none resize-none' name='user_email'/>
          <span>Regards</span>
          <button type='submit' className='bg-purple-200 rounded font-semibold text-gray-600 p-4'>Send</button>
          {success && <span className='text-green-600 font-semibold'>Your message has been sent to me successfully. I'll be in touch with you as soon as possible. 🥳</span>}
          {error && <span className='text-red-600 font-semibold'>Something went wrong I am sorry you are having this experience. 😢</span>}

          
        </form>
      </div>
      </motion.div>
  )
}

export default ContactPage