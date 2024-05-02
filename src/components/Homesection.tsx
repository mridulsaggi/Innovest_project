import React from 'react'
import { Spotlight } from "./ui/Spotlight"
import { WavyBackground } from './ui/wavy-background'
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { SparklesCore } from './ui/sparkles';
import { Features } from './Features';
 
const words = `A AI powered platform that helps in connecting startups and investors. The website has dynamic features enabling easy workflow and high efficiency. Subscribe to enable all the premium features. `
const Homesection = () => {
  return (
    <>
      {/* <WavyBackground className=" mx-auto "> */}
          {/* <Spotlight
        className="-top-45 left-80 "
        fill="white"
      /> */}
          <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
        <div className=" text-white w-full mx-auto my-40 flex  flex-col justify-center items-center relative rounded--md">
            <div className="text-bold text-white text-8xl ">INNOVEST</div>
          <div className="text-bold text-white text-3xl my-4">Innovate - Inspire - Invest</div>
          <TextGenerateEffect words={words} className='text-center max-w-lg text-base font-normal p-5'/>
        </div>
      {/* </WavyBackground> */}
    </>
  )
}

export default Homesection
