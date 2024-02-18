import Image from 'next/image'
import React from 'react'
import logo from '../public/logo/logo.png';
import Link from 'next/link';
import { CgMenuRight } from "react-icons/cg";


const Navbar = () => {
  const togglemenu=()=>{
const menu = document.getElementById('menu');
menu.classList.toggle('openmenu')
  }

  return (
    <>
     <nav>
        <div className='navbar_logo d-flex align-items-center gap-1'>
            <Image src={logo}  alt='k a l e'/>
            <h5 className='margin-0 '>ALE</h5>
        </div>

        <ul className='nav_items' id='menu'>
<Link href="/"><li className='nav_list'>Home</li></Link> 
<Link href="#aboutme"><li className='nav_list'>About me</li></Link> 
<Link href="/"><li className='nav_list'>Projects</li></Link> 
<Link href="/"><li className='nav_list'>Contact me</li></Link> 

<Link href='/vijay-cv-2024.pdf' target='_black' download="vijay-cv-2024.pdf" className='btn-banner light'>Download my CV</Link>
        </ul>

        <div className='menu' onClick={togglemenu}>
        <CgMenuRight  className='icon'/>
        </div>
     </nav> 
    </>
  )
}

export default Navbar
