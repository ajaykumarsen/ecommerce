import {Navbar, Nav, Container, Row, NavDropdown} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';


function Header(){
    return (
        <div>
            <header>
            <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>ProShop</Navbar.Brand>
        </LinkContainer>
   
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/cart">
              <Nav.Link className='fas fa-shopping-cart'>Cart</Nav.Link>
            </LinkContainer>
           <LinkContainer to="/login">
            <Nav.Link className='fas fa-user'>Login</Nav.Link>
           </LinkContainer>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            </header>
        </div>
    )
}

export default Header;