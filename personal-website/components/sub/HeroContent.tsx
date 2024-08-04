"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

const HeroContent = () => {
  return (
    <motion.div
    initial="hidden"
    animate="visible"
    className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'
    >
        <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
        <motion.div
        variants = {slideInFromTop}
        className='Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[.9]'
        >
            <SparklesIcon className = 'text-[#b49bff] mr-[10px] h-5 w-5' />
            <h1 className='Welcome-text text-[13px]'>Computer Engineering Portfolio</h1>
        </motion.div>
        <motion.div
            variants = {slideInFromLeft(.5)}
            className = "flex felx-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
        >
            <span>
            Learning
            <span className= "text-transparent bg-clip-text font-bold bg-gradient-to-r from-purple-500 to-cyan-500"> something new </span>
            everyday
            </span>
        </motion.div>
        <motion.p
            variants = {slideInFromLeft(.8)}
            className = "text-lg text-gray-400 my-5 max-w-[600px]"
            
        >
            Welcome, my name is Arnav! I am a computer engineering student at Michigan State University. I have a passion for software development and hardware design. Check out my projects and skills. Feel free to reach out to chat tech or sports with me! 
        </motion.p>
        <motion.a
        variants = {slideInFromLeft(1)}
        className = "py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
            Learn More!
        </motion.a>
        </div>
        <div className="flex flex-col items-center">
        <motion.div
          variants={slideInFromRight(0.8)}
          initial="hidden"
          animate="visible"
          className="w-full h-full flex justify-center items-center mb-4"
        >
          <Image
            src="/arnav_fourpoint.jpg"
            alt="work icons"
            height={650}
            width={650}
          />
        </motion.div>
        <motion.div
          variants={slideInFromRight(1)}
          initial="hidden"
          animate="visible"
          className="w-full h-full flex justify-center items-center"
        >
          <Image
            src="/mainIconsdark.svg"
            alt="work icons"
            height={650}
            width={650}
          />
        </motion.div>
      </div>

    </motion.div>
  )
}

export default HeroContent