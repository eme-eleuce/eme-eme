import React from 'react'
import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';

const IgFoto = ({ imgS }) => {
  return (
    <div className='relative'>
      <Image src={imgS} alt='/' className=' rounded' layout='responsive'/>
      
    </div>
  )
}

export default IgFoto;