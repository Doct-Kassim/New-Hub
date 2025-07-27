// Header.js
import React from 'react';

import { FaBars } from 'react-icons/fa';

import { Navbar, Container } from 'react-bootstrap';

const Header = ({ onToggleSidebar }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <button className="btn btn-dark me-3" onClick={onToggleSidebar}>
          <FaBars />
        </button>
        <Navbar.Brand href="/">FarmerHub</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
