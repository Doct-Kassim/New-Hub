import React from 'react';

import { Container, Row, Col, Card, ListGroup, Badge } from 'react-bootstrap';

import {
  FaUsers,
  FaChartLine,
  FaComments,
  FaBug,
  FaBolt,
  FaArrowUp,
  FaExclamationTriangle,
} from 'react-icons/fa';

const AdminDashboard = () => {
  return (
    <Container fluid className="py-4">
      <h2 className="mb-4 text-primary fw-bold">Admin Dashboard</h2>

      {/* Stats cards */}
      <Row className="mb-4">
        <Col md={3}>
          <Card bg="primary" text="white" className="shadow-sm">
            <Card.Body className="d-flex align-items-center">
              <FaUsers size={40} className="me-3" />
              <div>
                <Card.Title>Users</Card.Title>
                <Card.Text className="fs-4 fw-bold">120</Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card bg="success" text="white" className="shadow-sm">
            <Card.Body className="d-flex align-items-center">
              <FaArrowUp size={40} className="me-3" />
              <div>
                <Card.Title>Prices Updated</Card.Title>
                <Card.Text className="fs-4 fw-bold">35</Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card bg="warning" text="dark" className="shadow-sm">
            <Card.Body className="d-flex align-items-center">
              <FaComments size={40} className="me-3" />
              <div>
                <Card.Title>Forum Posts</Card.Title>
                <Card.Text className="fs-4 fw-bold">200</Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card bg="danger" text="white" className="shadow-sm">
            <Card.Body className="d-flex align-items-center">
              <FaBug size={40} className="me-3" />
              <div>
                <Card.Title>Pest Alerts</Card.Title>
                <Card.Text className="fs-4 fw-bold">7</Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Main content */}
      <Row>
        <Col lg={8} className="mb-4">
          <Card className="shadow-sm h-100">
            <Card.Header>
              <FaChartLine size={18} className="me-2 mb-1" />
              Market Prices Trend
            </Card.Header>
            <Card.Body>
              <div
                style={{
                  height: '300px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: '#888',
                  fontStyle: 'italic',
                  border: '2px dashed #ccc',
                  borderRadius: '6px',
                }}
              >
                Chart coming soon...
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} className="mb-4">
          <Card className="shadow-sm h-100">
            <Card.Header>
              <FaBolt size={18} className="me-2 mb-1" />
              Recent Activities
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <strong>User John</strong> added a new crop record.
                <Badge bg="info" className="ms-2">Today</Badge>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Admin</strong> updated market prices.
                <Badge bg="info" className="ms-2">Yesterday</Badge>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Mary</strong> posted in forum.
                <Badge bg="info" className="ms-2">2 days ago</Badge>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Pest alert</strong> for maize updated.
                <Badge bg="danger" className="ms-2">
                  <FaExclamationTriangle size={14} className="me-1 mb-1" />
                  Urgent
                </Badge>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>

      {/* Footer */}
      <div className="text-center text-muted mt-5">
        &copy; {new Date().getFullYear()} <strong>FarmerHub Admin Panel</strong>. All rights reserved.
      </div>
    </Container>
  );
};

export default AdminDashboard;
