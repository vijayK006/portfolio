'use client'
import Image from 'next/image';
import aboutimg from '../public/about_secimg.png';
import Link from 'next/link';
import { MdArrowRightAlt } from "react-icons/md";
import { Col, Container, Row } from 'react-bootstrap';

const Aboutme = () => {
  return (
    <>

      <Container className='pt-5' id="aboutme">
        <div className='section_header d-flex justify-content-start align-items-center pt-5'>
          <span>Get to know me!</span>
          <h4>About me</h4>
        </div>
        <div className='underline mt-3' />
        <Row className=' align-items-center'>
          <Col md={6}>
            <p className='light'>I’m a detail-oriented Full Stack Developer with over 3+ years of experience building dynamic and scalable web applications.
              I specialize in React.js for the frontend and Node.js with Express for backend development, delivering secure, maintainable, and performant solutions.</p>

            <p className='light'>
              My journey started with front-end development — crafting intuitive interfaces — and evolved into full stack engineering, where I now design and develop complete web solutions from concept to deployment.
              <br/>
              <br/>
              When I’m not coding, you’ll find me exploring new JavaScript frameworks, optimizing workflows, or mentoring aspiring developers.
            </p>

            <div className='pt-5 mt-3'>
              <Link href="#contact" className="section-btn px-4 py-3">Let&apos;s Connect
                &nbsp;
                <MdArrowRightAlt style={{ fontSize: '30px' }} />
              </Link>
            </div>
          </Col>
          <Col md={1} />
          <Col md={5}>
            <div className='section_img-resp'>
              <Image src={aboutimg} alt='about-coder' />
            </div>
          </Col>
        </Row>

      </Container>

    </>
  )
}

export default Aboutme;
