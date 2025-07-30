import React from 'react';

import { Modal, Form, Button, Row, Col } from 'react-bootstrap';

import { FaUser, FaLock } from 'react-icons/fa';

const LoginPage = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} centered size="md" backdrop="static" keyboard={false} contentClassName="border-0 bg-transparent">
      <div
        className="p-4 rounded-4 shadow-lg"
        style={{
          background: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(15px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          color: '#1e1e1e'
        }}
      >
        {/* CLOSE BUTTON */}
        <div className="d-flex justify-content-end">
          <Button variant="dark" size="sm" onClick={onHide} className="rounded-end px-2 py-1">
            ✕
          </Button>
        </div>

        {/* LOGIN HEADER */}
        <h3 className="text-center fw-bold mb-4">Login</h3>

        <Form>
          {/* USERNAME */}
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>Username</Form.Label>
            <div className="input-group">
              <Form.Control type="text" placeholder="Enter your username" />
              <span className="input-group-text bg-white"><FaUser /></span>
            </div>
          </Form.Group>

          {/* PASSWORD */}
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <div className="input-group">
              <Form.Control type="password" placeholder="Enter your password" />
              <span className="input-group-text bg-white"><FaLock /></span>
            </div>
          </Form.Group>

          {/* OPTIONS */}
          <Row className="mb-3">
            <Col>
              <Form.Check type="checkbox" label="Remember me" />
            </Col>
            <Col className="text-end">
              <a href="#" className="text-decoration-none">Forgot Password?</a>
            </Col>
          </Row>

          {/* SUBMIT */}
          <Button type="submit" className="w-100 bg-success border-success">
            Login
          </Button>
        </Form>

        {/* REGISTER LINK */}
        <div className="text-center mt-3">
          Don’t have an account?{' '}
          <a href="#" className="fw-semibold text-decoration-none">Register</a>
        </div>
      </div>
    </Modal>
  );
};

export default LoginPage;
