import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const Banner = () => {
  return (
    <>
      <div className='banner'>
     
              <div className='content'>
                <h5 className='mb-4'>Hi there, I am</h5>
                <h1 className='mb-3'>Vijay S Kale</h1>
                <h6>Full Time Frontend Web Developer</h6>

                <p>Open To Collaborations & Opportunities | HTML5 | CSS3 | 
                Bootstrap5 | JavaScript | React.js | Next.js | Editing Web Templates.</p>

<div className='d-flex align-items-center gap-4 pt-3'>
<Link href='/' className='btn-banner light'>Contact me</Link>
<Link href='/' className='btn-outline-banner light'>Download CV</Link>
</div>
              </div>
           

        <div className='cicrle-bg'/>

      </div>
    </>
  )
}

export default Banner
