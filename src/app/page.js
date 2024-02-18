'use client'
// import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import Navbar from '../../layouts/Navbar';
import Banner from '../../components/Banner';
import Aboutme from '../../components/Aboutme';
import Myexp from '../../components/Myexp';
import My_projects from '../../components/My-projects';

const page = () => {


  return (
    <>
      <Navbar />
      <Banner />
     <Aboutme/>
     <Myexp/>
<My_projects/>
    </>
  )
}

export default page
