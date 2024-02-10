import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import bannerima1 from '../public/bannerimg-1.png'

const Banner = () => {
  return (
    <>
      <div className='banner'>
        <Container >
          <Row>
            <Col md={6}>
              <div className='content'>
                <h5>Hi there, I am</h5>
                <h1>Vijay S Kale</h1>
                <h6>Full Time Frontend Web Developer</h6>
              </div>
            </Col>

            <Col md={6}>
              <Image src={bannerima1} alt='banner-image'  />
        <div className='cicrle-bg'/>

            </Col>


          </Row>

        </Container>



      </div>
    </>
  )
}

export default Banner
