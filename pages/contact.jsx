import React from 'react'
import { FaInstagram, FaGithub, FaMapPin } from 'react-icons/fa';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import Image from 'next/image';


const Contacto = () => {
  return (
    <div className='max-w-[900px] md:max-w-[1340px] mx-auto py-12 text-center items-center justify-center'>
       
      <h1 className='font-bold text-4xl  py-14 mt-20'>
        Contact
      </h1>
       
      <div className=" flex  items-center justify-center">
  <div className="  text-black   m-12">
    <div className=" sm:h-100 lg:h-120 overflow-hidden">
      <Image className=" rounded-t"
        src="https://cbupghhlrkrzqpwiaulr.supabase.co/storage/v1/object/sign/fotos/espacio.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmb3Rvcy9lc3BhY2lvLmpwZyIsImlhdCI6MTY1NzY2MTI3OCwiZXhwIjoxOTczMDIxMjc4fQ.wjrosmUAO9exzQIPES3I_6tD-VDXX23HR2cxXaDPcio&t=2022-07-12T21%3A38%3A36.969Z"
        width='700'
        height='700'
        alt="/" />
    </div>
   
    <div >
      <div className=" md:px-10 mb-10">
        <h2 className="text-4xl py-4 font-bold">
        
          Luis Mora
        
          
          </h2>

        <p className= " mt-1 mb-6 text-xl text-gray-500">Photographer / Web Developer</p>
        <p className='mb-8 text-2xl'>born and raised in <RoughNotation type="highlight" show={true} color="#66ff66" strokeWidth='2px'  padding={'left'}  animationDelay='3000' animationDuration='1000'> Venezuela </RoughNotation> / 23 years old / currently in Ecuador</p>
        <p className="mt-2 text-2xl text-center ">
        
          I like to keep my mind busy, creating things and expanding my knowledge. Available for anything, looking for an <RoughNotation type="circle"  show={true} color="#ffb066" strokeWidth='2px' animationDelay='4000' animationDuration='1100' padding={'right'}>opportunity </RoughNotation> to cooperate with other people to keep improving my skills.
        
           </p>
        <div
          className="justify-center px-4 py-2  max-w-min mx-auto mt-8 text-lg ">
            <RoughNotation type="underline"  show={true} color="#F32424" strokeWidth='2px' animationDelay='5000' animationDuration='1000' order="2" padding={'right'}>
          luis.iarmolen@gmail.com
          </RoughNotation>
        </div>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-8">
          <a href='https://www.instagram.com/eme.eleuce/'
          target={"_blank"}
          rel={"noreferrer"} 
            className=" p-1 sm:p-2 inline-flex items-center">
            <FaInstagram size={40} />
          </a>
          <a href='https://github.com/eme-eleuce'
             target={"_blank"}
             rel={"noreferrer"} 
              className="p-1 sm:p-2 inline-flex items-center">
            <FaGithub size={40} />
          </a>
          
          
        </div>
      </div>
    </div>
  </div>
</div>

 
  

        </div>
    
  )
}

export default Contacto;