import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import swiper1 from '../img/swiper1.png'
import swiper2 from '../img/swiper2.png'
import swiper3 from '../img/swiper3.png'
import swiper4 from '../img/swiper4.png'

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';


function BestGames() {
    return (
        <>
            <Container className='services-section' id='best'>
                <Row>
                <h1 className='text-center section-title'>Best Games</h1>            

                    <Col>

                        <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={'auto'}
                            coverflowEffect={{
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: true,
                            }}
                            modules={[EffectCoverflow, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide className='text-center'>
                                <img src={swiper1} alt='img' className='swiper-img'/>
                                <p className='swiper-text'>
                                <span className='game-name'> gold and gelwary </span><br />
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                     Autem vitae minima optio quia ipsum laudantium reiciendis rerum
                                      sit dolor esse obcaecati libero doloribus,
                                     dolorem ratione, nam architecto perspiciatis molestiae mollitia!
                                </p>
                            </SwiperSlide>

                            <SwiperSlide className='text-center'>
                                <img src={swiper2} alt='img' className='swiper-img'/>
                                <p className='swiper-text'>
                                <span className='game-name'> airport similtor </span><br />
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                     Autem vitae minima optio quia ipsum laudantium reiciendis rerum
                                      sit dolor esse obcaecati libero doloribus,
                                     dolorem ratione, nam architecto perspiciatis molestiae mollitia!
                                </p>
                            </SwiperSlide>

                            <SwiperSlide className='text-center'>
                                <img src={swiper3} alt='img' className='swiper-img'/>
                                <p className='swiper-text'>
                                <span className='game-name'> advantager in island  </span><br />
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                     Autem vitae minima optio quia ipsum laudantium reiciendis rerum
                                      sit dolor esse obcaecati libero doloribus,
                                     dolorem ratione, nam architecto perspiciatis molestiae mollitia!
                                </p>
                            </SwiperSlide>

                            <SwiperSlide className='text-center'>
                                <img src={swiper4} alt='img' className='swiper-img'/>
                                <p className='swiper-text'>
                                <span className='game-name'> god of war </span><br />
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                     Autem vitae minima optio quia ipsum laudantium reiciendis rerum
                                      sit dolor esse obcaecati libero doloribus,
                                     dolorem ratione, nam architecto perspiciatis molestiae mollitia!
                                </p>
                            </SwiperSlide>

                           
                        </Swiper>    
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default BestGames
