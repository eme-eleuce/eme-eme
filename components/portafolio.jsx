import React from 'react';
import { Fotos } from './fotos';
import Image from 'next/image';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const Portafolio = () => {
  return (
    <div className='max-w-[800px] md:max-w-[1200px] mx-auto py-12 text-center'>
        <h1 className='font-bold text-4xl mb-4 py-10 mt-6'>
        <RoughNotation type="highlight" show={true} color="#ffc266" strokeWidth='2px'  padding={'left'}  animationDelay='1800' animationDuration='1000'>
          Portafolio
        </RoughNotation>
        </h1>
        <p className='text-2xl'>Everything has been created without thinking too much, just so i don&apos;t get eaten up by boredom and <RoughNotation type="crossed-off" show={true} color="#ff4242" strokeWidth='2px'  padding={'left'}  animationDelay='4000' animationDuration='1000'>overstimulation.</RoughNotation>I observe my environment, my dreams, and everything makes more sense, despite how simple they are, it is a great process to create these images. I still need to improve in many aspects for the result to be more authentic.</p>
         <div className='mt-10 grid grid-cols-1 md:grid-cols-2  gap-2'>
        {Fotos.map((foto, index) =>  {
            return (
            <div  key={index}>
          <Image
          src={foto.image}
          alt='/'
          width='1000'
          height='1000'
          objectFit='cover'
          className='md:rounded-lg'
        />
        </div>
         )}) }
        </div>
    </div>
  )
}

export default Portafolio;