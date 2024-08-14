import React from 'react';
import { Button} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';





function Header() {
  const expand = false; 
  const navigate = useNavigate();
  
  const handleLoginClick = () => {
    navigate('/login');
  };
  const handleContactUs = () => {
    navigate('/contact');
  };


  return (
    <div>
   <Navbar bg="dark" style={{height:'9%',border:'none'}}>
        <Container className="d-flex align-items-center ml-2">
          <Navbar.Brand href="#home"><img src="./Images/logo.png" alt="no image"style={{ height: '150px',filter: 'brightness(1)'}} /></Navbar.Brand>
          <Nav className="d-flex justify-content-between align-items-center mx-3">
            <Nav.Link as={NavLink}  to='/about' style={{color:' #30afdd',fontSize:'20px'}}>About Us</Nav.Link>
            <Nav.Link style={{color:' #30afdd',fontSize:'20px'}} onClick={handleContactUs}>Contact us</Nav.Link>
            <Button style={{backgroundColor:' #30afdd',fontSize:'15px'}} onClick={handleLoginClick}>Login</Button>
          </Nav>
        </Container>
      </Navbar>
   
    </div>
  )
}

export default Header
