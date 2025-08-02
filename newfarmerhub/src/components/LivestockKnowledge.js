// src/pages/LivestockKnowledge.js
import React, { useEffect, useState } from 'react';

import { Container, Row, Col, Card } from 'react-bootstrap';

import { Link } from 'react-router-dom';

const LivestockKnowledge = () => {
  const [livestockList, setLivestockList] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('livestockInfo')) || [];
    setLivestockList(data);
  }, []);

  return (
    <Container className="mt-4">
      <h3 className="mb-4">Livestock Knowledge</h3>
      <Row>
        {livestockList.map((item, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="h-100">
              <Link to={`/livestock/${index}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Card.Img
                  variant="top"
                  src={item.image}
                  style={{ height: '180px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LivestockKnowledge;
