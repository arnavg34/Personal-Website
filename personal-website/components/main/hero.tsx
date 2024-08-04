import React from 'react'
import HeroContent from '../sub/HeroContent'

const Hero = () => {
  return (
    <div className="relative flex flex-col h-[400px] w-full ">
      <video
        autoPlay
        muted
        loop
        className='absolute left-0 top-0 z-[1] w-full h-full object-contain overflow-hidden'
      >
        <source src='breadboard.webm' type='video/webm' />
      </video>
      <HeroContent />
    </div>
  )
}

export default Hero