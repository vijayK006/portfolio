'use client'

import Link from 'next/link'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image';
import messageIcon from '../public/email-file.gif';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_s6yscqg', 'template_o53qtxj', form.current, {
          publicKey: 'ctLMl35oWO-hYo21q',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            document.getElementById('name').value="";
            document.getElementById('email').value="";
            document.getElementById('message').value="";
            const openpopup =document.getElementById('success-popup'); 
            openpopup.classList.add('openpopup')
            document.body.style.overflow="hidden";

if(openpopup.classList.contains('openpopup')){
    setTimeout(function() {
        openpopup.classList.remove('openpopup')
      document.body.style.overflow="";

      }, 5000);
}else{
    console.log('error in closing popup');
   
}
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

  

    
    return (
        <>
            <section className='bg-common py-5' id='contact'>

                <Container>
                    <Row>
             
                        <Col md={12}>
                            <div className='contact-form-body'>
                                <h5>Contact me </h5>
                                <p>
                                    Feel free to Contact me by submitting the form below
                                    and I will get back to you as soon as possible
                                </p>
                                <form className='pt-4' ref={form} onSubmit={sendEmail}>
                                    <Row>
                                        <Col md={6} className="py-2">
                                            <input type="text" placeholder='Enter your name' required className='contact_form shadow'
                                         name='name' id='name'/>
                                        </Col>

                                        <Col md={6} className="py-2">
                                            <input type="text" placeholder='Enter your email-id' required className='contact_form shadow'
                                           name='email' id='email'/>
                                        </Col>

                                        <Col md={12} className="py-2">
                                            <textarea type="text" name='message' id='message' placeholder='Write your message ...' cols={8} rows={8} className='contact_form shadow'></textarea>
                                        </Col>
                                    </Row>

<div className='pt-4'>
<input type='submit' className='btn-banner light' value="Submit" style={{border:"none"}}/>
</div>

                                </form>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </section>

            <div className='success-message' id='success-popup'>
                <div className='content-body px-md-5 py-md-5 px-2 py-5'>
                    <h4 className="text-center pb-4">
                          Thank you for reaching out!
                    </h4>
                    <div className='d-flex justify-content-center'>
                    <Image src={messageIcon} className='icon' alt='message-sent'/>
                    </div>
                <p className="text-center pt-4 margin-0">
                <b>Your message has been successfully submitted. I value your time
                 and the effort you&apos;ve made to contact me. I will personally
                 review your message and get back to you as soon as possible.</b>
               
                </p>


                </div>
            </div>
        </>
    )
}

export default Contact
