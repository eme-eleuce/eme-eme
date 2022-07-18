import React from 'react'
import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';

const IgFoto = ({ imgS }) => {
  return (
    <div className='relative'>
      <Image src={imgS} alt='/' className='h-full w-full rounded' layout='responsive'/>
      <div className='flex justify-center items-center group absolute top-0 bottom-0 left-0 right-0 hover:bg-black/30 hover:rounded' >
      <a  href='https://www.instagram.com/eme.eth/'
          target={"_blank"}
          rel={"noreferrer"} 
          className='text-gray-300 hidden group-hover:block' >
            <FaInstagram size={30} />
      </a>
      </div>
    </div>
  )
}

export default IgFoto;