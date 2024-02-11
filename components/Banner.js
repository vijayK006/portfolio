import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const Banner = () => {
  return (
    <>
      <div className='banner'>
     
              <div className='content'>
                <h5 className='mb-4'>Hi there, I&apos;m</h5>
                <h1 className='mb-3'>Vijay S Kale</h1>
                <h6>Full Time Frontend Web Developer</h6>

                <p className='light'>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>

<div className='d-flex align-items-center gap-4 pt-3'>
<Link href='/' className='btn-banner light'>Contact me</Link>
<Link href='/' className='btn-outline-banner light'>Download CV</Link>
</div>
              </div>
           

        <div className='cicrle-bg'/>

<div className='d-flex justify-content-center'>
  <div className='sliderbar'>
    <div className='dot'/>
  </div>
</div>
      </div>
    </>
  )
}

export default Banner
