"use client";

import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <div className="relative h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center overflow-hidden mx-auto py-14 md:py-0 bg-gradient-to-b from-black via-neutral-900 to-black">
      
      {/* Spotlight Effect */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

      {/* Subtle Glow in Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-pink-500/10 blur-3xl" />

      <div className="p-4 relative z-10 w-full text-center">
        
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-20 md:mt-0 text-4xl md:text-7xl font-extrabold bg-clip-text text-transparent 
                     bg-gradient-to-r from-purple-400 via-pink-400 to-orange-300 
                     animate-gradient-x"
        >
          Master the Art of Music
        </motion.h1>

        {/* Animated Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="mt-6 font-normal text-base md:text-lg text-neutral-300 max-w-xl mx-auto leading-relaxed"
        >
          Dive into our comprehensive music courses and transform your musical journey today. 
          Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.
        </motion.p>

        {/* Animated Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-6"
        >
          <Link href={"/courses"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white 
                         border-neutral-200 dark:border-slate-800 
                         hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] 
                         hover:scale-105 transition-transform duration-300"
            >
              Explore Courses
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;
