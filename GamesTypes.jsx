import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import card1 from '../img/card1.png';
import card2 from '../img/card2.png';
import card3 from '../img/card3.png';


function GamesTypes() {
    return (
        <>
            <Container className='games-section' id='types'>
                <Row>
                <h1 className='text-center section-title'>Types Of Games</h1>            

                    <Col>
                        <Card class='card' style={{ width: '18rem' }}>
                            <Card.Img className='card-img' variant="top" src={card1} />
                            <Card.Body>
                                <Card.Title>console games</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card class='card' style={{ width: '18rem' }}>
                            <Card.Img className='card-img' variant="top" src={card2} />
                            <Card.Body>
                                <Card.Title>vr games</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card class='card' style={{ width: '18rem' }}>
                            <Card.Img className='card-img' variant="top" src={card3} />
                            <Card.Body>
                                <Card.Title>online games</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </>
    )
}

export default GamesTypes
