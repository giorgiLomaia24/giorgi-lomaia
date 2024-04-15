'use client'

import { motion } from "framer-motion";
import Image from "next/image";


const Homepage = () => {
  return<motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
  <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
    {/* Image */}
    <div className="h-1/2 relative lg:h-full lg:w-1/2">
      <Image src="/hero.png" alt="image" fill className="object-contain"/>
    </div>
    
    {/* content */}
    <div className="h-1/2 flex flex-col gap-8 items-center justify-center lg:h-full lg:w-1/2 ">
      <h1 className="text-4xl md:text-6xl font-bold">Full stuck web developer</h1>
      <p className="md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit placeat quisquam doloribus at, vel illum.</p>
      <div className="w-full flex gap-4">
        <button className="rounded-lg ring-1 ring-black bg-black text-white p-4">view my work</button>
        <button className="rounded-lg ring-1 ring-black bg-white text-black p-4">contact me</button>
      </div>

    </div>
      </div>
      </motion.div>;
  };
  
  export default Homepage;
  
