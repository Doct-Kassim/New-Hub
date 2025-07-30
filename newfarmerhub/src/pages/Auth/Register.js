import React from 'react';

import { Modal, Form, Button, Row, Col } from 'react-bootstrap';

import { FaUser, FaEnvelope, FaLock, FaUserTag } from 'react-icons/fa';

const Register = ({ show, onHide, switchToLogin }) => {
  const handleRegister = (e) => {
    e.preventDefault();

    // Hapa unaweza ongeza validation / logic ya saving kwa backend
    // Baada ya registration successful:
    onHide(); // funga register modal
    if (switchToLogin) {
      setTimeout(() => switchToLogin(), 200); // fungua login modal
    }
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      size="md"
      backdrop="static"
      keyboard={false}
      contentClassName="border-0 bg-transparent"
    >
      <div
        className="p-4 rounded-4 shadow-lg"
        style={{
          background: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(15px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          color: '#1e1e1e',
        }}
      >
        {/* CLOSE BUTTON */}
        <div className="d-flex justify-content-end">
          <Button variant="dark" size="sm" onClick={onHide} className="rounded-end px-2 py-1">
            ✕
          </Button>
        </div>

        {/* TITLE */}
        <h3 className="text-center fw-bold mb-4">Register</h3>

        <Form onSubmit={handleRegister}>
          {/* USERNAME */}
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>Username</Form.Label>
            <div className="input-group">
              <Form.Control type="text" placeholder="Enter username" />
              <span className="input-group-text bg-white"><FaUser /></span>
            </div>
          </Form.Group>

          {/* EMAIL */}
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <div className="input-group">
              <Form.Control type="email" placeholder="Enter email" />
              <span className="input-group-text bg-white"><FaEnvelope /></span>
            </div>
          </Form.Group>

          {/* PASSWORD */}
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <div className="input-group">
              <Form.Control type="password" placeholder="Enter password" />
              <span className="input-group-text bg-white"><FaLock /></span>
            </div>
          </Form.Group>

          {/* ROLE */}
          <Form.Group className="mb-4" controlId="role">
            <Form.Label>Role</Form.Label>
            <div className="input-group">
              <Form.Select>
                <option value="">Select role</option>
                <option value="farmer">Farmer</option>
                <option value="admin">Admin</option>
              </Form.Select>
              <span className="input-group-text bg-white"><FaUserTag /></span>
            </div>
          </Form.Group>

          {/* SUBMIT */}
          <Button type="submit" className="w-100 bg-success border-success">
            Register
          </Button>
        </Form>

        {/* LOGIN LINK */}
        <div className="text-center mt-3">
          Already have an account?{' '}
          <a
            href="#"
            className="fw-semibold text-decoration-none"
            onClick={(e) => {
              e.preventDefault();
              onHide();
              if (switchToLogin) {
                setTimeout(() => switchToLogin(), 200);
              }
            }}
          >
            Login
          </a>
        </div>
      </div>
    </Modal>
  );
};

export default Register;
