import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
      <Navbar style={{ backgroundColor: 'purple' }} data-bs-theme="dark"> {/* Use a vibrant green color */}
        <Container>
          <Navbar.Brand href="/" style={{ color: '#FFFFFF',fontSize:'1.5rem' }}> {/* White color for brand text */}
            Expense Tracker
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/" className="custom-nav-link">Home</Nav.Link>
            <Nav.Link href="/about" className="custom-nav-link">About</Nav.Link>
            <Nav.Link href="/signup" className="custom-nav-link">Sign Up</Nav.Link>
            <Nav.Link href="/login" className="custom-nav-link">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
