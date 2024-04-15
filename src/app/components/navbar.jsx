'use client'
import Image from 'next/image';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React,{useState} from 'react'
import NavLink from './navlink';
import {motion} from 'framer-motion'

function Navbar() {
  const pathName = usePathname();
  const links =
    [
      { url: '/', title: 'Home' },
      { url: '/about', title: 'About' },
      { url: '/portfolio', title: 'Portfolio' },
      { url: '/contact', title: 'Contact' },
      
    ];
  
  const socials = 
  [
      { image: '/github.png', url: '#' },
      {image:'/instagram.png', url:'#'},
      {image:'/facebook.png', url:'#'},
      {image:'/linkedin.png', url:'#'},
      {image:'/dribbble.png', url:'#'},
    
  ]
  const [isOpen, setIsOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0
    },
    open: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)"
    }
  };
  const centerVariants = {
    closed: {
      opacity : 1
    },
    open: {
      rotate: 0,
    }
  }
  const bottomVariants = {
    closed: {
      rotate : 0
    },
    open: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)"
    }
  }


  const listVariants = {
    open: {
      x: 0,
      transition: {
        when:"beforeChildren",
        staggerChildren:0.2
      }
    },
    closed: {
      x: "100vw"
    }
  }

  const listItemvariant = {
    open: {
      x: 0,
      opacity:1
    },
    closed: {
      x: -10,
      opacity:0
    }
  }


  
  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
      <div className="hidden md:flex gap-4  w-1/3">
        {links.map((item, index) => (
          <NavLink item={item} key={item.title}/>
        ))}
      </div>

      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link href={'/'} className='text-sm rounded-md bg-black  p-1 font-semibold flex justify-center items-center'>
          <span className='text-white mr-1'>Giorgi</span>
          <span className='w-12 h-8 rounded bg-white text-black flex justify-center items-center'>.dev</span>
        </Link>
      </div>
      <div className="hidden md:flex gap-4 w-1/3">
        {socials.map((item, index) => (
          <Link href={item.url} key={index}>
            <Image src={item.image} width={24} height={24} alt='image'/>
          </Link>
          ))}
      </div>

      <div className="md:hidden">
        <button className='w-10 h-8 flex flex-col justify-between z-50 relative' onClick={() => setIsOpen(prev => !prev)}>
          <motion.div variants={ topVariants}  animate={isOpen ? "open" : "closed"}  className="w-10 h-1 bg-black rounded origin-left"></motion.div>
          <motion.div variants={centerVariants} animate={isOpen ? "open" : "closed"} className="w-10 h-1 bg-black rounded origin-left"></motion.div>
          <motion.div variants={bottomVariants} animate={isOpen ? "open" : "closed"} className="w-10 h-1 bg-black rounded origin-left"></motion.div>
        </button>
        {/* menu  */}
        {isOpen && (
        <motion.div  variants={listVariants} initial="closed" animate="open" className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col justify-center items-center gap-8 text-4xl z-40">
            {links.map((item) => (
              <motion.div key={item.title} variants={listItemvariant} >
                <Link href={item.url}>{ item.title}</Link>
              </motion.div>
          ))}
          </motion.div>
          )}
      </div>
    </div>
  )
}

export default Navbar