'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';

function PortfolioPage() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-83%"]);

  const projectList = [
    {
      id: 1,
      title: "Laravel + React, Full stuck pwa",
      color: "from-violet-300 to-blue-300",
      description: "Welcome to our dynamic online platform powered by the synergy of Laravel and React. Seamlessly blending the robust backend capabilities of Laravel with the sleek and interactive user interfaces crafted with React, our website offers a seamless user experience. Leveraging Laravel's powerful features such as authentication, routing, and database management, coupled with React's flexibility in creating dynamic, responsive interfaces, we bring you a modern and efficient web solution. Whether you're browsing content, engaging with interactive components, or managing your account, our Laravel and React-powered website ensures smooth performance and enhanced functionality every step of the way.",
      img: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
      link:"http://somehing"
    },
    {
      id: 2,
      title: "Laravel MVC ecommerse",
      color: "from-blue-300 to-green-300",
      description: "Step into our world of seamless online commerce, powered by Laravel's MVC architecture. Our feature-rich website offers a plethora of tools to enhance your shopping journey. Delight in exclusive discounts with our advanced coupon management system, ensuring every purchase is a deal. Take command of your store's operations effortlessly through our intuitive admin panel, granting you full control over inventory, orders, and customer interactions. Tailor shipping rules to perfection, guaranteeing swift and reliable deliveries for your valued customers. With Laravel's robust framework and MVC pattern, our platform stands as a bastion of security, scalability, and user-centric design, ensuring your online business thrives in today's digital landscape.",
      img:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg",
      link: "http://somehing"
      
    },
    {
      id: 3,
      title: ".Net core MVC book shop",
      color: "from-green-300 to-red-300",
      description: "Welcome to our .NET Core MVC bookshop, where the world of literature meets cutting-edge technology. Immerse yourself in a curated selection of books, all housed within a sleek and intuitive online platform powered by .NET 8. Explore our vast collection with ease, browsing through genres, bestsellers, and new releases. With .NET Core's robust MVC framework at the helm, our website offers seamless navigation, lightning-fast performance, and unmatched security. Whether you're a book enthusiast or a casual reader, our platform provides a user-friendly shopping experience tailored to your preferences. Discover the synergy of literature and technology with our .NET 8-powered bookshop, where every page turn is a journey worth taking.",
      img: "https://img.freepik.com/photos-premium/photos-nature-couper-souffle-qui-capturent-beaute-du-monde-naturel_853677-16343.jpg",
      link:"http://somehing"
    },
    {
      id: 4,
      title: "Microservices car auction website, with .Net and Next.js",
      color: "from-red-300 to-yellow-300",
      description:"Explore our cutting-edge car auction platform, where innovation meets performance. Leveraging the power of .NET and Next.js, our site offers a seamless user experience backed by modern technology. With MongoDB and PostgreSQL databases integrated, we cater to diverse data needs, ensuring efficient storage and retrieval. Real-time bidding, powered by SignalR, offers lightning-fast updates and dynamic auction experiences. Stay informed with instant notifications on auction status and bidding activity. Identity authentication ensures robust security. Behind the scenes, RabbitMQ facilitates communication between microservices for enhanced reliability. Join us and discover the future of car auctions, where every bid is an opportunity.",
      img: "https://cdn.pixabay.com/photo/2024/03/18/18/14/fantasy-8641634_640.jpg",
      link:"http://somehing"
    },
    {
      id: 5,
      title: "React.js movie website",
      color: "from-yellow-300 to-violet-300",
      description:"Welcome to our sleek and dynamic static website, crafted with React to offer a seamless browsing experience. Explore our content-rich platform, where every page comes to life with interactive elements and engaging visuals. With React's component-based architecture, we deliver a user-friendly interface that adapts to your needs. Whether you're browsing our portfolio, learning about our services, or exploring our blog, our website provides a smooth and immersive journey. Enjoy fast loading times and seamless navigation as you delve into our world of creativity and innovation. Experience the power of React as we redefine static websites, blending simplicity with sophistication to deliver an unparalleled online experience.",
      img: "https://www.naturephotographie.com/wp-content/uploads/2017/01/Plus-One.jpg",
      link:"http://somehing"
    },
  ]

  return (

    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
      <div className='h-[600vh] relative' ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex  items-center justify-center text-center">
          <h1 className='text-8xl  '>My Works</h1>
          </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x: x }} className="flex">
            <div className='h-screen w-screen flex items-center justify-center bg-gradient-to-r from-blue-300 to-violet-300'/>
            {projectList.map((item) => (
              <div key={item.id} className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}>
                <div className="flex flex-col gap-2 text-white ">
                  <h1  className='text-xl font-bold md:text-4xl lg:text-4xl xl:text-4xl w-80  md:w-96 lg:w-[500px]  xl:w-[600px]'>{item.title}</h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px] border-spacing-1 border-x-white ">
                    <Image src={item.img} alt={item.title } fill />
                  </div>
                  <p className='w-80  md:w-96 lg:w-[500px]  xl:w-[600px]'>{item.description}</p>
                  <Link href={item.link} className='flex justify-end'><button className='p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-800  font-semibold hover:text-white hover:bg-gray-800 rounded-sm m-2'>Visit Website</button></Link>
                   </div>
                  </div>
            ))}
          </motion.div>     
          </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center  overflow-hidden  bg-white">
  <h1 className='text-3xl md:text-4xl lg:text-6xl xl:text-8xl'>Do you have a project?</h1>
  <div className="relative">
          <motion.svg animate={ {rotate:360}} transition={{duration:8, ease:"linear",repeat:Infinity}} viewBox='0 0 300 300' className='w-64 h-64 md:w-[500px] md:h-[500px]' style={{ display: 'block', margin: 'auto' }}>
      <defs>
        <path id='circlePath' d='M 150, 150 m -60, 0 a 60, 60 0 0, 1 120,0 a 60,60 0 0, 1 -120,0'/>
      </defs>
      <text fill='#000'>
        <textPath xlinkHref='#circlePath' className='text-xl' textAnchor="middle" startOffset="50%">Full stack web developer</textPath>
      </text>
    </motion.svg>
    <Link href="/contact" className='w-16 h-16 md:w-28 md:h-28 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white rounded-full flex items-center justify-center'>Hire Me</Link>
  </div>
</div>


    </motion.div>
  )
}

export default PortfolioPage