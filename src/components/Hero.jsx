import { motion } from "framer-motion";

import ComputersCanvas from "./canvas/Computers";
import {styles} from "../style"

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-3 h-3 rounded-full bg-[#8e65e7]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div className="">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi ,I'am <span className="text-[#8e65e7] ">UNAIZ</span>
          </h1>
          <p className={`${styles.heroSubText} mt-5  text-white-500`}>
          Full-Stack Developer and Create<br className="sm:block hidden" />
            Interface and web application{" "}
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className="absolute xs:bottom-1
       bottom-3 w-full flex justify-center items-center
       ">
   
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4
           border-secondary flex items-start justify-center p-2">
            <motion.div 
            animate={{
              y:[0,24,0]
            }}
            transition={{
              duration:1.5,
              repeat:Infinity,
              repeatType:'loop'
            }}
            className="rounded-full w-3 h-3 bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
