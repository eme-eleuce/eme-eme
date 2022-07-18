import React from 'react'
import IgFoto from './igfoto';
import Foto1 from '../public/foto/astronauta.jpg.jpg';
import Foto2 from '../public/foto/felix.png';
import Foto3 from '../public/foto/u.jpg';
import Foto4 from '../public/foto/ni.png';
import Foto5 from '../public/foto/ro.jpg';
import Foto6 from '../public/foto/ea.jpg';
import { RoughNotation } from 'react-rough-notation';




const Instagram = () => {
  return (
    <div id='galeria' className='max-w-[1240px] mx-auto text-center py-16'>
        <p className='text-center text-3xl pb-5 py-6'>you can see more content in the <RoughNotation type="circle" show={true} color="#ff1a1a" strokeWidth='2px'    animationDelay='3000' animationDuration='900'> work </RoughNotation>  section </p>
      
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2'>
           
            <IgFoto imgS={Foto2} className='col-start-2 col-span-2'/>
            <IgFoto imgS={Foto3} className=' col-span-1'/>
            <IgFoto imgS={Foto4} className='col-auto col-end-2'/>
            <IgFoto imgS={Foto1} className='col-span-2'/>
            <IgFoto imgS={Foto5} />
            <IgFoto imgS={Foto6} className='row-span-2'/>
        </div>
    </div>
  )
}

export default Instagram;