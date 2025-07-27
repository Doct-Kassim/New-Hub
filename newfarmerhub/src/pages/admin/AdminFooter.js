// src/components/admin/AdminFooter.js
import React from 'react';

import { Container } from 'react-bootstrap';

const AdminFooter = () => {
  return (
    <footer className="bg-dark text-light py-3 mt-auto">
      <Container className="text-center">
        &copy; {new Date().getFullYear()} FarmerHub Admin Panel. All rights reserved.
      </Container>
    </footer>
  );
};

export default AdminFooter;
