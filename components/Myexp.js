import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const Myexp = () => {
  return (
    <>
   
        <Container className='py-5'>
          <div className='section_header d-flex justify-content-start align-items-center pt-5 pb-5'>
            <span>My Web Development Journey</span>
            <h4>My Work Experience</h4>
          </div>
          <div className='underline mt-3' />

          <Row className="pt-5 align-items-center">
            <Col md={7}>
              <div id="accordion">
                <div className="shadow mb-3 b-radius-5">
                  <div className="card-header py-3">
                    <div className="btn" data-bs-toggle="collapse" href="#collapseOne" >
                      <p className='margin-0 light'>07/05/2023 - [Present] at <a href='https://webuniversals.co.in/' target='_blank' className='link_heightlight bold'>Web Universals</a>  | Bangalure</p>
                    </div>
                  </div>
                  <div id="collapseOne" className="collapse show" data-bs-parent="#accordion">
                    <hr />
                    <div className="card-body p-3">
                      <p className='light'>
                        Utilizing my expertise in HTML5, CSS3, Bootstrap5, JavaScript, React.js, and
                        Next.js, I actively contribute to website development projects. Additionally,
                        I have collaborated closely with SEO professionals, which has provided me with
                        foundational knowledge in SEO practices. Engaging with cross-functional teams,
                        I prioritize creating user-friendly and visually appealing web solutions.
                        Moreover, I am committed to continuously learning and adapting to emerging
                        trends and technologies in web development, ensuring that my skills remain
                        current and relevant in the ever-evolving landscape of the industry.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="shadow mb-3 b-radius-5">
                  <div className="card-header py-3">
                    <div className="collapsed btn" data-bs-toggle="collapse" href="#collapseTwo">
                      <p className='margin-0 light'>27/01/2022 - 31/12/2022 at <a href='https://www.octaloptimum.com/' target='_blank' className='link_heightlight bold'>Octal Optimum Technologys</a>  | Bangalure</p>
                    </div>
                  </div>
                  <div id="collapseTwo" className="collapse" data-bs-parent="#accordion">
                    <hr />
                    <div className="card-body p-3">
                      <p className='light'>
                        In January 2022, I commenced my career journey as an intern at
                        Octal Optimum, where I delved into supporting web development
                        projects centered around React.js technology. Demonstrating
                        dedication and proficiency, I swiftly rose to the position
                        of Junior Software Developer by May 2022. Throughout my
                        tenure, I actively collaborated on various front-end
                        development tasks, adeptly modifying web templates and
                        tackling complex challenges head-on. Leveraging my expertise
                        in HTML5, CSS3, Bootstrap5, JavaScript, and React.js,
                        I made significant contributions to the advancement
                        of website development projects, showcasing
                        both my technical prowess and commitment to excellence.
                      </p>
                    </div>
                  </div>
                </div>


              </div>
            </Col>
            <Col md={1} />
            <Col md={4}>
              <h5>Technical Skill&apos;s</h5>
              <div className="d-flex gap-2 flex-wrap">
                <p className='skil_card light px-3 py-2'>HTML5</p>
                <p className='skil_card light px-3 py-2'>CSS3</p>
                <p className='skil_card light px-3 py-2'>BootStrap (v5)</p>
                <p className='skil_card light px-3 py-2'>Java-script</p>
                <p className='skil_card light px-3 py-2'>React.js (v18)</p>
                <p className='skil_card light px-3 py-2'>React Router</p>
                <p className='skil_card light px-3 py-2'>Next.js (v14)</p>
                <p className='skil_card light px-3 py-2'>Rest API&apos;s</p>
                <p className='skil_card light px-3 py-2'>NPM</p>
                <p className='skil_card light px-3 py-2'>SEO Basic Concepts</p>
                <p className='skil_card light px-3 py-2'>Webpack</p>
                <p className='skil_card light px-3 py-2'>Responsive Design</p>
                <p className='skil_card light px-3 py-2'>Web Optimization</p>

              </div>

              <hr />

              <h5>Tools</h5>
              <div className='d-flex gap-2 flex-wrap'>
                <p className='skil_card light px-3 py-2'>Visual Studio Code</p>
                <p className='skil_card light px-3 py-2'>Postman</p>
                <p className='skil_card light px-3 py-2'>GitHub Version Control</p>
                <p className='skil_card light px-3 py-2'>Agile/Scrum methodology</p>
              </div>
            </Col>
          </Row>
        </Container>
  

    </>
  )
}

export default Myexp
