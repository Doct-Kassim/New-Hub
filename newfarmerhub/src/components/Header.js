// Header.js
import React from 'react';

import { FaBars, FaLeaf } from 'react-icons/fa';

import { Navbar, Container } from 'react-bootstrap';

const Header = ({ onToggleSidebar }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <button className="btn btn-dark me-3" onClick={onToggleSidebar}>
          <FaBars />
        </button>

        <Navbar.Brand href="/" className="d-flex align-items-center">
          <FaLeaf size={24} className="me-2 text-success" />
          <span className="fw-bold">FarmerHub</span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
