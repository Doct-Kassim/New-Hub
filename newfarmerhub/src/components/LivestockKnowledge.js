// src/pages/LivestockKnowledge.js
import React, { useEffect, useState } from 'react';

import { Container, Card, Row, Col } from 'react-bootstrap';

import { Link } from 'react-router-dom';

const LivestockKnowledge = () => {
  const [livestockList, setLivestockList] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('livestockData')) || [];
    setLivestockList(stored);
  }, []);

  return (
    <Container className="mt-4">
      <h3 className="mb-4">Livestock Knowledge</h3>
      <Row>
        {livestockList.map((item, index) => (
          <Col md={6} lg={4} key={index} className="mb-4">
            <Link to={`/livestock/${index}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src={item.image}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LivestockKnowledge;
