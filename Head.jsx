import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BasicExample() {
  return (

    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home"  className="brand-name">GAMES SPACE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
            <Nav.Link href="#about" className="nav-link">About</Nav.Link>
            <Nav.Link href="#types" className="nav-link">Games</Nav.Link>
            <Nav.Link href="#best" className="nav-link">Best Games</Nav.Link>
            <Nav.Link href="#contact" className="nav-link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default BasicExample;