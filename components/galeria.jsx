import React, {useState} from 'react';
import Image from 'next/image';
import { VscArrowLeft, VscArrowRight } from 'react-icons/vsc';
import { Fotos } from './fotos';

const Galeria = ({ fotos }) => {
    const [current, setCurrent] = useState(0);
    const length = fotos.length;
  
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };
  
    if (!Array.isArray(fotos) || fotos.length <= 0) {
      return null;
    }
  
    return (
      <div id='galeria' className='max-w-[1240px] mx-auto'>
        <h1 className='text-4xl font-bold text-center mb-6 py-6'>Galeria</h1>
        <p className='text-center text-2xl'>you can see more content in the work section</p>
        <div className='relative flex justify-center p-4'>
  
        
      </div>
      </div>
    );
  };
  
  export default Galeria;