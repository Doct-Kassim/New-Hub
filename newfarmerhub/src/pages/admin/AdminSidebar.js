// src/components/AdminSidebar.js
import React from 'react';

import { Nav } from 'react-bootstrap';

import {
  FaUsers, FaChartLine, FaComments, FaBook, FaBug, FaSignOutAlt
} from 'react-icons/fa';

const AdminSidebar = () => {
  return (
    <div className="sidebar-wrapper open">
      <div className="sidebar-header px-3 py-2">
        <strong>Admin Menu</strong>
      </div>

      <Nav className="flex-column sidebar p-3">
        <Nav.Link href="/admin/users" className="d-flex align-items-center">
          <FaUsers className="me-2" /> Manage Users
        </Nav.Link>
        <Nav.Link href="/admin/prices" className="d-flex align-items-center">
          <FaChartLine className="me-2" /> Add Market Prices
        </Nav.Link>
        <Nav.Link href="/admin/forum" className="d-flex align-items-center">
          <FaComments className="me-2" /> View Forum Posts
        </Nav.Link>
        <Nav.Link href="/admin/training" className="d-flex align-items-center">
          <FaBook className="me-2" /> Training Materials
        </Nav.Link>
        <Nav.Link href="/admin/pests" className="d-flex align-items-center">
          <FaBug className="me-2" /> Pest/Disease Info
        </Nav.Link>
        <div className="mt-4">
          <Nav.Link href="/logout" className="d-flex align-items-center text-danger">
            <FaSignOutAlt className="me-2" /> Logout
          </Nav.Link>
        </div>
      </Nav>
    </div>
  );
};

export default AdminSidebar;
