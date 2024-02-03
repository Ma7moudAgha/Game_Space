import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import contactimg from '../img/contact.png';

function Contact() {
    return (
        <>
            <Container fluid className='contact-section' id='contact'>
                <Row>
                    <h1 className='text-center section-title mt-5'>Contact Us</h1>
                    <Col className='contact-col'>
                        <img src={contactimg} alt="img" className='contact-img'/>
                    </Col>

                    <Col className='contact-col'>
                        <ul>
                            <li class="ul-title">Adresses</li>
                            <li>calefonia </li>
                            <li>losangelus</li>
                            <li>british</li>
                            <li>germany</li>
                        </ul>
                    </Col>

                    <Col className='contact-col'>
                        <ul>
                            <li class="ul-title">Contact</li>
                            <li>gamesspace@gmail.com </li>
                            <li>011265759856</li>
                            <li>Gamesspace</li>
                        </ul>
                    </Col>

                    <Col className='contact-col'>
                        <ul>
                            <li class="ul-title">Services</li>
                            <li>internet</li>
                            <li>games</li>
                            <li>servers</li>
                            <li>playstation</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Contact
