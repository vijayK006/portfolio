'use client'
// import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import Navbar from '../../layouts/Navbar';
import Banner from '../../components/Banner';
import Aboutme from '../../components/Aboutme';
import Myexp from '../../components/Myexp';
import My_projects from '../../components/My-projects';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

const page = () => {


  return (
    <>
      <Navbar />
      <Banner />
     <Aboutme/>
<My_projects/>
     <Myexp/>
<Contact/>
<Footer/>
    </>
  )
}

export default page
