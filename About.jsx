import { Col, Container, Row } from 'react-bootstrap'
import aboutImg from '../img/about.png';

function About() {
  return (
    <>
      <Container className="about-section" id='about'>
        <Row>
            <h1 className='text-center section-title'>About Website</h1>            
            <Col>
                <Row className='about-card'>
                    <span>Gaming Information </span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sequi tempora totam soluta ad ratione sed, unde placeat ipsa nesciunt est.
                        Corporis laborum minima quas consequatur iure sint libero eligendi
                        voluptates?
                    </p>
                </Row>
                <Row className='about-card'>
                    <span>Gaming Information </span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sequi tempora totam soluta ad ratione sed, unde placeat ipsa nesciunt est.
                        Corporis laborum minima quas consequatur iure sint libero eligendi
                        voluptates?
                    </p>
                </Row>
                <Row className='about-card'>
                    <span>Gaming Information </span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sequi tempora totam soluta ad ratione sed, unde placeat ipsa nesciunt est.
                        Corporis laborum minima quas consequatur iure sint libero eligendi
                        voluptates?
                    </p>
                </Row>
            </Col>

            <Col>
                <img src={aboutImg} alt="img" className='about-img '/>
            </Col>

        </Row>
      </Container>
    </>
  )
}

export default About
