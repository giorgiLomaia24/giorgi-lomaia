'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

function AboutPage() {
  const skillList = [
    'html', 'css','js','reactjs','nextjs','framer-motion','php','laravel','c#','.Net','nodejs','expressjs','typescript','tailwindcss','mongodb','sql','docker','postgres'
]

  return (
    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
      <div className="h-full overflow-scroll lg:flex">
        {/* text cont */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
          {/* bio */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className='font-bold text-2xl'>BIOGRAPHY</h1>
            <p className='text-lg'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
              reiciendis. Officiis eius minus eaque, aliquid quam fugit assumenda
              unde voluptate sint inventore, consequuntur ex saepe vel sapiente?
              Sequi quae, in nam eaque doloremque atque?
            </p>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab?</span>
            
          </div>
          {/* skills */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className='font-bold text-2xl'>Skills</h1>
            {/* skill list */}
            <div className="flex gap-4 flex-wrap">
            {skillList.map((item, index) => (
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black' key={index}>{ item}</div>
             ))}

            </div>
          </div>
          {/* experience */}
          {/* <div className="flex flex-col gap-12 justify-center">
            <h1 className='font-bold text-2xl'>Experience</h1>

          </div> */}
        </div>
        
        {/* svg cont */}
        <div className="hidden lg:block sticky top-0 z-30 w-1/3 xl:w-1/2">
          <Image src="/hero.png"  height={481} width={481} alt='image'/>
        </div>
      </div>
   
    </motion.div>
  )
}

export default AboutPage