'use client'
// import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import Navbar from '../../layouts/Navbar';
import Banner from '../../components/Banner';
import Aboutme from '../../components/Aboutme';
import Myexp from '../../components/Myexp';

const page = () => {


  return (
    <>
      <Navbar />
      <Banner />
     <Aboutme/>
     <Myexp/>

    </>
  )
}

export default page
