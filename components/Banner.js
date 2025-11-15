import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { BsFillCloudDownloadFill } from "react-icons/bs";



const Banner = () => {
  return (
    <>
      <div className='banner'>

        <div className='content'>
          <h5 className='mb-md-4 mb-2'>Hi there, I&apos;m</h5>
          <h1 className='mb-md-3 mb-4'>Vijay S Kale</h1>
          <h6>Full Time MERN Stack Developer</h6>

          <p className='light'>A passionate Full Stack Developer specialized in React.js, Node.js, and Express.js. I love turning ideas into responsive, high-performance web applications with clean architecture and seamless user experiences.</p>

          <div className='d-flex align-items-center gap-4 pt-md-3 pt-5 mt-md-1 mt-5'>
            <Link href='#contact' className='btn-banner light'>Contact me</Link>
            <a href='/vijay-cv.pdf' target='_black' download="vijay-cv.pdf" className='btn-outline-banner bold'>Download CV &nbsp; <BsFillCloudDownloadFill /></a>
          </div>

        </div>


        <div className='cicrle-bg' />

        <div className='d-flex justify-content-center'>
          <div className='sliderbar'>
            <div className='dot' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner
