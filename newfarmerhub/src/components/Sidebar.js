import React from 'react';

import { Nav } from 'react-bootstrap';

import {
  FaHome, FaBook, FaUsers,
  FaChartLine, FaSignInAlt, FaUserPlus, FaBars
} from 'react-icons/fa';

import '../styles/sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar, openLoginModal, openRegisterModal }) => {
  return (
    <div className={`sidebar-wrapper ${isOpen ? 'open' : 'collapsed'}`}>
      <div className="sidebar-header d-flex align-items-center justify-content-between px-3 py-2">
        <button className="menu-btn" onClick={toggleSidebar}>
          <FaBars />
        </button>
        {isOpen && <span className="ms-2 fw-bold">Menu</span>}
      </div>

      <Nav className="flex-column sidebar p-3">
        <Nav.Link href="/" className="d-flex align-items-center">
          <FaHome className="me-2" /> {isOpen && 'Home'}
        </Nav.Link>
        <Nav.Link href="/knowledge" className="d-flex align-items-center">
          <FaBook className="me-2" /> {isOpen && 'Knowledge Hub'}
        </Nav.Link>
        <Nav.Link href="/forum" className="d-flex align-items-center">
          <FaUsers className="me-2" /> {isOpen && 'Community Forum'}
        </Nav.Link>
        <Nav.Link href="/market" className="d-flex align-items-center">
          <FaChartLine className="me-2" /> {isOpen && 'Market Prices'}
        </Nav.Link>

        <div className="mt-4">
          <Nav.Link onClick={openLoginModal} className="d-flex align-items-center" style={{ cursor: 'pointer' }}>
            <FaSignInAlt className="me-2" /> {isOpen && 'Login'}
          </Nav.Link>

          <Nav.Link onClick={openRegisterModal} className="d-flex align-items-center" style={{ cursor: 'pointer' }}>
            <FaUserPlus className="me-2" /> {isOpen && 'Register'}
          </Nav.Link>
        </div>
      </Nav>
    </div>
  );
};

export default Sidebar;
