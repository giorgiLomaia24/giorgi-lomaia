'use client'

import { AnimatePresence ,delay,motion} from "framer-motion"
import Navbar from "./navbar"
import { usePathname } from "next/navigation"

function TransitionProvider({ children }) {
    const pathName = usePathname();
    return (
      <AnimatePresence mode="wait">
            <div className="w-screen h-screen bg-gradient-to-b from-blue-50 to-red-100">
                <motion.div key={pathName} className="h-screen w-screen fixed top-0 bg-black rounded-b-[100px] z-40" animate={{ height: "0vh" }} exit={{ height: "140vh" }} transition={{ duration: 0.5, ease: "easeInOut" }} />
                <motion.div key={pathName} className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit" initial={{opacity:1}} animate={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.8, ease: "easeInOut" }} >
                {pathName === '/' ? "HOME" :  pathName.substring(1).toUpperCase()}
                </motion.div>

                <motion.div key={pathName} className="h-screen w-screen fixed bottom-0 bg-black rounded-t-[100px] z-30" initial={{height:"140vh"} } animate={{height:"0vh",transition:{delay:0.5}}}  />

          <div className="h-24">
          <Navbar />
          </div>
          <div className="h-[calc(100vh-6rem)]">  {children}</div>
         
        </div>

      </AnimatePresence>
  )
}

export default TransitionProvider