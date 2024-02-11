import Image from 'next/image'
import React from 'react'
import logo from '../public/logo/logo.png';
import Link from 'next/link';

const Navbar = () => {
  return (
    <>
     <nav>
        <div className='navbar_logo d-flex align-items-center gap-1'>
            <Image src={logo}  alt='k a l e'/>
            <h5 className='margin-0 '>ALE</h5>
        </div>

        <ul className='nav_items'>
<Link href="/"><li className='nav_list'>Home</li></Link> 
<Link href="/about-me"><li className='nav_list'>About me</li></Link> 
<Link href="/"><li className='nav_list'>Service</li></Link> 
<Link href="/"><li className='nav_list'>Contact me</li></Link> 

<Link href='/' className='btn-banner light'>Download my CV</Link>
        </ul>
     </nav> 
    </>
  )
}

export default Navbar
