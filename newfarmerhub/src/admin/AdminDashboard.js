// src/admin/AdminDashboard.js
import React from 'react';

import { Card, Row, Col } from 'react-bootstrap';

const AdminDashboard = () => {
  return (
    <div>
      <h4 className="mb-4">Welcome Admin 👋</h4>
      <p>Use the sidebar to manage crop techniques, livestock info, pest control, training, and market prices.</p>

      <Row className="mt-4">
        <Col md={4}>
          <Card className="shadow-sm border-0 mb-3">
            <Card.Body className="text-center">
              <h5>100+</h5>
              <p className="mb-0">Crops Added</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm border-0 mb-3">
            <Card.Body className="text-center">
              <h5>50+</h5>
              <p className="mb-0">Livestock Records</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm border-0 mb-3">
            <Card.Body className="text-center">
              <h5>30+</h5>
              <p className="mb-0">Pest Control Tips</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AdminDashboard;
