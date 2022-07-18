import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';


const Navbar = () => {

    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('transparent');
    const [textColor, setTextColor] = useState('white');
    const handleNav = () => {

        setNav(!nav)
    }

    useEffect(() => {

        const changeColor = () => {

            if (window.scrollY >= 90) {
                 
                setColor('#ffffff')
                setTextColor('#000000')
            } else {

                setColor('transparent')
                setTextColor('#ffffff')
            }
        };
        window.addEventListener('scroll', changeColor)
    },[] )


  return (
    <div style={{backgroundColor: `${color}`}} className='fixed top-0 left-0 w-full z-10 ease duration-500'>
        <div className='max-w-[1240px] m-auto flex justify-center items-center p-4 py-2 text-white'>
            
            
            
            <ul style={{color: `${textColor}`}} className='hidden sm:flex '>
                <li className='p-3  text-2xl'>
                     <Link href='/'> home</Link>
                </li>
                <li className='p-3 ml-5 text-2xl'>
                     <Link href='/#galeria'> galeria</Link>
                </li>
                <li className='p-3 ml-5 text-2xl'>
                     <Link href='/work'> work</Link>
                </li>
                <li className='p-3 ml-5 text-2xl'>
                     <Link href='/contact'> contact</Link>
                </li>
            </ul>

            <div onClick={handleNav} className='block sm:hidden z-10 items-right'>
              {nav ? <AiOutlineClose size={25} style={{color: `${textColor}`}}/>  : <AiOutlineMenu size={25} style={{color: `${textColor}`}}/>}
            </div>

            {/* Mobile Menu */}

            <div className={nav ? 'sm:hidden absolute top-0 bottom-0 left-0 right-0 w-full h-screen flex justify-center items-center bg-black text-center ease-in duration-300' : 'sm:hidden absolute top-0 bottom-0 left-[-100%] right-0 w-full h-screen flex justify-center items-center bg-black text-center ease-in duration-300'}>
            <ul>
                <li onClick={() => setNav(false)} className='p-4 hover:text-gray-400 text-4xl'>
                     <Link href='/'> Home</Link>
                </li>
                <li onClick={() => setNav(false)} className='p-4 hover:text-gray-400 text-4xl'>
                     <Link href='/#galeria'> Galeria</Link>
                </li>
                <li onClick={() => setNav(false)} className='p-4 hover:text-gray-400 text-4xl'>
                     <Link href='/work'> Work</Link>
                </li>
                <li onClick={() => setNav(false)} className='p-4 hover:text-gray-400 text-4xl'>
                     <Link href='/contact'> Contact</Link>
                </li>
            </ul>

            </div>
        </div>
    </div>
  )
}

export default Navbar;

