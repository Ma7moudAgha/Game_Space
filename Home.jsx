import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import homeImg from '../img/home.png'

function Home() {
  return (
  <>
   <Container className='home-section' id='home'>
      <Row className='text-center'>
        <Col><img src={homeImg} alt='img' className='home-img' /></Col>
        <Col>
            <div className='homeText'>
                <span>this website will provide</span>
                <p>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit soluta, aut aliquid nostrum suscipit,
                 aspernatur sint culpa illum odit tempora ut dicta officiis molestiae odio! Eius nobis delectus quis tenetur!
                </p>
            </div>
        </Col>
      </Row>
    </Container>
  </>
  )
}

export default Home
