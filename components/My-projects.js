'use client'

import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { Col, Container, Row } from 'react-bootstrap';

// project images
import blueberryImg from '../public/website-screenshoot/all-devices-white-blueberry.png';
import falconImg from '../public/website-screenshoot/all-devices-white-falconGloab.png';
import galeliodataImg from '../public/website-screenshoot/all-devices-white-galelioData.png';
import healthonifyImg from '../public/website-screenshoot/all-devices-white-healthonify.png';
import rewlingsImg from '../public/website-screenshoot/all-devices-white-Rewlings.png';
import skeDashboardImg from '../public/website-screenshoot/all-devices-white-skeDashboard.png';
import webUniversalsImg from '../public/website-screenshoot/all-devices-white-webUniversals.png';
import travelonifyImg from '../public/website-screenshoot/all-devices-white-travelonify.png';
import Image from 'next/image';
import Link from 'next/link';
import { MdTravelExplore } from 'react-icons/md';

const My_projects = () => {
    return (
        <>
            <div className='bg_dark_project py-5 position-relative overflow-hidden' id="project">  
                <Container fluid>
                    <Row className='align-items-center'>
                        <Col md={4}>
                            <div className="recent-project">
                                <h2 style={{ color: "white" }}>Recently Completed Projects</h2>
<div className='project-underline'/>
                                <p style={{ color: "gray" }} className='mt-4'>Welcome to the heart
                                    of my creativity! In this section, you&apos;ll find a curated collection
                                    of projects that reflect my passion, skills, and dedication to craftsmanship.
                                    <br /> <br />I will Help You Build An Online Brand,
                                    offering solutions tailored to your vision and needs.</p>
                            </div>

                        </Col>

                        <Col md={8}>
                            <Swiper

                                effect={'coverflow'}
                                grabCursor={true}
                                centeredSlides={true}
                                slidesPerView={'auto'}
                                coverflowEffect={{
                                    rotate: 40,
                                    stretch: 2,
                                    depth: 150,
                                    modifier: 5,
                                    slideShadows: true,
                                }}
                                pagination={{
                                    clickable: true,
                                    // dynamicBullets: true,
                                }}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                loop={true}
                                modules={[EffectCoverflow, Pagination, Autoplay]}

                                breakpoints={{
                                    640: {
                                        spaceBetween: 5,
                                    },
                                    768: {
                                        spaceBetween: 10,
                                    },
                                    1024: {
                                        spaceBetween: 10,
                                    },
                                }}

                                className="mySwiper">
                                <SwiperSlide>
                                    <div className='project_slide pb-5'>
                                        <div className='project_img'>
                                            <Image src={blueberryImg} alt='blueberrypreinternationalschool' />
                                        </div>
                                        <div className='content pt-4 px-5'>
                                            <h5>Blueberry International Pre-school</h5>
                                            <Link href="https://blue-berry-international.netlify.app/" target='_blank'>View Project</Link>
                                        </div>
                                    </div>

                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className='project_slide pb-5'>
                                        <div className='project_img'>
                                            <Image src={skeDashboardImg} alt='skeDashboard' />
                                        </div>
                                        <div className='content pt-2 px-5'>
                                            <h5>Dashboard</h5>
                                            <Link href="https://sakmarathitelangana.in/new/admin/" target='_blank'>View Project</Link>

                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className='project_slide pb-5'>
                                        <div className='project_img'>
                                            <Image src={rewlingsImg} alt='skeDashboard' />
                                        </div>
                                        <div className='content pt-2 px-5'>
                                            <h5>Rawlings</h5>
                                            <Link href="https://rawlingns.netlify.app/" target='_blank'>View Project</Link>

                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className='project_slide pb-5'>
                                        <div className='project_img'>
                                            <Image src={healthonifyImg} alt='skeDashboard' />
                                        </div>
                                        <div className='content pt-2 px-5'>
                                            <h5>Healthonify</h5>
                                            <Link href="https://healthonify.com/" target='_blank'>View Project</Link>

                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className='project_slide pb-5'>
                                        <div className='project_img'>
                                            <Image src={travelonifyImg} alt='skeDashboard' />
                                        </div>
                                        <div className='content pt-2 px-5'>
                                            <h5>Travelonify</h5>
                                            <Link href="https://healthonify.com/travelonify" target='_blank'>View Project</Link>

                                        </div>
                                    </div>
                                </SwiperSlide>


                                <SwiperSlide>
                                    <div className='project_slide pb-5'>
                                        <div className='project_img'>
                                            <Image src={webUniversalsImg} alt='skeDashboard' />
                                        </div>
                                        <div className='content pt-2 px-5'>
                                            <h5>Web Universals</h5>
                                            <Link href="https://webuniversal-colne.netlify.app/" target='_blank'>View Project</Link>

                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className='project_slide pb-5'>
                                        <div className='project_img'>
                                            <Image src={falconImg} alt='skeDashboard' />
                                        </div>
                                        <div className='content pt-2 px-5'>
                                            <h5>Falcon Gloab</h5>
                                            <Link href="https://falconglobeinterio.in/" target='_blank'>View Project</Link>

                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className='project_slide pb-5'>
                                        <div className='project_img'>
                                            <Image src={galeliodataImg} alt='skeDashboard' />
                                        </div>
                                        <div className='content pt-2 px-5'>
                                            <h5>GalileoData</h5>
                                            <Link href="https://galileodata.us/" target='_blank'>View Project</Link>

                                        </div>
                                    </div>
                                </SwiperSlide>

                            </Swiper>
                        </Col>
                    </Row>

                </Container>

                <div className='circle'/>
                <div className='rectangle'/>
            </div>


        </>
    )
}

export default My_projects;
