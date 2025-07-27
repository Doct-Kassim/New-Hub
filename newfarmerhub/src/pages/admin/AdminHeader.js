// src/components/admin/AdminHeader.js
import React from 'react';

import { Navbar, Container, Button } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';

const AdminHeader = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // TODO: logic ya logout (e.g., clear token)
    navigate('/login');
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-3">
      <Container fluid>
        <Navbar.Brand>FarmerHub Admin</Navbar.Brand>
        <Button variant="outline-light" onClick={handleLogout}>
          Logout
        </Button>
      </Container>
    </Navbar>
  );
};

export default AdminHeader;
