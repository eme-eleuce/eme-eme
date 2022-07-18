import React from "react";
import Typed from 'react-typed';
import {TbArrowNarrowDown} from 'react-icons/tb';
import Link from "next/link";



const Hero = () => {

    return(
      <div className='flex items-center justify-center h-screen mb-12 bg-cover bg-center bg-fixed custom-bg'>
           
            {/* O-overley */}
            <div className='flex top-0 left-0 right-0 bottom-0  z-[2]'/>
            <div className='p-5 text-[#E9E9EB] z-[2] md:ml-[1rem] ml-0 mt-[1rem]'>
            <Typed
          className='md:text-4xl text-4xl lg:text-5xl  md:pl-4 pl-2'
            strings={['bienvenido', 'добро пожаловать', 'welcome', 'bem-vindo', 'accueillir', 'いらっしゃいませ', 'välkommen', 'xoş gəldiniz']}
            typeSpeed={125}
            backSpeed={110}
            loop
          />
               
              
            </div>
            <div className='absolute justify-center mt-[36rem] lg:mt-[34.5rem] md:mt-[34rem] text-[#E9E9EB] cursor-pointer'>
            <Link href='/#galeria'>
               <TbArrowNarrowDown size={45}/>
            </Link>
              </div>
        </div>
        

    )
}

export default Hero;